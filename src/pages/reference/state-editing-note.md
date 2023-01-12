---
index: 500
category: flux-state
path: /reference/state-editing-note
title: editingNote
---

An [app state](/manual/flux-architecture) of currently opened note in the editor.
To get the `editingNote` state:

```js
const { editingNote } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ editingNote }) => ({ editingNote }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

The state represents [Note][note] data while a note opened, otherwise it's `null` or `undefined`.

[note]: /reference/data-models#a-nameresource-notenotea
