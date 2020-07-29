import './index.less'
import React from 'react'
import { Container } from 'semantic-ui-react'
import UserManualIcon from '../images/user-manual.svg'
import APIReferenceIcon from '../images/api-reference.svg'
import InfoIcon from '../images/information.svg'

import SearchBar from '../components/search-bar'
import Layout from '../components/layout'
import ManualMenu from '../components/manual-menu'
import ReferenceMenu from '../components/reference-menu'
import InfoMenu from '../components/info-menu'
import Masthead from '../components/masthead'

const IndexPage = () => (
  <Layout pageTitle="Table of Contents">
    <Masthead />
    <SearchBar />
    <Container className="main-content">
      <div className="top-menu">
        <h2 className="ui header">
          <div className="content">
            <UserManualIcon className="section-svg-icon" />
            User Manual
          </div>
        </h2>
        <div className="ui segment">
          <ManualMenu />
        </div>
        <h2 className="ui header">
          <div className="content">
            <APIReferenceIcon className="section-svg-icon" />
            API Reference
          </div>
        </h2>
        <div className="ui segment">
          <ReferenceMenu />
        </div>

        <h2 className="ui header">
          <div className="content">
            <InfoIcon className="section-svg-icon" />
            Further Informations
          </div>
        </h2>
        <div className="ui segment">
          <InfoMenu />
        </div>
      </div>

      <div style={{ paddingTop: '2em' }}>
        <a href="https://mixpanel.com/f/partner" rel="nofollow">
          <img
            src="//cdn.mxpnl.com/site_media/images/partner/badge_light.png"
            alt="Mobile Analytics"
          />
        </a>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
