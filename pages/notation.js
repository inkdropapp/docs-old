import React, { Component } from 'react'
import Link from '../components/Link'

export default class InfoPage extends Component {
  static title = 'Notation based on the Specified Commercial Transaction Act'

  render() {
    const md = require('./notation.md')
    return (
      <div className="ui container main-content">
        <div className="doc-content">
          <div className="ui breadcrumb">
            <Link to="/" className="section">
              Docs
            </Link>
            <i className="right chevron icon divider" />
            <div className="active section">
              Notation based on the Specified Commercial Transaction Act
            </div>
          </div>

          <h1>Notation based on the Specified Commercial Transaction Act</h1>
          <div dangerouslySetInnerHTML={{ __html: md }} />
        </div>
      </div>
    )
  }
}
