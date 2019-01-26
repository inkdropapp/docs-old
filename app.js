/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import ReactDOM from 'react-dom'
import canUseDOM from 'can-use-dom'
import Location from './core/Location'
import Layout from './components/Layout'
import { AppContainer } from 'react-hot-loader'

const routes = {} // Auto-generated on build. See tools/lib/routes-loader.js

const route = async (path, callback) => {
  const handler = routes[path] || routes['/404']
  let component = await handler()
  if (component.default) {
    component = component.default
  }
  const rootNode =
    process.env.NODE_ENV === 'production' ? (
      <Layout>{React.createElement(component)}</Layout>
    ) : (
      <AppContainer>
        <Layout>{React.createElement(component)}</Layout>
      </AppContainer>
    )
  if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept()
  }
  await callback(rootNode, component)
}

function render(location, action) {
  const container = document.getElementById('app')
  route(location.pathname, async component => {
    ReactDOM.render(component, container, () => {
      // Track the page view event via Google Analytics
      window.ga('send', 'pageview', location.pathname)
    })
    if (action === 'PUSH') {
      window.scrollTo(0, 0)
    }
  })
}

function run() {
  Location.listen(render)
  render(Location.location, Location.action)
}

if (canUseDOM) {
  // Run the application when both DOM is ready and page content is loaded
  if (
    ['complete', 'loaded', 'interactive'].includes(document.readyState) &&
    document.body
  ) {
    run()
  } else {
    document.addEventListener('DOMContentLoaded', run, false)
  }

  window.addEventListener('load', function(_event) {
    // scroll to the anchor position
    const { hash } = location
    if (hash) {
      const anchor = hash.substr(1)
      const elem = document.querySelector(`a[name=${anchor}]`)
      if (elem) {
        setTimeout(() => elem.scrollIntoView(), 100)
      }
    }
  })
}

export default { route, routes }
