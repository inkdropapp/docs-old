---
index: 50
category: "hacking"
path: "/manual/the-init-file"
title: "The Init File"
---

When Inkdrop finishes loading, it will evaluate `init.js` in [your data directory](/manual/basic-usage#user-data-directory), giving you a chance to run JavaScript code to make customizations.
Code in this file has full access to Inkdrop's API. If customizations become extensive, consider creating a plugin, which we will cover in [Package: Word Count](/manual/plugin-word-count).

For example, you could add the following code to yout `init.js` file to have Inkdrop show an alert every time it loads:

```js
alert('Hello')
```

Because `init.js` provides access to Inkdrop's API, you can use it to implement useful commands without creating a new plugin or extending an existing one.
Here's a command which construct a Markdown link from the selected text and the clipboard contents as the URL:

```js
const { clipboard } = require('electron')

inkdrop.commands.add(document.body, 'editor:paste-as-link', () => {
  const { cm } = inkdrop.getActiveEditor()
  const selectionText = cm.getSelection()
  const clipboardText = clipboard.readText()
  cm.replaceSelection(`[${selectionText}](${clipboardText})`)
})

inkdrop.menu.add([
  {
    label: 'Edit',
    submenu: [{
      label: 'Paste as Link',
      command: 'editor:paste-as-link'
    }]
  }
])
```

Now, reload Inkdrop and select *Edit -> Paste as Link* from the application menu to execute the new command.
And if you'd like to trigger the command via a keyboard shortcut, you can define a [keybinding for the command](/manual/customizing-keybindings).

