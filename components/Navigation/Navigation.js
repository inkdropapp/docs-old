/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <div className='ui grid'>
      <div className='row'>
        <a href='https://inkdrop.info/' className='app--logo'>
          <img
            src='//inkdrop-prod.s3.amazonaws.com/site/header-logo@2x.png'
            width='196'
            height='45'
            alt='logo'
          />
        </a>

        <ul className='app--navbar reset-list un-select'>
          <li>
            <Link to='/'>Docs</Link>
          </li>
          <li>
            <a href='https://inkdrop.info/login'>Login</a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Navigation;
