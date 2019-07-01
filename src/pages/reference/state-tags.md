---
index: 1600
category: flux-state
path: /reference/state-tags
title: tags
---

An app state of note tags currently loaded for the sidebar.
To get the `tags` state:

```js
const { tags } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ tags }) => ({ tags }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### all: `Tag[]`

An array of [Tag][Tag]s.

### hash: `{ [tagId]: Tag }`

A map which keys are tagId and values are [Tag][Tag].

### lastUpdatedAt: `number`

Last datetime when the state was changed


[Tag]: /reference/data-models#a-nameresource-tagtaga
