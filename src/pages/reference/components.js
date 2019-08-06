import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReferenceLayout from '../../components/reference-layout'

export default function StatesIndex() {
  return (
    <ReferenceLayout currentPageTitle="Components">
      <h1>Available Built-in React Components</h1>
      <StaticQuery
        query={menuQuery}
        render={data => (
          <ul>
            {data.components.edges.map(edge => {
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
