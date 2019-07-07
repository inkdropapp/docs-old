import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReferenceLayout from '../../components/reference-layout'

export default function ActionIndex() {
  return (
    <ReferenceLayout currentPageTitle="App Actions">
      <h1>App Actions</h1>
      <StaticQuery
        query={menuQuery}
        render={data => (
          <ul>
            {data.actions.edges.map(edge => {
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
  }
`
