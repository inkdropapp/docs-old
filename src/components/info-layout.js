import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import Breadcrumb from './breadcrumb'
import Layout from './layout'
import InfoMenu from './info-menu'
import Sidebar from './sidebar'
import DocContent from './doc-content'

export default class InfopageLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired
  }

  render() {
    return (
      <Layout pageTitle={this.props.currentPageTitle}>
        <Breadcrumb
          middleLevel={{ to: '/', label: 'About' }}
          currentPageTitle={this.props.currentPageTitle}
        />
        <Container className="main-content">
          <div className="ui stackable grid">
            <Sidebar className="five wide column">
              <div className="menu-for-larger-screen">
                <InfoMenu sideMenu />
              </div>
            </Sidebar>
            <DocContent className="eleven wide column">
              {this.props.children}
            </DocContent>
          </div>
        </Container>
      </Layout>
    )
  }
}
