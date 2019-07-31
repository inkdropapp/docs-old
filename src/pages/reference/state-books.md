---
index: 200
category: flux-state
path: /reference/state-books
title: books
---

An [app state](/manual/flux-architecture) of notebooks.
To get the `books` state:

```js
const { books } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from "react-redux"

const connector = connect(
  ({ books }) => ({ books }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### all: `Book[]`

An array of [Book][book]s.

### hash: `{ [bookId]: Book }`

A map which keys are bookId and values are [Book][book].

### tree: `BookTree`

An array of [Book][book]s with tree structure.
A Book which has child notebooks recursively has `children` property.
`children` is the same structure as `tree`: an array of [Book][book]s.

### lastUpdatedAt: `number`

Last datetime when the state was changed

[book]: /reference/data-models#a-nameresource-bookbooka
