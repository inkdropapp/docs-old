Inkdrop's text editor is built on top of [CodeMirror](https://codemirror.net/) which is specialized for editing code, and comes with a number of [language modes](https://codemirror.net/mode/index.html) and [addons](https://codemirror.net/doc/manual.html#addons) that implement more advanced editing functionality.

You can access the instance of CodeMirror like this:

```js
inkdrop.getActiveEditor().codeMirror
```
