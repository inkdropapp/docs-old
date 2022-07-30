const path = require('path')
const fs = require('fs')
const visit = require('unist-util-visit')

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'image', node => {
    if (node.url.endsWith('.svg') && node.alt === 'ui-icon') {
      node.type = 'html'
      const url = node.url.startsWith('/') ? node.url.substring(1) : node.url
      const pathToSvg = path.resolve(__dirname, '..', '..', 'static', url)
      const svg = fs.readFileSync(pathToSvg)
      node.value = `<span class='ui-icon'>${svg}</span>`
    }
  })
}
