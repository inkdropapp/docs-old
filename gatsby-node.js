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
  await createPageFromRemoteMd(
    `https://raw.githubusercontent.com/inkdropapp/inkdrop-model/master/docs/schema.md`,
    `src/pages/reference/data-models.md`,
    {
      index: 20,
      category: 'data',
      path: '/reference/data-models',
      title: 'Data Models'
    },
    {
      header: `* [Book](#resource-book)\n* [File](#resource-file)\n* [Note](#resource-note)\n* [Tag](#resource-tag)\n`
    }
  )
}

const categories = [
  'usage',
  'hacking',
  'appendix',
  'info',
  'data',
  'classes',
  'flux-state',
  'flux-action',
  'data-access',
  'component'
]

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
      case 'data-access':
      case 'component':
        return referenceTemplate
      default:
        return manualTemplate
    }
  }

  /*
   * Generate pages from Markdown
   */
  for (category of categories) {
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___index] }
          limit: 1000
          filter: { frontmatter: { category: { eq: "${category}" } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
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
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
      const { path, category } = node.frontmatter
      const prev = index === 0 ? false : posts[index - 1].node
      const next = index === posts.length - 1 ? false : posts[index + 1].node

      if (path && category) {
        createPage({
          path,
          component: getTemplateForCategory(category),
          context: {
            prev,
            next
          }
        })
      }
    })
  }
}
