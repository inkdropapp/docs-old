---
index: 60
category: 'usage'
toc: false
path: '/manual/customizing-keybindings'
title: 'Customizing Keybindings'
---

Inkdrop keymaps work similarly to stylesheets.
Just as stylesheets use selectors to apply styles to elements, Inkdrop keymaps use selectors to associate key combinations with events in specific contexts.
Here's a small example, excerpted from Inkdrop's built-in keymap:

```json
{
  ".CodeMirror textarea": {
    "enter": "editor:new-line"
  },
  "body .native-key-bindings": {
    "enter": "native!"
  }
}
```

This keymap defines the meaning of `Enter` in two different contexts.
In a normal editor, pressing `Enter` triggers the `editor:new-line` command, which causes the editor to insert a newline.
But if the same keystroke occurs outside the editor, it instead triggers the native behavior.

By default, `keymap.json` is loaded when Inkdrop is started.
It will always be loaded last, giving you the chance to override bindings that are defined by Inkdrop's core keymaps or third-party packages.

Available commands can be found [here](/manual/list-of-commands).
You can also see all the keybindings that are currently configured in your installation of Inkdrop in _Keybindings_ section on _Preferences_ window:

![Preferences](./customizing-keybindings_preferences.png)

By clicking **your keymap file** on the top of this section, you can open up the file.

To unbind the existing keybindings, set `false` value instead of command name to them.

## Global keybindings

There is a special selector called `global` which lets you configure global keybindings.
You can run a command when the app does not have keyboard focus.

### Show and focus Inkdrop main window

![Bring window into focus](/customizing-keybindings_globalshortcuts.gif)

```json
{
  "global": {
    "cmd-shift-x": "application:show-and-focus-main-window",
    "cmd-shift-c": "application:quick-note"
  }
}
```

### Toggle Inkdrop main window

```json
{
  "global": {
    "cmd-shift-x": "application:toggle-main-window"
  }
}
```

### Create a note and show it in a separate window

Quickly open up a new note with a shortcut:

```json
{
  "global": {
    "cmd-shift-c": "application:quick-note"
  }
}
```
