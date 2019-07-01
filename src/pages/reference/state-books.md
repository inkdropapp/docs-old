---
index: 200
category: redux-store
path: /reference/state-books
title: books
---

An app state of notebooks.
To get the `books` state:

```js
const { books } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ books }) => ({ books }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

### all: `Book[]`

An array of [Book][Book]s.

### hash: `{ [bookId]: Book }`

A map which keys are bookId and values are [Book][Book].

### tree: `BookTree`

An array of [Book][Book]s with tree structure.
A Book which has child notebooks recursively has `children` property.
`children` is the same structure as `tree`: an array of [Book][Book]s.

### lastUpdatedAt: `number`

Last datetime when the state was changed


[Book]: /reference/data-models#a-nameresource-bookbooka
