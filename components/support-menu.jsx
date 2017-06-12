/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='support-menu'>
        <h3 className='ui header' style={{ marginTop: 'calc(2rem -  0.14285714em )' }}>
          <i className='life ring icon' />
          <div className='content'>
            Support
          </div>
        </h3>
        <ul className='article-list'>
          <li>
            <a href='mailto:contact@inkdrop.info' className='menu-link'>Contact us via Email</a>
          </li>
          <li>
            <a href='https://github.com/inkdropapp/forum/' className='menu-link'>Post your idea to our forum</a>
          </li>
        </ul>
      </div>
    );
  }
}
