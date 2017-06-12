import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ManualMenu from './manual-menu'
import HelpUs from './helpus'
import Link from './Link'

export default class ManualLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired
  };

  render () {
    return (
      <div className='ui container main-content'>
        <div className='ui stackable grid'>
          <div className='five wide column side-bar'>
            <ManualMenu sideMenu />
          </div>
          <div className='eleven wide column doc-content'>
            <div className='ui breadcrumb'>
              <Link to='/' className='section'>
                <i className='home icon' />
                Docs
              </Link>
              <i className='right chevron icon divider'></i>
              <Link to='/manual/' className='section'>User Manual</Link>
              <i className='right chevron icon divider'></i>
              <div className='active section'>{ this.props.currentPageTitle }</div>
            </div>
            <div className='ui divider'></div>

            { this.props.children }

            <HelpUs />
          </div>
        </div>
      </div>
    )
  }
}
