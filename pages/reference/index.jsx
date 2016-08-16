/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ReferenceMenu from '../../components/reference-menu';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <h2 className='ui header'>
          <i className='setting icon'></i>
          <div className='content'>
            Inkdrop API Reference
          </div>
        </h2>
        <ReferenceMenu />
      </div>
    );
  }

}

