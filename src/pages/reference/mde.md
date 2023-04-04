---
index: 300
category: classes
path: /reference/mde
title: MDE (Markdown Editor)
---

Markdown editor React component.
An instance of this class will be loaded when you opened a note.
You can access it as following:

```js
const mde = inkdrop.getActiveEditorOrThrowError()
```

If you are building a plugin that extends the editor, you have to subscribe events to know when it is loaded/unloaded:

```js
module.exports = {
  activate() {
    global.inkdrop.onEditorLoad(this.handleEditorDidLoad.bind(this))
  },

  deactivate() {
    const editor = global.inkdrop.getActiveEditor()
    if (editor) {
      // unload
    }
  },

  handleEditorDidLoad(editor) {
    // extend the editor
    const { cm } = editor
  }
}
```

For more information about accessing the editor, refer to [Environment](/reference/environment).

## Extending Inkdrop Editor

Inkdrop's editor is built on top of [CodeMirror](http://codemirror.net/).
You can access its instance via `mde.cm`.
For example, you can change the editor option like so:

```js
const mde = inkdrop.getActiveEditorOrThrowError()
mde.cm.setOption('lineNumbers', true)
```

All available CodeMirror APIs are [documented here](https://codemirror.net/doc/manual.html).

## Properties

### cm

An instance of [CodeMirror v5](https://codemirror.net/5/).

### wrapper

A React component that wraps [CodeMirror](http://codemirror.net/).
