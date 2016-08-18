/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes, Component } from 'react';
import ReferenceMenu from './reference-menu';
import Link from './Link';

export default class extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui stackable grid'>
          <div className='four wide column'>
            <ReferenceMenu />
          </div>
          <div className='twelve wide column doc-content'>
            <div className='ui breadcrumb'>
              <Link to='/' className='section'>Docs</Link>
              <i className='right chevron icon divider'></i>
              <Link to='/reference/' className='section'>API Reference</Link>
              <i className='right chevron icon divider'></i>
              <div className='active section'>{ this.props.currentPageTitle }</div>
            </div>

            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}


