/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from './Link';
import ManualMenu from './manual-menu';
import ReferenceMenu from './reference-menu';

export default class extends Component {

  render() {
    return (
      <div>
        <div className='ui stackable grid'>
          <div className='two column row'>

            <div className='column'>
              <div className='ui segment'>
                <h3 className='ui header'>
                  <div className='content'>
                    User Manual
                  </div>
                </h3>
                <ManualMenu />
              </div>
            </div>

            <div className='column'>
              <div className='ui segment'>
                <h3 className='ui header'>
                  <div className='content'>
                    API Reference
                  </div>
                </h3>
                <ReferenceMenu />
              </div>
            </div>

          </div>
        </div>

        <div className='ui segment'>
          <h3 className='ui header'>
            <i className='info icon'></i>
            <div className='content'>
              Further Informations
            </div>
          </h3>
          <ul>
            <li>
              <Link to='/announce/'>
                Announcements
              </Link>
            </li>
          </ul>
        </div>

      </div>
    );
  }

}

