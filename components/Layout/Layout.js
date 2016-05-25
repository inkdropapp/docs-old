/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../Footer';
// import Link from '../Link';

function Layout({ children }) {
  return (
    <div>
      <header className="app--header">
        <div className="ui container">
          <Navigation />
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
