import React, { Component } from 'react'
import ReferenceLayout from '../../components/reference-layout'

export default class ManualPage extends Component {
  static title = 'CommandRegistry';

  render () {
    const md = require('./command-registry.md')
    return (
      <ReferenceLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ReferenceLayout>
    )
  }
}
