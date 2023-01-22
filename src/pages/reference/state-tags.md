---
index: 1600
category: flux-state
path: /reference/state-tags
title: tags
---

An [app state](/manual/flux-architecture) of note tags currently loaded for the sidebar.
To get the `tags` state:

```js
const { tags } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ tags }) => ({ tags }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### all: `Tag[]`

An array of [Tag][tag]s.

### hash: `{ [tagId]: Tag }`

A map which keys are tagId and values are [Tag][tag].

### lastUpdatedAt: `number`

Last datetime when the state was changed

[tag]: /reference/data-models#a-nameresource-tagtaga
