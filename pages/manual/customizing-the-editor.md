Inkdrop's text editor is built on top of [CodeMirror](https://codemirror.net/) which is specialized for editing code, and comes with a number of [language modes](https://codemirror.net/mode/index.html) and [addons](https://codemirror.net/doc/manual.html#addons) that implement more advanced editing functionality.

You can access the instance of CodeMirror like this:

```js
inkdrop.getActiveEditor().codeMirror
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

