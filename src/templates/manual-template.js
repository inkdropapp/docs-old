import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import ManualLayout from '../components/manual-layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  const { pageByPath } = data
  const { frontmatter, html, tableOfContents } = pageByPath
  const { next, prev } = pageContext
  return (
    <ManualLayout currentPageTitle={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      {frontmatter.toc && (
        <div
          className="toc"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="sibling-page-links">
        {prev && (
          <Link to={prev.frontmatter.path} className="page-link">
            <i className="angle double left icon" /> Prev:{' '}
            {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.path} className="page-link next-page">
            Next: {next.frontmatter.title}{' '}
            <i className="angle double right icon" />
          </Link>
        )}
      </div>
    </ManualLayout>
  )
}

Template.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export const pageQuery = graphql`
  query($path: String!) {
    pageByPath: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.path")
      frontmatter {
        path
        title
        toc
      }
    }
  }
`
