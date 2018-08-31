import React, { Component } from 'react'
import ManualLayout from '../../components/manual-layout'

export default class ManualPage extends Component {
  static title = 'Restore old revisions'

  render() {
    const md = require('./revision-history.md')
    return (
      <ManualLayout currentPageTitle={ManualPage.title}>
        <h1>{ManualPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md }} />
      </ManualLayout>
    )
  }
}
