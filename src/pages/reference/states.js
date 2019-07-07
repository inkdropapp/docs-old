import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReferenceLayout from '../../components/reference-layout'

export default function StatesIndex() {
  return (
    <ReferenceLayout currentPageTitle="App States">
      <h1>App States</h1>
      <StaticQuery
        query={menuQuery}
        render={data => (
          <ul>
            {data.states.edges.map(edge => {
              const { path, title } = edge.node.frontmatter
              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              )
            })}
          </ul>
        )}
      />
    </ReferenceLayout>
  )
}

const menuQuery = graphql`
  query {
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
  }
`
