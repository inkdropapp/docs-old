---
index: 100
category: classes
path: /reference/environment
title: Environment
---

Inkdrop global for dealing with packages, themes, menus, and the window.

An instance of this class is always available as the `inkdrop` global.

## Properties

### commands

A [CommandRegistry](/reference/command-registry) instance

### config

A [Config](/reference/config) instance

### contextMenu

A [ContextMenuManager](/reference/context-menu-manager) instance

### devMode

Boolean, true if Development Mode is enabled, false if disabled

### element

A React root component

### keymaps

A [KeymapManager](/reference/keymap-manager) instance

### layouts

A LayoutManager instance

### main

A reference to an InkdropApplication instance in the main process

### menu

A [MenuManager](/reference/menu-manager) instance

### notifications

A [NotificationManager](/reference/notification-manager) instance

### packages

A [PackageManager](/reference/package-manager) instance

### resourcePath

A path to the app's bundled resource directory. For example, it is usually `"/Applications/Inkdrop.app/Contents/Resources/app.asar"` on macOS.

### themes

A [ThemeManager](/reference/theme-manager) instance

### styles

A [StyleManager](/reference/style-manager) instance

### store

A [Redux store](https://redux.js.org/api/store)

### window

A [BrowserWindow](https://electronjs.org/docs/api/browser-window) instance of the current window

## Event Subscription

### onEditorLoad(callback)

Invoke the given callback when the editor has been loaded.

| Argument | Description |
| -------- | ----------- |
| `callback(editor)` | A Function to be invoked.  |
| &emsp;`editor`     | The [MDE](/reference/mde) that was loaded. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onEditorUnload(callback)

Invoke the given callback when the editor has been unloaded.

| Argument | Description |
| -------- | ----------- |
| `callback()` | A Function to be invoked.  |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


## Methods

### isEditorActive()

Returns a Boolean indicating whether the editor is active.

### getActiveEditor()

Returns an instance of [MDE](/reference/mde) if the editor is active, otherwise undefined.

### getActiveEditorOrThrowError()

Returns an instance of [MDE](/reference/mde) if the editor is active, otherwise an error is thrown.

### setActiveEditor(editor)

Set an instance of [MDE](/reference/mde) which is currently active.

| Argument | Description |
| -------- | ----------- |
| `editor` | An instance of [MDE](/reference/mde) |
