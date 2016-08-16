/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import MenuLink from './menu-link';

export default class extends Component {
  render() {
    return (
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
          <MenuLink to='/manual/synchronizing-in-the-cloud'>Synchronizing in the cloud</MenuLink>
        </li>
        <li>
          <MenuLink to='/manual/extend-inkdrop-with-plugins'>Extend Inkdrop with plugins</MenuLink>
        </li>
      </ul>
    );
  }

}

