---
index: 40
category: "hacking"
path: "/manual/flux-architecture"
title: "Flux Architecture"
---

Inkdrop uses [Redux](https://redux.js.org/), an implementation of Facebook's [Flux Application Architecture](https://facebook.github.io/flux/) to coordinate the movement of data through the application. Flux is extremely well suited for applications that support third-party extension because it emphasizes loose coupling and well defined interfaces between components. It enforces:

 * Uni-directional data flow
 * Loose coupling between components

For more information about the Flux pattern, check out [this diagram](https://facebook.github.io/flux/docs/overview.html#structure-and-data-flow).

You can access the app state via `inkdrop.store.getState()`.

## Actions

You can use the internal redux actions like so:

```js
import { actions } from 'inkdrop'

inkdrop.store.dispatch(actions.books.update())
```

