import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import InfoLayout from '../components/info-layout'
import ReleaseNotes from '../components/release-notes'

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { versionHistoryMobile } = data
  const { version, html, pub_date } = versionHistoryMobile
  const title = `v${version} Release Notes (Mobile)`
  return (
    <InfoLayout currentPageTitle={title}>
      <ReleaseNotes
        version={version}
        htmlContent={html}
        pubDate={pub_date}
        title="Release Notes (Mobile)"
        pathPrefix="/releases-mobile"
      />
    </InfoLayout>
  )
}

Template.propTypes = {
  data: PropTypes.object
}

export const pageQuery = graphql`
  query($version: String) {
    versionHistoryMobile(version: { eq: $version }) {
      version
      pub_date
      html
    }
  }
`
