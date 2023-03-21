---
index: 800
category: flux-state
path: /reference/state-local-config
title: localConfig
---

An [app state](/manual/flux-architecture) of [local config](/reference/config) currently loaded.
To get the `notes` state:

```js
const { config } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { useSelector } from 'react-redux'

const selector = ({ config }) => config

const MyComponent = props => {
  const config = useSelector(selector)
  // render
}
```
