/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import './Navigation.scss'
import Link from '../Link'

function Navigation () {
  return (
    <div className='ui grid'>
      <div className='row'>
        <a href='https://www.inkdrop.info/' className='app--logo'>
          <img
            src='/navbar-logo.png'
            srcSet='/navbar-logo.png 1x, /navbar-logo@2x.png 2x'
            width='186'
            height='45'
            alt='logo'
          />
        </a>

        <ul className='app--navbar reset-list un-select'>
          <li>
            <Link to='/'>Docs</Link>
          </li>
          <li>
            <a href='https://www.inkdrop.info/login' className='login'>
              <i className='sign in icon' />
              Log in
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navigation
