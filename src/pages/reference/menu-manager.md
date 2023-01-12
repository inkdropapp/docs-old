---
index: 140
category: classes
path: /reference/menu-manager
title: Menu Manager
---

Provides a registry for menu items that you'd like to appear in the application menu.

An instance of this class is always available as the `inkdrop.menu` global.

## Menu JSON Format

Here is an example from the [inkdrop-paste-as-markdown](https://github.com/inkdropapp/inkdrop-paste-as-markdown):

```js
;[
  {
    label: 'Plugins',
    submenu: [
      {
        label: 'Paste as Markdown',
        command: 'paste-as-markdown'
      }
    ]
  }
]
```

Use in your package's menu `.json` file requires that you place your menu structure under a `menu` key.

```js
{
  "menu": [
    {
      "label": "File",
      "submenu": [
        {
          "label": "Import",
          "submenu": [
            { "label": "from HTML files..", "command": "import-html:import-from-file" }
          ]
        }
      ]
    }
  ]
}
```

See `::add` for more info about adding menu's directly.

## Methods

### ::add(items)

Adds the given items to the application menu.

```js
inkdrop.menu.add([
  {
    label: 'Hello',
    submenu: [{ label: 'World!', command: 'hello:world' }]
  }
])
```

| Argument | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `items`  | An Array of menu item Objects containing the keys:                         |
|          | `label`: The String menu label.                                            |
|          | `submenu`: An optional Array of sub menu items.                            |
|          | `command`: An optional String command to trigger when the item is clicked. |

#### Return values

Returns a [Disposable](/reference/disposable) on which .dispose() can be called to remove the added menu items.

### ::update()

Refreshes the currently visible menu.
