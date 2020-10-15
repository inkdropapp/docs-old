import './release-notes.less'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function ReleaseNotes({
  title,
  version,
  htmlContent,
  pubDate,
  pathPrefix
}) {
  const path = `${pathPrefix}/${version}`
  return (
    <div className="version-history">
      <h1>
        <Link to={path}>
          v{version} {title}
        </Link>
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
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  htmlContent: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  pathPrefix: PropTypes.string.isRequired
}
