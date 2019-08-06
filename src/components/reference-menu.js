import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
import { StaticQuery, graphql } from 'gatsby'
import Menu from './menu'

export default class RefereneMenu extends Component {
  static propTypes = {
    sideMenu: PropTypes.bool
  }

  renderMenuItem = edge => {
    const { path, title } = edge.node.frontmatter
    return (
      <li key={path}>
        <MenuLink to={path}>{title}</MenuLink>
      </li>
    )
  }

  render() {
    return (
      <StaticQuery
        query={menuQuery}
        render={data => (
          <Menu className="manual-menu">
            <h3 className="ui header">
              <i className="cube icon" />
              <div className="content">Data</div>
            </h3>
            <ul className="article-list">
              {data.data.edges.map(this.renderMenuItem)}
            </ul>
            <h3 className="ui header">
              <i className="dot circle outline icon" />
              <div className="content">Essential Classes</div>
            </h3>
            <ul className="article-list">
              {data.classes.edges.map(this.renderMenuItem)}
            </ul>
            <h3 className="ui header">
              <i className="dot recycle icon" />
              <div className="content">States</div>
            </h3>
            <ul className="article-list">
              {data.states.edges.map(this.renderMenuItem)}
            </ul>
            <h3 className="ui header">
              <i className="bolt icon" />
              <div className="content">Actions</div>
            </h3>
            <ul className="article-list">
              {data.actions.edges.map(this.renderMenuItem)}
            </ul>
            <h3 className="ui header">
              <i className="database icon" />
              <div className="content">Data Access</div>
            </h3>
            <ul className="article-list">
              {data.db.edges.map(this.renderMenuItem)}
            </ul>
            <h3 className="ui header">
              <i className="database icon" />
              <div className="content">Components</div>
            </h3>
            <ul className="article-list">
              {data.components.edges.map(this.renderMenuItem)}
            </ul>
          </Menu>
        )}
      />
    )
  }
}

const menuQuery = graphql`
  query {
    data: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "data" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    classes: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "classes" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    states: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "flux-state" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    actions: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "flux-action" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    db: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "data-access" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    components: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "component" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
