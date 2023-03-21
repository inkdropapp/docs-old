---
index: 900
category: flux-state
path: /reference/state-main-layout
title: mainLayout
---

An [app state](/manual/flux-architecture) of main layout currently displayed.
To get the `mainLayout` state:

```js
const { mainLayout } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { useSelector } from 'react-redux'

const selector = ({ mainLayout }) => mainLayout

const MyComponent = props => {
  const mainLayout = useSelector(selector)
  // render
}
```

## Data Structure

### distractionFreeEnabled: `boolean`

true if distraction-free mode is enabled

### sidebarVisible: `boolean`

true if side bar is visible
