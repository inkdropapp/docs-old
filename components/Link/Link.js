/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Link.scss'
import Location from '../../core/Location'

function isLeftClickEvent (event) {
  return event.button === 0
}

function isModifiedEvent (event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    state: PropTypes.object,
    onClick: PropTypes.func
  }

  static handleClick = function (event) {
    let allowTransition = true
    let clickResult

    if (this.props && this.props.onClick) {
      clickResult = this.props.onClick(event)
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (clickResult === false || event.defaultPrevented === true) {
      allowTransition = false
    }

    event.preventDefault()

    if (allowTransition) {
      const link = event.currentTarget
      Location.push(
        (this.props && this.props.to) || (link.pathname + link.search),
        (this.props && this.props.state) || null
      )
    }
  }

  render () {
    const { to, children, ...props } = this.props
    return <a href={to} {...props} onClick={Link.handleClick.bind(this)}>{children}</a>
  }
}

export default Link
