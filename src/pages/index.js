import './index.less'
import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'

import Layout from '../components/layout'
import ManualMenu from '../components/manual-menu'
import Masthead from '../components/masthead'

const IndexPage = () => (
  <Layout pageTitle="Table of Contents">
    <Masthead />
    <Container className="main-content">
      <div className="top-menu">
        <div className="ui stackable grid">
          <div className="two column row">
            <div className="column">
              <h2 className="ui header">
                <div className="content">User Manual</div>
              </h2>
              <div className="ui segment">
                <ManualMenu />
              </div>
            </div>

            <div className="column">
              <h2 className="ui header">
                <div className="content">API Reference</div>
              </h2>
              <div className="ui segment">
                Blah, blah, blah
                {/* <ReferenceMenu /> */}
              </div>

              <h2 className="ui header">
                <div className="content">Further Informations</div>
              </h2>
              <div className="ui segment">
                <div className="menu">
                  <ul className="article-list">
                    <li>
                      <Link to="/releases" className="menu-link">
                        Release Notes (Desktop)
                      </Link>
                    </li>
                    <li>
                      <Link to="/releases-mobile" className="menu-link">
                        Release Notes (Mobile)
                      </Link>
                    </li>
                    <li>
                      <Link to="/announce/" className="menu-link">
                        Announcements
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
