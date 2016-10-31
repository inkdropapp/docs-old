import React, { Component } from 'react';
import ManualLayout from '../../components/manual-layout';

export default class ManualPage extends Component {
  static title = 'Managing Tasks with Status';

  render() {
    const md = require('./managing-tasks-with-status.md');
    return (
      <ManualLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ManualLayout>
    );
  }

}
