import React, { Component } from 'react';
import ManualLayout from '../../components/manual-layout';

export default class ManualPage extends Component {
  static title = 'Working Behind Web Proxy';

  render() {
    const md = require('./working-behind-a-corporate-web-proxy.md');
    return (
      <ManualLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ManualLayout>
    );
  }

}


