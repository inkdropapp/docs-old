/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const yaml = require('js-yaml')
const remark = require('remark')
const remarkHtml = require('remark-html')

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
    `https://raw.githubusercontent.com/inkdropapp/version-history-mobile/master/README.md`,
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
    },
    {
      header: `* [Book](#a-nameresource-bookbooka)\n* [File](#a-nameresource-filefilea)\n* [Note](#a-nameresource-notenotea)\n* [Tag](#a-nameresource-tagtaga)\n`
    }
  )
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // get version history data from GitHub
  const res = await fetch(
    'https://raw.githubusercontent.com/inkdropapp/version-history/master/history.yml'
  )
  const txtData = await res.text()
  const versionHistory = yaml.safeLoad(txtData)

  for (const item of versionHistory) {
    const file = remark().use(remarkHtml).processSync(item.notes)
    createNode({
      ...item,
      html: file.contents,
      id: `version-${item.version}`,
      parent: null,
      children: [],
      internal: {
        type: `versionHistory`,
        contentDigest: createContentDigest(JSON.stringify(item))
      }
    })
  }
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
  const versionHistoryTemplate = path.resolve(
    `src/templates/version-history-template.js`
  )

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

  /*
   * Generate pages of version history
   */
  const result = await graphql(`
    {
      allVersionHistory(sort: { order: ASC, fields: [pub_date] }, limit: 1000) {
        edges {
          node {
            version
            pub_date
            notes
          }
        }
      }
    }
  `)
  const versionItems = result.data.allVersionHistory.edges
  for (const item of versionItems) {
    const path = `/releases/${item.node.version}`
    createPage({
      path,
      component: versionHistoryTemplate,
      context: {
        version: item.node.version
      }
    })
  }
}
