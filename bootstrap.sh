#!/usr/bin/env bash

#sudo add-apt-repository ppa:saiarcot895/myppa
#sudo apt-get update
#sudo apt-get -y install apt-fast

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo chown -R `whoami` /etc/apt/sources.list.d/
sudo echo "deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main" >> /etc/apt/sources.list.d/pgdg.list
sudo wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
  sudo apt-key add -
sudo apt-get update
sudo apt-get install nodejs libxml++2.6-2 libxslt-dev libxml2-dev libsqlite3-dev libpq-dev postgresql-9.4 --yes
sudo cp /vagrant ~/stpauls -r
cd ~/stpauls
sudo chown -R `whoami` ./
sudo npm install -g npm@"~3.3.10"
npm install
