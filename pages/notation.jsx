import React, { Component } from 'react';

export default class extends Component {
  static title = 'Notation based on the Specified Commercial Transaction Act';

  render() {
    const md = require('./notation.md');
    return (
      <div className='ui container main-content'>
        <h1>Notation based on the Specified Commercial Transaction Act</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
      </div>
    );
  }

}
