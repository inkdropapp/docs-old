---
index: 40
category: "hacking"
toc: false
path: "/manual/flux-architecture"
title: "Getting & Modifying the App State"
---

Inkdrop uses [Redux](https://redux.js.org/), an implementation of Facebook's [Flux Application Architecture](https://facebook.github.io/flux/) to coordinate the movement of data through the application. Flux is extremely well suited for applications that support third-party extension because it emphasizes loose coupling and well defined interfaces between components. It enforces:

 * Uni-directional data flow
 * Loose coupling between components

For more information about the Flux pattern, check out [this diagram](https://facebook.github.io/flux/docs/overview.html#structure-and-data-flow).

You can access the app state via `inkdrop.store.getState()`.

## Actions

You can dispatch the internal actions like so:

```js
import { actions } from 'inkdrop'

inkdrop.store.dispatch(actions.books.update())
```

See [a list of available actions](/reference/actions) in reference.

## States

To get the current app state, for example, you can get [editingNote](/reference/state-editing-note) like so:

```js
const { editingNote } = inkdrop.store.getState()
```

Or, to connect this state with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ editingNote }) => ({ editingNote }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```


See [a list of available states](/reference/states) in reference.
