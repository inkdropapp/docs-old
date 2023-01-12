---
index: 110
category: flux-action
path: /reference/action-editor
title: editor
---

Actions for managing [editor](/reference/state-editor) app state.

## Set the editor state as 'changed'

If you manipulated the note data and want the app to save it, do like so:

```js
import { actions } from 'inkdrop'

inkdrop.store.dispatch(actions.editor.change(true))
```

## Actions

### change(needsUpdatingDate)

Flag the editing note as changed, which tells the app that it needs to be saved.

| Argument            | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| `needsUpdatingDate` | Boolean, whether the note's `updatedAt` field needs to be updated or not. |

### save()

Save the currently editing note.

**Warning**: Do not use this action in your plugin. Please invoke [`core:save-note` command](/manual/list-of-commands#coresave-note) instead.

### close()

Close the editing note. The changes in the note will be saved.

### create()

Create new note and open it.

**Warning**: Do not use this action in your plugin. Please invoke [`core:new-note` command](/manual/list-of-commands#corenew-note) instead.

### changeViewMode(viewMode)

Change the editor view mode.

**Warning**: Do not use this action in your plugin. Please invoke [`view:toggle-preview` command](/manual/list-of-commands#viewtoggle-preview) or [`view:toggle-side-by-side`](/manual/list-of-commands#viewtoggle-side-by-side) instead.

[note]: /reference/data-models#a-nameresource-notenotea
