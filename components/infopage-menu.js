/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
import SupportMenu from './support-menu'

export default class InfopageMenu extends Component {
  static propTypes = {
    sideMenu: PropTypes.bool
  }

  renderOtherMenu() {
    return [
      <h3 className="ui header" key={1}>
        <i className="help circle outline icon" />
        <div className="content">
          <MenuLink to="/manual/">User Manual</MenuLink>
        </div>
        <i className="angle right icon" />
      </h3>,
      <h3 className="ui header" key={2}>
        <i className="columns icon" />
        <div className="content">
          <MenuLink to="/reference/">API Reference</MenuLink>
        </div>
        <i className="angle right icon" />
      </h3>,
      <SupportMenu key={3} />
    ]
  }

  render() {
    return (
      <div className="menu manual-menu">
        <h3 className="ui header">
          <i className="info circle icon" />
          <div className="content">About</div>
        </h3>
        <ul className="article-list">
          <li>
            <MenuLink to="/faq">FAQ</MenuLink>
          </li>
          <li>
            <MenuLink to="/releases">Release Notes (Desktop)</MenuLink>
          </li>
          <li>
            <MenuLink to="/releases-mobile">Release Notes (Mobile)</MenuLink>
          </li>
          <li>
            <MenuLink to="/student-discount">Student Discount</MenuLink>
          </li>
          <li>
            <MenuLink to="/security">Security</MenuLink>
          </li>
          <li>
            <MenuLink to="/terms">Terms of Service</MenuLink>
          </li>
          <li>
            <MenuLink to="/privacy">Privacy Policy</MenuLink>
          </li>
        </ul>
        {this.props.sideMenu ? this.renderOtherMenu() : null}
      </div>
    )
  }
}
