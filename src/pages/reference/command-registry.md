---
index: 110
category: classes
path: /reference/command-registry
title: Command Registry
---

Associates listener functions with commands in a context-sensitive way using DOM node.
You can access a global instance of this class via `inkdrop.commands`.

The global command registry facilitates a style of event handling known as event delegation. Inkdrop commands are expressed as custom DOM events that can be invoked on the currently focused element via a key binding.
Rather than binding listeners for command events directly to DOM nodes, you instead register command event listeners globally on `inkdrop.commands` and constrain them to specific kinds of elements with DOM nodes.

Command names must follow the `namespace:action` pattern, where `namespace` will typically be the name of your package, and `action` describes the behavior of your command.
If either part consists of multiple words, these must be separated by hyphens. E.g. `awesome-package:turn-it-up-to-eleven`.
All words should be lowercased.

As the event bubbles upward through the DOM, all registered event listeners with matching selectors are invoked in order of specificity.
In the event of a specificity tie, the most recently registered listener is invoked first.
This mirrors the "cascade" semantics of CSS.
Event listeners are invoked in the context of the current DOM node, meaning `this` always points at `event.currentTarget`.
As is normally the case with DOM events, `stopPropagation` and `stopImmediatePropagation` can be used to terminate the bubbling process and prevent invocation of additional listeners.

## Example

Here is a command that inserts the current date in an editor:

```js
inkdrop.commands.add(document.body, {
  'user:insert-date': ()=> {
    const { document } = inkdrop.flux.getStore('editor').getState()
    document.body = document.body + '\n' + new Date().toLocaleString()
    inkdrop.flux.getActions('editor').update({ document, changed: true })
  }
})
```

Here is how to invoke the save command:

```js
inkdrop.commands.dispatch(document.body, 'core:save-note');
```

## Methods

### add(target, commandName, callback)

Add a command listener associated with a DOM node.

| Argument  | Description  |
|:----------|:-------------|
| `target`  | A DOM node.  |
| `commandName` | A String containing the name of a command you want to handle such as `user:insert-date`. |
| `callback(event)` | A Function to call when the given command is invoked on an element matching the selector. It will be called with this referencing the matching DOM node. |

### add(target, commands)

Add multiple command listeners associated with a DOM node.

| Argument  | Description  |
|:----------|:-------------|
| `target`  | A DOM node.  |
| `commands` | An Object mapping command names like `user:insert-date` to listener Functions. |

### dispatch(target, commandName)

Simulate the dispatch of a command on a DOM node.

This can be useful for testing when you want to simulate the invocation of a command on a detached DOM node.
Otherwise, the DOM node in question needs to be attached to the document so the event bubbles up to the root node to be processed.

| Argument  | Description  |
|:----------|:-------------|
| `target`  | The DOM node at which to start bubbling the command event. |
| `commandName` | String indicating the name of the command to dispatch. |

