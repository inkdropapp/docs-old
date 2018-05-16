import React, { Component } from 'react'
import InfopageLayout from '../components/infopage-layout'

export default class InfoPage extends Component {
  static title = 'Student Discount'

  render() {
    const md = require('./student-discount.md')
    return (
      <InfopageLayout currentPageTitle={InfoPage.title}>
        <h1>Student Discount</h1>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </InfopageLayout>
    )
  }
}
