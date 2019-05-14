import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuLink from './menu-link'
import { StaticQuery, graphql } from 'gatsby'
import Menu from './menu'

export default class InfoMenu extends Component {
  static propTypes = {
    sideMenu: PropTypes.bool
  }

  render() {
    return (
      <StaticQuery
        query={menuQuery}
        render={data => (
          <Menu className="manual-menu">
            <h3 className="ui header">
              <i className="info icon" />
              <div className="content">About</div>
            </h3>
            <ul className="article-list">
              {data.allMarkdownRemark.edges.map(edge => {
                const { path, title } = edge.node.frontmatter
                return (
                  <li key={path}>
                    <MenuLink to={path}>{title}</MenuLink>
                  </li>
                )
              })}
            </ul>
          </Menu>
        )}
      />
    )
  }
}

const menuQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___index] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "info" } } }
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
