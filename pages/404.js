import React, { Component } from 'react'
import ManualLayout from '../components/manual-layout'

export default class NotFound extends Component {
  render() {
    return (
      <ManualLayout currentPageTitle="?">
        <h1>Not Found</h1>
        <p>
          The page you&apos;re looking for was not found. Please check the URL
          or click a link from the menu.
        </p>
      </ManualLayout>
    )
  }
}
