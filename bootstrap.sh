#!/usr/bin/env bash

sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password testtest1'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password testtest1'
curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.2 ruby2.2-dev bundler nodejs mysql-server-5.6 libsqlite3-dev libpq-dev libmysqlclient-dev --yes
sudo cp /vagrant ~/stpauls -r
cd ~/stpauls
sudo chown -R `whoami` ./
sudo bundle install
npm install
rake db:setup
