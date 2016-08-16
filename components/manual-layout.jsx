/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes, Component } from 'react';
import ManualMenu from './manual-menu';
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
            <ManualMenu />
          </div>
          <div className='twelve wide column doc-content'>
            <div className='ui breadcrumb'>
              <Link to='/' className='section'>Top</Link>
              <i className='right chevron icon divider'></i>
              <Link to='/manual/' className='section'>Inkdrop Manual</Link>
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


