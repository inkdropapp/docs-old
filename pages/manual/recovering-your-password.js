import React, { Component } from 'react'
import ManualLayout from '../../components/manual-layout'

export default class ManualPage extends Component {
  static title = 'Recovering Your Password';

  render () {
    const md = require('./recovering-your-password.md')
    return (
      <ManualLayout currentPageTitle={ ManualPage.title }>
        <h1>{ ManualPage.title }</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </ManualLayout>
    )
  }
}
