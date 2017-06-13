import React from 'react'
import './Navigation.scss'
import Link from '../Link'

function Navigation () {
  return (
    <nav className='ui grid'>
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
            <a href='https://www.inkdrop.info/features'>
              Features
            </a>
          </li>
          <li>
            <Link to='/'>
              Docs
            </Link>
          </li>
          <li>
            <a href='https://www.inkdrop.info/plugins'>
              Plugins
            </a>
          </li>
          <li className='ui simple dropdown item'>
            More
            <i className='dropdown icon' />
            <div className='menu'>
              <a className='item' href='https://www.inkdrop.info/demo'>Demo</a>
              <a className='item' href='https://www.inkdrop.info/pricing'>Pricing</a>
              <Link className='item' to='/faq'>FAQ</Link>
              <div className='divider' />
              <a className='item' href='https://twitter.com/inkdrop_app'>Twitter</a>
              <a className='item' href='https://medium.com/@inkdrop'>Blog</a>
            </div>
          </li>
          <li>
            <a href='https://www.inkdrop.info/login' className='login'>
              <i className='sign in icon' />
              Log in
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navigation
