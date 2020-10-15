import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import InfoLayout from '../components/info-layout'
import ReleaseNotes from '../components/release-notes'

export default function ReleaseNotesMobileIndex() {
  const title = `Inkdrop Release Notes of the Mobile App`
  return (
    <InfoLayout currentPageTitle={title}>
      <StaticQuery
        query={pageQuery}
        render={data =>
          data.allVersionHistoryMobile.edges.map(edge => {
            const { version, html, pub_date } = edge.node
            return (
              <ReleaseNotes
                key={version}
                version={version}
                htmlContent={html}
                pubDate={pub_date}
                title="Release Notes (Mobile)"
                pathPrefix="/releases-mobile"
              />
            )
          })
        }
      />
    </InfoLayout>
  )
}

export const pageQuery = graphql`
  query {
    allVersionHistoryMobile(limit: 10) {
      edges {
        node {
          html
          version
          pub_date
        }
      }
    }
  }
`
