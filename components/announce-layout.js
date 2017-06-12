import React, { Component } from 'react'
import InfopageMenu from './infopage-menu'
import Link from './Link'
import PropTypes from 'prop-types'

export default class AnnounceLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired
  };

  render () {
    return (
      <div className='ui container main-content'>
        <div className='ui stackable grid'>
          <div className='five wide column side-bar'>
            <InfopageMenu sideMenu />
          </div>
          <div className='eleven wide column doc-content'>
            <div className='ui breadcrumb'>
              <Link to='/' className='section'>Docs</Link>
              <i className='right chevron icon divider'></i>
              <Link to='/announce/' className='section'>Announcements</Link>
              <i className='right chevron icon divider'></i>
              <div className='active section'>{ this.props.currentPageTitle }</div>
            </div>
            <div className='ui divider'></div>

            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}
