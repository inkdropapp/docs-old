import './menu.less'
import * as React from 'react'
import PropTypes from 'prop-types'

export default class Menu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className } = this.props
    return <div className={`menu ${className}`}>{children}</div>
  }
}
