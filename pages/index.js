/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss';
import React, { Component } from 'react';
// import { Grid, Col, Row } from 'react-bootstrap';

export default class extends Component {

  render() {
    return (
      <div className="ui container main-content">
        <h1>Inkdrop Documentation</h1>
        <p>
        Welcome to Inkdrop!
        Get familiar with the Inkdrop product using the tutorials and
        references below.
        </p>
        <p>
        Available soon
        </p>
        <a href="https://mixpanel.com/f/partner" rel="nofollow"><img src="//cdn.mxpnl.com/site_media/images/partner/badge_light.png" alt="Mobile Analytics" /></a>
      </div>
    );
  }

}
