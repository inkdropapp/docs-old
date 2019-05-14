import * as React from 'react'
import PropTypes from 'prop-types'
import './sidebar.less'

const Sidebar = props => {
  const { className, children } = props
  return <div className={`sidebar ${className}`}>{children}</div>
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Sidebar
