import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
import SupportMenu from './support-menu'

export default class ManualMenu extends Component {
  static propTypes = {
    sideMenu: PropTypes.bool
  }

  renderRefereneMenu () {
    return [
      <h3 className='ui header' key={1}>
        <i className='columns icon' />
        <div className='content'>
          <MenuLink to='/reference/'>
            API Reference
          </MenuLink>
        </div>
        <i className='angle right icon' />
      </h3>,
      <SupportMenu key={2} />
    ]
  }

  render () {
    return (
      <div className='menu manual-menu'>
        <h3 className='ui header'>
          <i className='write icon' />
          <div className='content'>
            Using Inkdrop
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/manual/'>Quick start guide</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/basic-usage'>Basic usage</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/writing-note'>Writing note</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/searching-notes'>Searching notes</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/managing-tasks-with-status'>Managing tasks with status</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/synchronizing-in-the-cloud'>Synchronizing in the cloud</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/extend-inkdrop-with-plugins'>Extend Inkdrop with plugins</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/recovering-your-password'>Recovering your password</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/working-behind-a-corporate-web-proxy'>Working behind web proxy</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/backing-up-your-data'>Backing up your data</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/sharing-your-notes-on-the-web'>Sharing your notes on the web</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/how-to-import-notes-from-evernote'>How to import notes from Evernote</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/troubleshooting'>Troubleshooting</MenuLink>
          </li>
        </ul>
        <h3 className='ui header'>
          <i className='configure icon' />
          <div className='content'>
            Hacking Inkdrop
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/manual/accessing-data-in-the-cloud'>Accessing Data in the Cloud</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/creating-a-theme'>Creating a Theme</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/plugin-word-count'>Plugin: Word Count</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/flux-architecture'>Flux Architecture</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/accessing-the-local-database'>Accessing the Local Database</MenuLink>
          </li>
          <li>
            <MenuLink to='/manual/customizing-the-editor'>Customizing the Editor</MenuLink>
          </li>
        </ul>
        <h3 className='ui header'>
          <i className='sticky note outline icon' />
          <div className='content'>
            Appendix
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/manual/markdown-cheatsheet'>Markdown Cheatsheet</MenuLink>
          </li>
        </ul>
        { this.props.sideMenu ? this.renderRefereneMenu() : null }
      </div>
    )
  }
}
