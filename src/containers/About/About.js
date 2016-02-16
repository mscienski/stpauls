import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us"/>

        <p>This project was originally created by Erik Rasmussen
          (<a href="https://twitter.com/erikras" target="_blank">@erikras</a>), but has since seen many contributions
          from the open source community. Thank you to <a
            href="https://github.com/erikras/react-redux-universal-hot-example/graphs/contributors"
            target="_blank">all the contributors</a>.
        </p>

        <h3>Mini Bar <span style={{color: '#aaa'}}>(not that kind)</span></h3>

        <p>Hey! You found the mini info bar! The following component is display-only. Note that it shows the same
          time as the info bar.</p>

        <MiniInfoBar/>
      </div>
    );
  }
}
