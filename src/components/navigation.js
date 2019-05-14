import { StaticQuery, graphql, Link } from 'gatsby'
import { Container } from 'semantic-ui-react'
import React from 'react'
import Img from 'gatsby-image'
import './navigation.less'

const Navigation = () => (
  <Container className="app--navigation">
    <nav className="ui grid">
      <div className="row">
        <a href="https://inkdrop.app/" className="app--logo">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(
                  relativePath: { eq: "navbar-logo.png" }
                ) {
                  childImageSharp {
                    fixed(width: 142, height: 45) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            )}
          />
          <span className="beta-label">BETA</span>
        </a>

        <ul className="app--navbar reset-list un-select">
          <li>
            <a href="https://inkdrop.app/features">Features</a>
          </li>
          <li>
            <Link to="/">Docs</Link>
          </li>
          <li>
            <a href="https://my.inkdrop.app/plugins">Plugins</a>
          </li>
          <li className="ui simple dropdown item">
            More
            <i className="dropdown icon" />
            <div className="menu">
              <a className="item" href="https://my.inkdrop.app/demo">
                Demo
              </a>
              <a className="item" href="https://inkdrop.app/pricing">
                Pricing
              </a>
              <Link className="item" to="/faq">
                FAQ
              </Link>
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
