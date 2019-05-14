import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Masthead from '../components/masthead'
import ManualMenu from '../components/manual-menu'
import HelpUs from '../components/helpus'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Masthead />
    <div className="ui container main-content">
      <div className="ui stackable grid">
        <div className="five wide column side-bar">
          <ManualMenu sideMenu />
        </div>
        <div className="eleven wide column doc-content">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

          <HelpUs />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
