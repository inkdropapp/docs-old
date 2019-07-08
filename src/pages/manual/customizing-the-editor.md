---
index: 60
category: "hacking"
toc: false
path: "/manual/customizing-the-editor"
title: "Customizing the Editor"
---

Inkdrop's text editor is built on top of [CodeMirror](https://codemirror.net/) which is specialized for editing code, and comes with a number of [language modes](https://codemirror.net/mode/index.html) and [addons](https://codemirror.net/doc/manual.html#addons) that implement more advanced editing functionality.

You can access the instance of CodeMirror via [MDE](/reference/mde) like this:

```js
inkdrop.getActiveEditor().cm
```

You can also get a CodeMirror class object by doing `require('codemirror')`.

## How to install addons to CodeMirror

CodeMirror comes with a bunch of addons available to use.
But you can't require them like `require('codemirror/addons/fold/foldcode.js')` because it is not in the search path.
To do so, add a path to the app's `node_modules` to your `require` statements as following:

```js
const app = require('electron').remote.app;
const modulePath = app.getAppPath() + '/node_modules/'
require(modulePath + 'codemirror/addon/fold/foldcode.js');
require(modulePath + 'codemirror/addon/fold/foldgutter.js');
require(modulePath + 'codemirror/addon/fold/markdown-fold.js');
```

## When to customize the editor

If you are building a plugin which changes CodeMirror's behaviors, you have to subscribe events to know when the editor is ready.
`global.inkdrop` provides two methods to subscribe events on the editor. You can use them like so:

```js
global.inkdrop.onEditorLoad((editor) => console.log('Editor loaded'));
global.inkdrop.onEditorUnload(() => console.log('Editor unloaded'));
```

See also [this page](/reference/environment#event-subscription) for more detail about the event subscription.
