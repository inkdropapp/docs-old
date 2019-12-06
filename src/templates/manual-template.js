import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ManualLayout from '../components/manual-layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pathContext
}) {
  console.log('data:', data)
  console.log('pathContext:', pathContext)
  const { pageByPath } = data
  const { frontmatter, html, tableOfContents } = pageByPath
  const { next, prev } = pathContext
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
          <a href={prev.frontmatter.path} className="page-link">
            <i className="angle double left icon" /> Prev:{' '}
            {prev.frontmatter.title}
          </a>
        )}
        {next && (
          <a href={next.frontmatter.path} className="page-link next-page">
            Next: {next.frontmatter.title}{' '}
            <i className="angle double right icon" />
          </a>
        )}
      </div>
    </ManualLayout>
  )
}

Template.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
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
