import React, { Component } from 'react'
import './search-bar.scss'

export default class Masthead extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="ui text container search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              name="search"
              type="text"
              placeholder="Search..."
              ref={el => (this.input = el)}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    )
  }

  handleSubmit = e => {
    const keyword = `site:docs.inkdrop.app ${this.input.value}`
    window.location.href = `https://www.google.com/search?hl=en&q=${encodeURIComponent(
      keyword
    )}`
    e.preventDefault()
    return false
  }
}
