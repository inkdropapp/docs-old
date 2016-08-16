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
      <div>
        <h3 className='ui header'>Data Models</h3>
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
      </div>
    );
  }

}

