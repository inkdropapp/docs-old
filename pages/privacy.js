/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {
  static title = 'Privacy Policy';

  render() {
    const md = require('../components/privacy.md');
    return (
      <div className="ui container main-content">
        <h1>Privacy Policy</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </div>
    );
  }

}
