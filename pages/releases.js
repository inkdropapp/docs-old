import React, { Component } from 'react'
import InfopageLayout from '../components/infopage-layout'

export default class ReleaseNotesPage extends Component {
  static title = 'Release notes'

  render() {
    const md = require('./releases.md')
    return (
      <InfopageLayout currentPageTitle={ReleaseNotesPage.title}>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </InfopageLayout>
    )
  }
}
