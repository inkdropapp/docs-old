import { StaticQuery, graphql, Link } from 'gatsby'
import { Container } from 'semantic-ui-react'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import './navigation.less'

const Navigation = () => (
  <Container className="app--navigation">
    <nav className="ui grid">
      <div className="row">
        <Link to="/" className="app--logo">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(
                  relativePath: { eq: "navbar-logo.png" }
                ) {
                  childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 142, height: 45)
                  }
                }
              }
            `}
            render={data => (
              <GatsbyImage
                image={data.placeholderImage.childImageSharp.gatsbyImageData}
              />
            )}
          />
        </Link>

        <ul className="app--navbar reset-list un-select">
          <li>
            <a href="https://inkdrop.app/">Home</a>
          </li>
          <li>
            <a href="https://my.inkdrop.app/plugins">Plugins</a>
          </li>
          <li className="ui simple dropdown item">
            More
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item" href="https://inkdrop.app/pricing">
                Pricing
              </a>
              <Link className="item" to="/faq">
                FAQ
              </Link>
              <div className="divider" />
              <a className="item" href="https://forum.inkdrop.app/">
                User Forum
              </a>
              <a className="item" href="https://discord.gg/QfsG5Kj">
                Discord Community
              </a>
              <div className="divider" />
              <a className="item" href="https://twitter.com/inkdrop_app">
                Twitter
              </a>
              <a className="item" href="https://medium.com/@inkdrop">
                Blog
              </a>
            </div>
          </li>
          <li>
            <a href="https://my.inkdrop.app/" className="login">
              <i className="sign in icon" />
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Container>
)

export default Navigation
