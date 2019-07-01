---
index: 800
category: flux-state
path: /reference/state-local-config
title: localConfig
---

An app state of [local config](/reference/config) currently loaded.
To get the `notes` state:

```js
const { config } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ config }) => ({ config }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

