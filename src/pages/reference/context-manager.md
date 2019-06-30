---
index: 130
category: classes
path: /reference/context-menu-manager
title: Context Menu Manager
---

Provides a registry for commands that you'd like to appear in the context menu.

An instance of this class is always available as the `inkdrop.contextMenu` global.

## Context Menu JSON Format

In your package's menu `.json` file you need to specify it under a `context-menu` key like so:

```json
{
  "context-menu": {
    ".mde-preview": [
      { "label": "Copy", "command": "core:copy" },
      { "label": "Select All", "command": "core:select-all" }
    ]
  }
}
```

The format for use in `::add` is the same minus the `context-menu` key.

## Methods

### ::add(itemsBySelector)

Add context menu items scoped by CSS selectors.

To add a context menu, pass a selector matching the elements to which you want the menu to apply as the top level key, followed by a menu descriptor.
The invocation below adds a 'History' submenu on the editor supporting undo/redo.
This is just for example purposes and not the way the menu is actually configured in Inkdrop by default.

```js
inkdrop.contextMenu.add({
  '.CodeMirror': [{
    label: 'History',
    submenu: [
      { label: 'Undo', command: 'core:undo' },
      { label: 'Redo', command: 'core:redo' }
    ]
  }]
})
```

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to remove the added menu items.

