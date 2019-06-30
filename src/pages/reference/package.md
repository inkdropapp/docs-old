---
index: 181
category: classes
path: /reference/package
title: Package
---

Loads and activates a package's main module and resources such as stylesheets, keymaps, and menus.

## Event Subscription

### ::onDidDeactivate(callback)

Invoke the given callback when all packages have been deactivated.

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function |

### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Native Module Compatibility

### ::isCompatible()

Are all native modules depended on by this package correctly compiled against the current version of Inkdrop?

Incompatible packages cannot be activated.

#### Return values

Returns a Boolean, true if compatible, false if incompatible.

