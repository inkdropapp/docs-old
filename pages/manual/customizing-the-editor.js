/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ManualLayout from '../../components/manual-layout';

export default class ManualPage extends Component {
  static title = 'Customizing the Editor';

  render() {
    const md = require('./customizing-the-editor.md');
    return (
      <ManualLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ManualLayout>
    );
  }

}

