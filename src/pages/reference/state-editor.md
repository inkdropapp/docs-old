---
index: 600
category: flux-state
path: /reference/state-editor
title: editor
---

An app state of the editor.
To get the `notes` state:

```js
const { editor } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ editor }) => ({ editor }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### changed: `boolean`

true if the note has been changed.
The editor will save the note if `changed` is true when it is closed.

### needsUpdatingDate: `boolean`

Whether the note's `updatedAt` field needs to be updated or not.

### viewMode: `EditorViewMode`

The editor view mode which represents either `'preview'`, `'sideBySide'` or `'edit'`.

### openingNoteId: `?string`

When the app is trying to open a note, it indicates its note ID, otherwise falsy value.

### readOnly: `boolean`

true if the editor is in read only mode.

### savingNoteId: `?string`

When the app is saving the note, it indicates its node ID, otherwise falsy value.

### lastError: `?AssistiveError`

A last error that was occurred.


