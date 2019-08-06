---
index: 1200
category: flux-state
path: /reference/state-notes
title: notes
---

An [app state](/manual/flux-architecture) of notes currently loaded for the note list bar.
To get the `notes` state:

```js
const { notes } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from "react-redux"

const connector = connect(
  ({ notes }) => ({ notes }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### items: `Note[]`

An array of [Note][note]s.

### hashedItems: `{ [noteId]: Note }`

A map which keys are noteId and values are [Note][note].

### lastQuery: `?NoteQuery`

The last note query to show the list of notes

### cursor: `NoteQueryCursor | null`

The current cursor to list the notes

### totalRows: `number`

Number of items

### timestamp: `number`

Last datetime when the state was changed

### viewOptions: `?NotesViewOptions`

The note list view options

### loading: `boolean`

true while notes are being loaded

[note]: /reference/data-models#a-nameresource-notenotea
