import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ManualLayout from '../components/manual-layout'

export default class ErrorPage extends Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error)
  }

  renderError() {
    return <div className="ui error message">{this.props.error}</div>
  }

  render() {
    return (
      <ManualLayout currentPageTitle="Error">
        <h1>Sorry, unexpected error has been occurred.</h1>
        <div>Check the URL and try again.</div>
        {this.props.error ? this.renderError() : null}
      </ManualLayout>
    )
  }
}
