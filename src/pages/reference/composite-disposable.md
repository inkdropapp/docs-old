---
index: 202
category: classes
path: /reference/composite-disposable
title: Composite Disposable
---

An object that aggregates multiple [Disposable](/reference/disposable) instances together into a single disposable, so they can all be disposed as a group.

These are very useful when subscribing to multiple events.

```js
import { CompositeDisposable } from 'event-kit'

class Something {
  constructor() {
    this.disposables = new CompositeDisposable()
    const editor = atom.workspace.getActiveTextEditor()
    this.disposables.add(editor.onDidChange(() => {})
    this.disposables.add(editor.onDidChangePath(() => {})
  }

  destroy() {
    this.disposables.dispose();
  }
}
```

## Construction and Destruction

### ::constructor()

Construct an instance, optionally with one or more disposables.

### ::dispose()

Dispose all disposables added to this composite disposable.

If this object has already been disposed, this method has no effect.

## Managing Disposables

### ::add(...disposables)

Add disposables to be disposed when the composite is disposed.

If this object has already been disposed, this method has no effect.

| Argument         | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| `...disposables` | [Disposable](/reference/disposable) instances or any objects with `.dispose()` methods. |

### ::remove(disposable)

Remove a previously added disposable.

| Argument     | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| `disposable` | [Disposable](/reference/disposable) instance or any object with a `.dispose()` method. |

### ::clear()

Clear all disposables. They will not be disposed by the next call to dispose.
