import './doc-content.less'
import * as React from 'react'
import PropTypes from 'prop-types'

export default class DocContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { children, className } = this.props
    return <div className={`doc-content ${className}`}>{children}</div>
  }
}
