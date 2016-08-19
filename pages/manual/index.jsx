import React, { Component } from 'react';
import ManualMenu from '../../components/manual-menu';
import Link from '../../components/Link';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui breadcrumb'>
          <Link to='/' className='section'>Docs</Link>
          <i className='right chevron icon divider'></i>
          <div className='active section'>Inkdrop Manual</div>
        </div>
        <h2 className='ui header'>
          <i className='book icon'></i>
          <div className='content'>
            Inkdrop Manual
          </div>
        </h2>
        <div className='ui piled segment'>
          <ManualMenu />
        </div>
      </div>
    );
  }

}

