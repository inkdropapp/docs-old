/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import MenuLink from './menu-link';
import './manual-menu.scss';

export default class extends Component {
  render() {
    return (
      <div className='manual-menu'>
        <h3 className='ui header'>
          <i className='write icon' />
          <div className='content'>
            Using Inkdrop
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/manual/quick-start-guide'>Quick start guide</MenuLink>
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
          <i className='info icon' />
          <div className='content'>
            Appendix
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <MenuLink to='/manual/markdown-cheatsheet'>Markdown Cheatsheet</MenuLink>
          </li>
        </ul>
      </div>
    );
  }

}

