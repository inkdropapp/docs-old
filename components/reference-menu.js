import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
import SupportMenu from './support-menu'

export default class RefereneMenu extends Component {
  static propTypes = {
    sideMenu: PropTypes.bool
  }

  renderManualMenu () {
    return [
      <h3 className='ui header' key={1}>
        <i className='help circle outline icon' />
        <div className='content'>
          <MenuLink to='/manual/'>
            User Manual
          </MenuLink>
        </div>
        <i className='angle right icon' />
      </h3>,
      <SupportMenu key={2} />
    ]
  }

  render () {
    return (
      <div className='menu reference-menu'>
        <h3 className='ui header'>
          <i className='cube icon' />
          <div className='content'>
            Data Models
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/reference/note'>Note</MenuLink>
          </li>
          <li>
            <MenuLink to='/reference/book'>Book</MenuLink>
          </li>
          <li>
            <MenuLink to='/reference/tag'>Tag</MenuLink>
          </li>
        </ul>

        <h3 className='ui header'>
          <i className='database icon' />
          <div className='content'>
            Flux Stores
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/reference/editor-store'>Editor Store</MenuLink>
          </li>
        </ul>

        <h3 className='ui header'>
          <i className='hand pointer icon' />
          <div className='content'>
            Flux Actions
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/reference/editor-actions'>Editor Actions</MenuLink>
          </li>
        </ul>

        <h3 className='ui header'>
          <i className='square outline icon' />
          <div className='content'>
            Essential Classes
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/reference/environment'>Environment</MenuLink>
          </li>
          <li>
            <MenuLink to='/reference/command-registry'>CommandRegistry</MenuLink>
          </li>
        </ul>
        { this.props.sideMenu ? this.renderManualMenu() : null }
      </div>
    )
  }
}
