import React, { PropTypes } from 'react';
import Link from './Link';
import './menu-link.scss';

export default class extends Link {

  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    state: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const { to, children, ...props } = this.props;
    const { pathname } = (global.window && global.window.location) || {};
    const isActive = pathname === to ? 'current-active' : '';
    const className = (props.className || '') + ' ' + isActive;
    return (
      <a href={to} className={className} {...props} onClick={Link.handleClick.bind(this)}>
        {children}
      </a>
    );
  }

}
