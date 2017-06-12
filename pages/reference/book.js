/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ReferenceLayout from '../../components/reference-layout';

export default class ManualPage extends Component {
  static title = 'Book';

  render() {
    const md = require('./book.md');
    return (
      <ReferenceLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ReferenceLayout>
    );
  }

}

