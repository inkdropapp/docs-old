---
index: 200
category: classes
path: /reference/markdown-renderer
title: Markdown Renderer
---

Inkdrop's markdown rendering system is built on top of [remark](https://github.com/remarkjs/remark), a markdown processor powered by [plugins](https://github.com/remarkjs/remark/tree/master/doc/plugins.md<Paste>) part of [the unified collective](https://github.com/unifiedjs/unified).
You can access a global instance of this class like so:

```js
const { markdownRenderer } = require('inkdrop')
```

## Properties

### remarkOptions: `{ [string]: bool }`

It is passed to [remark parser](https://github.com/remarkjs/remark/tree/master/packages/remark-parse).
Inkdrop parses Markdown with following options by default:

```js
{
  gfm: true,
  yaml: false,
  commonmark: true,
  pedantic: false
}
```

Available options are [here](https://github.com/remarkjs/remark/tree/master/packages/remark-parse#processoruseparse-options).
Note that changing this options would cause unexpected behaviors.

### remarkPlugins: `Array<RemarkPlugin>`

It is an array of custom remark plugins.

* Example plugin: [math](https://github.com/inkdropapp/inkdrop-math)

### remarkReactComponents: `{ [string]: ReactComponent }`

It is used for rendering Markdown with custom HTML components.
If you would like to override rendering `a` HTML elements with custom component, you could do like so:

```js
class Anchor extends React.Component {
  render () {
    // ...
  }
}
markdownRenderer.remarkReactComponents.a = Anchor
```

* Example plugin: [toc](https://github.com/inkdropapp/inkdrop-toc)

### remarkCodeComponents: `{ [string]: ReactComponent }`

It allows you to render code blocks with custom React components.
You can define a component for a language like so:

```js
class JSCodeBlock extends React.Component {
  render () {
    // ...
  }
}
markdownRenderer.remarkCodeComponents['javascript'] = JSCodeBlock
```

* Example plugin: [sequence-diagrams](https://github.com/inkdropapp/inkdrop-sequence-diagrams)
