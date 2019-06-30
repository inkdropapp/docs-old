---
index: 150
category: classes
path: /reference/keymap-manager
title: Keymap Manager
---

Allows commands to be associated with keystrokes in a context-sensitive way.
In Inkdrop, you can access a global instance of this object via `inkdrop.keymaps`.

Key bindings are plain JavaScript objects containing **CSS selectors** as their top level keys, then **keystroke patterns** mapped to commands.

```js
{
  // global
  body: {
    'cmd-n': 'core:new-note',
    'cmd-alt-n': 'window:new-inkdrop-window',
  },

  // editor
  '.CodeMirror textarea': {
    'ctrl-shift-up': 'editor:select-lines-upward',
    'ctrl-shift-down': 'editor:select-lines-downward',
    enter: 'editor:new-line',
    tab: 'editor:indent'
  }
}
```

When a keystroke sequence matches a binding in a given context, a custom DOM event with a type based on the command is dispatched on the target of the keyboard event.

To match a keystroke sequence, the keymap starts at the target element for the keyboard event.
It looks for key bindings associated with selectors that match the target element.
If multiple match, the most specific is selected.
If there is a tie in specificity, the most recently added binding wins.
If no bindings are found for the events target, the search is repeated again for the target's parent node and so on recursively until a binding is found or we traverse off the top of the document.

When a binding is found, its command event is always dispatched on the original target of the keyboard event, even if the matching element is higher up in the DOM.
In addition, `.preventDefault()` is called on the keyboard event to prevent the browser from taking action.
`.preventDefault` is only called if a matching binding is found.

Command event objects have a non-standard method called `.abortKeyBinding()`.
If your command handler is invoked but you programmatically determine that no action can be taken and you want to allow other bindings to be matched, call `.abortKeyBinding()` on the event object.
An example of where this is useful is binding snippet expansion to `tab`.
If `snippets:expand` is invoked when the cursor does not follow a valid snippet prefix, we abort the binding and allow `tab` to be handled by the default handler, which inserts whitespace.

Multi-keystroke bindings are possible. If a sequence of one or more keystrokes partially matches a multi-keystroke binding, the keymap enters a pending state. 
The pending state is terminated on the next keystroke, or after `::getPartialMatchTimeout` milliseconds has elapsed.
When the pending state is terminated via a timeout or a keystroke that leads to no matches, the longest ambiguous bindings that caused the pending state are temporarily disabled and the previous keystrokes are replayed.
If there is ambiguity again during the replay, the next longest bindings are disabled and the keystrokes are replayed again.

## Event Subscription

### ::onDidMatchBinding(callback)

Invoke the given callback when one or more keystrokes completely match a key binding.

| Argument | Description |
| -------- | ----------- |
| `callback(event)` | Function to be called when keystrokes match a binding. |
| &emsp;event | Object with the following keys: |
| &emsp;&emsp;.keystrokes | String of keystrokes that matched the binding. |
| &emsp;&emsp;.binding    | `KeyBinding` that the keystrokes matched.
| &emsp;&emsp;.keyboardEventTarget | DOM element that was the target of the most recent keyboard event. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidPartiallyMatchBindings(callback)

Invoke the given callback when one or more keystrokes partially match a binding.

| Argument | Description |
| -------- | ----------- |
| `callback(event)` | Function to be called when keystrokes partially match a binding. |
| &emsp;event | Object with the following keys: |
| &emsp;&emsp;.keystrokes | String of keystrokes that matched the binding. |
| &emsp;&emsp;.partiallyMatchedBindings | `KeyBinding`s that the keystrokes partially matched. |
| &emsp;&emsp;.keyboardEventTarget | DOM element that was the target of the most recent keyboard event. |
 
#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidFailToMatchBinding(callback)

Invoke the given callback when one or more keystrokes fail to match any bindings.

| Argument | Description |
| -------- | ----------- |
| `callback(event)` | Function to be called when keystrokes fail to match any bindings. |
| &emsp;event | Object with the following keys: |
| &emsp;&emsp;.keystrokes | String of keystrokes that matched the binding. |
| &emsp;&emsp;.keyboardEventTarget | DOM element that was the target of the most recent keyboard event. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.
 
## Adding and Removing Bindings

### ::build(source, bindings, priority)

Construct `KeyBinding`s from an object grouping them by CSS selector.

| Argument | Description |
| -------- | ----------- |
| `source` | A String (usually a path) uniquely identifying the given bindings so they can be removed later. |
| `bindings` | An Object whose top-level keys point at sub-objects mapping keystroke patterns to commands. |
| `priority` | A Number used to sort keybindings which have the same specificity. Defaults to `0`.


### ::add(source, bindings, priority)

Add sets of key bindings grouped by CSS selector.

| Argument | Description |
| -------- | ----------- |
| `source` | A String (usually a path) uniquely identifying the given bindings so they can be removed later. |
| `bindings` | An Object whose top-level keys point at sub-objects mapping keystroke patterns to commands. |
| `priority` | A Number used to sort keybindings which have the same specificity. Defaults to `0`.

## Accessing Bindings

### ::getKeyBindings()

Get all current key bindings.

#### Return values

Returns an Array of `KeyBinding`s.

### ::findKeyBindings(params)

Get the key bindings for a given command and optional target.

| Argument | Description |
| -------- | ----------- |
| `params` | An Object whose keys constrain the binding search: |
| &emsp;.keystrokes | A String representing one or more keystrokes, such as 'ctrl-x ctrl-s' |
| &emsp;.command    | A String representing the name of a command, such as 'editor:delete-char-before' |
| &emsp;.target     | An optional DOM element constraining the search. If this parameter is supplied, the call will only return bindings that can be invoked by a KeyboardEvent originating from the target element. |

#### Return values

Returns an Array of `KeyBinding`s.


