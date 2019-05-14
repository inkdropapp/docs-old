import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './menu-link.less'

export default class MenuLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    state: PropTypes.object,
    onClick: PropTypes.func
  }

  render() {
    const { to, children, ...props } = this.props
    const { pathname } = (global.window && global.window.location) || {}
    const isActive = pathname === to ? 'current-active' : ''
    const className = (props.className || '') + ' ' + isActive
    return (
      <Link to={to} className={`menu-link ${className}`} {...props}>
        {children}
      </Link>
    )
  }
}
