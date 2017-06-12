import React, { Component } from 'react'
import Link from '../components/Link'
import InfopageLayout from '../components/infopage-layout'

export default class InfoPage extends Component {
  static title = 'Terms of Use'

  render () {
    const md = require('./terms.md')
    return (
      <InfopageLayout currentPageTitle={ InfoPage.title }>
        <h1>Terms of Service</h1>
        <div dangerouslySetInnerHTML={ { __html: md } } />
        <section>
          <h2>Notation based on the Specified Commercial Transaction Act</h2>
          <p>
            <div>特定商取引法に基づく表記</div>
            <br />
            <Link to='/notation'>See here</Link>.
          </p>
        </section>
      </InfopageLayout>
    )
  }
}
