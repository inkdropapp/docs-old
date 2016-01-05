/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Link from '../Link';
import { Grid, Col, Row } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <Grid className="Layout">
      <Row>
        <Col sm={3} className="header-left-side">
          <a href="/" onClick={Link.handleClick}>
            <img src="./dog-icon.png" width="120px" />
          </a>
          <h1 className="title">ODORUINU.NET</h1>
          <Navigation />
        </Col>
        <Col sm={9}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
