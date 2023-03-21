---
index: 400
category: flux-state
path: /reference/state-db
title: db
---

An [app state](/manual/flux-architecture) of database synchronization.
To get the `notes` state:

```js
const { db } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { useSelector } from 'react-redux'

const selector = ({ db }) => db

const MyComponent = props => {
  const db = useSelector(selector)
  // render
}
```

## Data Structure

### isSyncing: `?boolean`

true if the database is syncing.
`undefined` if it has not ever been synced yet since the app launched.

### lastSyncTime: `?number`

The last datetime when the database finished syncing.
`undefined` if it has not ever been synced yet since the app launched.

### lastSyncError: `Error | null`

The last error ocurred while syncing.
