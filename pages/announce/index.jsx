import React, { Component } from 'react';
import Link from '../../components/Link';
import MenuLink from '../../components/menu-link';

export default class extends Component {

  render() {
    return (
      <div className='ui container main-content'>
        <div className='ui breadcrumb'>
          <Link to='/' className='section'>Docs</Link>
          <i className='right chevron icon divider'></i>
          <div className='active section'>Announcements</div>
        </div>
        <div className='ui divider'></div>
        <h2 className='ui header'>
          <i className='announcement icon'></i>
          <div className='content'>
            Announcements
          </div>
        </h2>
        <div className='ui piled segment'>
          <div>
            <ul className='article-list'>
              <li>
                <MenuLink to='/announce/usd-currency-is-now-supported'>
                  USD currency is now supported
                </MenuLink>
              </li>
              <li>
                <MenuLink to='/announce/data-at-rest-encryption-is-now-supported'>
                  Data at rest encryption is now supported
                </MenuLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
