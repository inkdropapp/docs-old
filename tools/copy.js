/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import task from './lib/task'
import cp from './lib/copy'

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task(async function copy() {
  await cp('static', 'build')
  await cp(
    'node_modules/inkdrop-version-history-beta/README.md',
    'pages/releases.md'
  )
  await cp(
    'node_modules/inkdrop-version-history-mobile/README.md',
    'pages/releases-mobile.md'
  )
})
