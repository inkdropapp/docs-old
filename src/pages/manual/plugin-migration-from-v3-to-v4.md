---
index: 10
category: 'appendix'
path: '/manual/plugin-migration-from-v3-to-v4'
title: 'Plugin Migration Guide from v3 to v4'
---

In v4, there are some breaking changes in its APIs.
If you are a plugin author, please upgrade your plugins along with following instructions.

## Example

Here are my commit logs to support v4:

- [breaks](https://github.com/inkdropapp/inkdrop-breaks/commit/65d2e895485356f06b2e5e8f892ab0cd46496c5f)
- [spell-checker](https://github.com/inkdropapp/inkdrop-spell-checker/commit/60bba2e4958be4fdfdd5ea3881759d9c29b0b2e1)

## Update `engines.inkdrop` field in `package.json`

Tell the app your plugin supports v4:

```diff
   "engines": {
-    "inkdrop": "^3.18.0"
+    "inkdrop": "^4.x"
   },
```

## Use `markdownRenderer` instead of `MDEPreview`

If your plugin adds a remark plugin to the markdown renderer, please change it as follows:

```diff
+ const { markdownRenderer } = require('inkdrop')
  const breaks = require('remark-breaks')

  module.exports = {
    activate () {
-     const { MDEPreview } = inkdrop.components.classes
-     if (MDEPreview) {
-       return MDEPreview.remarkPlugins.splice(0, 0, breaks)
-     }
+     return markdownRenderer.remarkPlugins.splice(0, 0, breaks)
    },
    deactivate () {
-     const { MDEPreview } = inkdrop.components.classes
-     if (MDEPreview) {
-       MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(function (plugin) {
-         return plugin !== breaks
-       })
+     if (markdownRenderer) {
+       markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
+         plugin => {
+           return plugin !== breaks
+         }
+       )
+     }
    }
  }
```

## Import `codemirror` directly

If your plugin extends CodeMirror module, please do so:

```diff
- import { CodeMirror } from 'inkdrop'
+ import CodeMirror from 'codemirror'
```

## Change `editor.codeMirror` to `editor.cm`

I admit this breaking change does not make sense but please do so 😂:

```diff
  const editor = global.inkdrop.getActiveEditor()
- const { codeMirror } = editor
+ const { cm } = editor
```

## Call `onEditorLoad`

`global.inkdrop` provides a method called `onEditorLoad` to let you watch the editor load.

```diff
- global.inkdrop.on('editor:init', this.handleEditorInit.bind(this));
+ global.inkdrop.onEditorLoad(this.handleEditorInit.bind(this));
```

## Still not working?

Please feel free to report issues on [our forum](https://forum.inkdrop.app/)!
