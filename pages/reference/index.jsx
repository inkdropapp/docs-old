import React, { Component } from 'react';
import ReferenceMenu from '../../components/reference-menu';
import Link from '../../components/Link';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui breadcrumb'>
          <Link to='/' className='section'>Docs</Link>
          <i className='right chevron icon divider'></i>
          <div className='active section'>Inkdrop API Reference</div>
        </div>
        <h2 className='ui header'>
          <i className='setting icon'></i>
          <div className='content'>
            Inkdrop API Reference
          </div>
        </h2>
        <div className='ui piled segment'>
          <ReferenceMenu />
        </div>
      </div>
    );
  }

}

