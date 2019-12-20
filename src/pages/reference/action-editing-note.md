---
index: 100
category: flux-action
path: /reference/action-editing-note
title: editingNote
---

Actions for changing [editingNote](/reference/state-editing-note) app state.

## Updating the editing note

If you would like to change the title of editing note, do like so:

```js
import { actions } from "inkdrop"

inkdrop.store.dispatch(actions.editingNote.update({ title: "NEW TITLE" }))
inkdrop.store.dispatch(actions.editor.change(true))
```

## Actions

### update(data)

Update the editing note data.

| Argument | Description                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `data`   | A [Note][note] data to update. Every field of [Note][note] is optional. You can pass pairs of fields you would like to update. |

### open(note)

Load a note data to the editor.

**Warning**: Do not use this action in your plugin. Please use [`core:open-note` command](/manual/list-of-commands#coreopen-note) if you would like to open a note in the editor.

| Argument | Description                  |
| -------- | ---------------------------- |
| `note`   | A [Note][note] data to load. |

[note]: /reference/data-models#a-nameresource-notenotea

### close()

Close the editing note.

**Warning**: Do not use this action in your plugin. Please invoke [`editor.close` action](/reference/action-editor#close) instead.

