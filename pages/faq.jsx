import React, { Component } from 'react';
import Link from '../components/Link';

export default class extends Component {
  static title = 'FAQ';

  render() {
    const md = require('./faq.md');
    return (
      <div className='ui container main-content'>
        <div className='ui breadcrumb'>
          <Link to='/' className='section'>Docs</Link>
          <i className='right chevron icon divider'></i>
          <div className='active section'>FAQ</div>
        </div>
        <div className='ui divider'></div>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </div>
    );
  }

}
