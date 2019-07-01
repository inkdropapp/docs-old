/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const yaml = require('js-yaml')

exports.onCreateWebpackConfig = ({ stage: _stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config')
      }
    }
  })
}

exports.onPreBootstrap = async () => {
  async function createPageFromRemoteMd(url, pagePath, frontmatter, options) {
    const res = await fetch(url)
    const md = await res.text()
    const fm = yaml.safeDump(frontmatter)
    const { header } = options || {}
    fs.writeFileSync(
      path.resolve(pagePath),
      `---\n${fm}---\n\n${header || ''}\n${md}`
    )
  }
  /*
   * Generate release notes
   */
  await createPageFromRemoteMd(
    `https://raw.githubusercontent.com/inkdropapp/version-history/master/README.md`,
    `src/pages/releases.md`,
    {
      index: 20,
      category: 'info',
      path: '/releases',
      title: 'Release Notes'
    }
  )
  await createPageFromRemoteMd(
    `https://raw.githubusercontent.com/inkdropapp/version-history-beta/master/README.md`,
    `src/pages/releases-beta.md`,
    {
      index: 21,
      category: 'info',
      path: '/releases-beta',
      title: 'Release Notes (Beta)'
    },
    {
      header: `You can download [the beta version here](http://my.inkdrop.app/download/beta). It is only available for paid users.`
    }
  )
  await createPageFromRemoteMd(
    `https://unpkg.com/inkdrop-version-history-mobile@latest/README.md`,
    `src/pages/releases-mobile.md`,
    {
      index: 30,
      category: 'info',
      path: '/releases-mobile',
      title: 'Release Notes (Mobile)'
    }
  )
  await createPageFromRemoteMd(
    `https://raw.githubusercontent.com/inkdropapp/inkdrop-model/master/docs/schema.md`,
    `src/pages/reference/data-models.md`,
    {
      index: 20,
      category: 'data',
      path: '/reference/data-models',
      title: 'Data Models'
    }
  )
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const manualTemplate = path.resolve(`src/templates/manual-template.js`)
  const referenceTemplate = path.resolve(`src/templates/reference-template.js`)
  const infoTemplate = path.resolve(`src/templates/info-template.js`)

  function getTemplateForCategory(category) {
    switch (category) {
      case 'info':
        return infoTemplate
      case 'data':
      case 'classes':
      case 'flux-state':
      case 'flux-action':
        return referenceTemplate
      default:
        return manualTemplate
    }
  }

  /*
   * Generate pages from Markdown
   */
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___index] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              category
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { path, category } = node.frontmatter
    createPage({
      path,
      component: getTemplateForCategory(category),
      context: {} // additional data can be passed via context
    })
  })
}
