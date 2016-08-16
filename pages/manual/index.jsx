/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ManualMenu from '../../components/manual-menu';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <h2 className='ui header'>
          <i className='book icon'></i>
          <div className='content'>
            Inkdrop Manual
          </div>
        </h2>
        <ManualMenu />
      </div>
    );
  }

}

