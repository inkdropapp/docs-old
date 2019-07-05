---
index: 1100
category: flux-state
path: /reference/state-note-list-bar
title: noteListBar
---

An app state of note list bar.
To get the `noteListBar` state:

```js
const { noteListBar } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ noteListBar }) => ({ noteListBar }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### selectedNoteIds: `string[]`

An array of note ID of selected notes on the note list bar.

### actionTargetNoteIds: `string[]`

An array of note ID of target notes for context menu on the note list bar.

