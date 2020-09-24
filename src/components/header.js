import PropTypes from 'prop-types'
import React from 'react'
import './header.less'
import Navigation from './navigation'

const Header = (
  {
    /* siteTitle */
  }
) => (
  <header className="app--header">
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
