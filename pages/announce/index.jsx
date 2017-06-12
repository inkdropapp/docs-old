import React, { Component } from 'react';
import MenuLink from '../../components/menu-link';
import AnnounceLayout from '../../components/announce-layout';

export default class AnnouncementPage extends Component {
  static title = 'Announcement';

  render() {
    return (
      <AnnounceLayout currentPageTitle={ AnnouncementPage.title }>
        <h1 className='ui header'>
          <div className='content'>
            Announcements
          </div>
        </h1>
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
      </AnnounceLayout>
    );
  }

}
