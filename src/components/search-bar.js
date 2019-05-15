import React, { Component } from 'react'
import './search-bar.less'

export default class SearchBar extends Component {
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
    const domain = location.hostname
    const keyword = `site:${domain} ${this.input.value}`
    window.location.href = `https://www.google.com/search?hl=en&q=${encodeURIComponent(
      keyword
    )}`
    e.preventDefault()
    return false
  }
}
