import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ManualMenu from './manual-menu'
import HelpUs from './helpus'
import { Container } from 'semantic-ui-react'
import Layout from './layout'
import Breadcrumb from './breadcrumb'
import Accordion from './accordion'
import Sidebar from './sidebar'
import DocContent from './doc-content'

export default class ManualLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired
  }

  render() {
    return (
      <Layout pageTitle={this.props.currentPageTitle}>
        <Breadcrumb
          middleLevel={{ to: '/manual/', label: 'User Manual' }}
          currentPageTitle={this.props.currentPageTitle}
        />
        <Container className="main-content">
          <div className="ui stackable grid">
            <Sidebar className="five wide column">
              <Accordion className="menu-for-smaller-screen" title="Contents">
                <ManualMenu />
              </Accordion>
              <div className="menu-for-larger-screen">
                <ManualMenu sideMenu />
              </div>
            </Sidebar>
            <DocContent className="eleven wide column">
              {this.props.children}

              <HelpUs />
            </DocContent>
          </div>
        </Container>
      </Layout>
    )
  }
}
