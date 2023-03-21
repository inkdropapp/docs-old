---
index: 1100
category: flux-state
path: /reference/state-note-list-bar
title: noteListBar
---

An [app state](/manual/flux-architecture) of note list bar.
To get the `noteListBar` state:

```js
const { noteListBar } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { useSelector } from 'react-redux'

const selector = ({ noteListBar }) => noteListBar

const MyComponent = props => {
  const noteListBar = useSelector(selector)
  // render
}
```

## Data Structure

### selectedNoteIds: `string[]`

An array of note ID of selected notes on the note list bar.

### actionTargetNoteIds: `string[]`

An array of note ID of target notes for context menu on the note list bar.
