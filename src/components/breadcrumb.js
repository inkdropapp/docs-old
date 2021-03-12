import './breadcrumb.less'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class Breadcrumb extends Component {
  static propTypes = {
    currentPageTitle: PropTypes.string.isRequired,
    middleLevel: PropTypes.object
  }

  render() {
    const { currentPageTitle, middleLevel } = this.props
    return (
      <div className="app--breadcrumb">
        <div className="ui container">
          <div className="ui breadcrumb">
            <Link to="/" className="section">
              <i className="home icon" />
              Docs
            </Link>
            <i className="right chevron icon divider" />
            <Link to={middleLevel.to} className="section">
              {middleLevel.label}
            </Link>
            <i className="right chevron icon divider" />
            <div className="active section">{currentPageTitle}</div>
            {typeof location === 'object' &&
              !location.hostname.match(/beta/) && (
                <span className="ui label circular basic yellow badge-beta">
                  Beta
                </span>
              )}
          </div>
        </div>
      </div>
    )
  }
}
