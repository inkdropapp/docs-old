import React, { Component } from 'react';
import Link from '../components/Link';
import Menu from '../components/top-menu';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui breadcrumb'>
          <Link to='/' className='section'>Docs</Link>
          <i className='right chevron icon divider'></i>
          <div className='active section'>?</div>
        </div>
        <div className='ui divider'></div>

        <div className='ui error message'>
          <h1>Not Found</h1>
          <p>The page you're looking for was not found. Please check the URL or click a link from below menu.</p>
        </div>

        <Menu />
      </div>
    );
  }

}
