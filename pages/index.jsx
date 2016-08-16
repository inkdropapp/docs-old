/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss';
import React, { Component } from 'react';
import ManualMenu from '../components/manual-menu';
import ReferenceMenu from '../components/reference-menu';
// import { Grid, Col, Row } from 'react-bootstrap';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <h1>Inkdrop Documentation</h1>
        <p>
          Welcome to Inkdrop!
          These docs give an overview of how Inkdrop works, and are meant to be a reference for plugin developers.
        </p>

        <div className='ui segment'>
          <div className='ui grid'>
            <div className='three column row'>
              <div className='column'>
                <h3 className='ui header'>
                  <i className='book icon'></i>
                  <div className='content'>
                    Inkdrop Manual
                  </div>
                </h3>
                <ManualMenu />
              </div>
              <div className='column'>
                <h3 className='ui header'>
                  <i className='setting icon'></i>
                  <div className='content'>
                    API Reference
                  </div>
                </h3>
                <ReferenceMenu />
              </div>
              <div className='column'>
                <h3 className='ui header'>
                  <i className='comments icon'></i>
                  <div className='content'>
                    Inkdrop Forum
                  </div>
                </h3>
                <div>
                  The <a href='https://github.com/inkdropapp/forum/'>Inkdrop Forum</a> is the place to discuss anything and everything Inkdrop related with the entire Inkdrop community.
                  If you have problems or are looking for help, this is your place.
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href='https://mixpanel.com/f/partner' rel='nofollow'><img src='//cdn.mxpnl.com/site_media/images/partner/badge_light.png' alt='Mobile Analytics' /></a>
      </div>
    );
  }

}
