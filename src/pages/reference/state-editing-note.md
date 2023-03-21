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
import { useSelector } from 'react-redux'

const selector = ({ editingNote }) => editingNote

const MyComponent = props => {
  const editingNote = useSelector(selector)
  // render
}
```

## Data Structure

The state represents [Note][note] data while a note opened, otherwise it's `null` or `undefined`.

[note]: /reference/data-models#a-nameresource-notenotea
