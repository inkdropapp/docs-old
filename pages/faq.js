import React, { Component } from 'react'
import InfopageLayout from '../components/infopage-layout'

export default class InfoPage extends Component {
  static title = 'FAQ'

  render() {
    const md = require('./faq.md')
    return (
      <InfopageLayout currentPageTitle={InfoPage.title}>
        <h1>Frequently Asked Questions</h1>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </InfopageLayout>
    )
  }
}
