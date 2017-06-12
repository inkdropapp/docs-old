import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

export default class Masthead extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <div className='ui inverted vertical masthead segment'>
        <div className='ui text container'>
          <h1>
            <Link to='/'>
              Documentation
            </Link>
          </h1>
          <p>
            Welcome to Inkdrop!
            These docs give an overview of how Inkdrop works, and are meant to be a reference for plugin developers.
          </p>

          <div>
            <h3 className='ui header'>
              <i className='comments outline icon'></i>
              <div className='content'>
                Inkdrop Forum
              </div>
            </h3>
            <p>
              The <a href='https://github.com/inkdropapp/forum/'>Inkdrop Forum</a> is the place to discuss anything and everything Inkdrop related with the entire Inkdrop community.
              If you have problems or are looking for help, this is your place.
            </p>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
