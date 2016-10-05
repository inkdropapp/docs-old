import React, { PropTypes, Component } from 'react';
import Link from './Link';

export default class extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='ui container main-content'>
        <div className='twelve wide column doc-content'>
          <div className='ui breadcrumb'>
            <Link to='/' className='section'>Docs</Link>
            <i className='right chevron icon divider'></i>
            <Link to='/announce/' className='section'>Announcements</Link>
            <i className='right chevron icon divider'></i>
            <div className='active section'>{ this.props.currentPageTitle }</div>
          </div>
          <div className='ui divider'></div>

          { this.props.children }

        </div>
      </div>
    );
  }

}
