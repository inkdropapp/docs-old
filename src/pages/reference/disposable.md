---
index: 201
category: classes
path: /reference/disposable
title: Disposable
---

A handle to a resource that can be disposed.
You can use it by requiring [event-kit](https://github.com/atom/event-kit) module.

```js
import { Disposable } from 'event-kit'
```

## Methods

### .isDisposable(object)

Ensure that `object` correctly implements the `Disposable` contract.

#### Return values

Returns a Boolean indicating whether `object` is a valid `Disposable`.

## Construction and Destruction

### ::constructor(disposalAction)

Construct a Disposable

| Argument           | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `disposalAction()` | A Function to call when `::dispose` is called for the first time. |

### ::dispose()

Perform the disposal action, indicating that the resource associated with this disposable is no longer needed.

You can call this method more than once, but the disposal action will only be performed the first time.
