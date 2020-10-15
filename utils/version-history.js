const fetch = require('node-fetch')
const yaml = require('js-yaml')
const remark = require('remark')
const remarkHtml = require('remark-html')

exports.createNodesFromVersionHistory = async params => {
  const { type, idPrefix, url, createNode, createContentDigest } = params
  // get version history data from GitHub
  const res = await fetch(url)
  const txtData = await res.text()
  const versionHistory = yaml.safeLoad(txtData)

  for (const item of versionHistory) {
    const file = remark().use(remarkHtml).processSync(item.notes)
    createNode({
      ...item,
      html: file.contents,
      id: `${idPrefix}-${item.version}`,
      parent: null,
      children: [],
      internal: {
        type: type,
        contentDigest: createContentDigest(JSON.stringify(item))
      }
    })
  }
}

exports.createVersionHistoryPages = async params => {
  const { type, pathPrefix, component, graphql, createPage } = params
  const typeAll = 'all' + type.charAt(0).toUpperCase() + type.slice(1)
  const result = await graphql(`
    {
      ${typeAll}(sort: { order: ASC, fields: [pub_date] }, limit: 1000) {
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
  const versionItems = result.data[typeAll].edges
  for (const item of versionItems) {
    const path = `${pathPrefix}/${item.node.version}`
    createPage({
      path,
      component,
      context: {
        version: item.node.version
      }
    })
  }
}
