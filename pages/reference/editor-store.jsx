import React, { Component } from 'react';
import ReferenceLayout from '../../components/reference-layout';

export default class ManualPage extends Component {
  static title = 'Editor Store';

  render() {
    const md = require('./editor-store.md');
    return (
      <ReferenceLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ReferenceLayout>
    );
  }

}

