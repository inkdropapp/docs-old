import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import InfoLayout from '../components/info-layout'
import ReleaseNotes from '../components/release-notes'

export default function ReleaseNotesIndex() {
  const title = `Inkdrop Release Notes of Desktop App`
  return (
    <InfoLayout currentPageTitle={title}>
      <StaticQuery
        query={pageQuery}
        render={data =>
          data.allVersionHistory.edges.map(edge => {
            const { version, html, pub_date } = edge.node
            return (
              <ReleaseNotes
                key={version}
                version={version}
                htmlContent={html}
                pubDate={pub_date}
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
    allVersionHistory(limit: 10) {
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
