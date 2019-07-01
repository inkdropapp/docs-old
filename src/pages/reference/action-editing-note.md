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
import { actions } from 'inkdrop'

inkdrop.store.dispatch(actions.editingNote.update({ title: 'NEW TITLE' }))
```

## Actions

### update(data)

Update the editing note data.

| Argument | Description |
| -------- | ----------- |
| `data` | A [Note][Note] data to update. Every field of [Note][Note] is optional. You can pass pairs of fields you would like to update. |


[Note]: /reference/data-models#a-nameresource-notenotea
