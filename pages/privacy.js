import React, { Component } from 'react';
import InfopageLayout from '../components/infopage-layout';

export default class InfoPage extends Component {
  static title = 'Privacy Policy';

  render() {
    const md = require('./privacy.md');
    return (
      <InfopageLayout currentPageTitle={ InfoPage.title }>
        <h1>Privacy Policy</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </InfopageLayout>
    );
  }

}
