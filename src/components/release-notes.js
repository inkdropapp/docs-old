import './release-notes.less'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function ReleaseNotes({ version, htmlContent, pubDate }) {
  const title = `v${version} Release Notes `
  const path = `/releases/${version}`
  return (
    <div className="version-history">
      <h1>
        <Link to={path}>{title}</Link>
      </h1>
      <div className="pub-date">Publish date: {pubDate.split('T')[0]}</div>
      <div
        className="release-notes"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  )
}

ReleaseNotes.propTypes = {
  version: PropTypes.string.isRequired,
  htmlContent: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired
}
