---
index: 171
category: classes
path: /reference/notification
title: Notification
---

A notification to the user containing a message and type.

## Event Subscription

### ::onDidDismiss(callback)

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function to be called when the notification is dismissed. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidDisplay(callback)

Invoke the given callback when the notification is displayed.

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function to be called when the notification is displayed. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Methods

### ::getType()

#### Return values

Returns the String type.

### ::getMessage()

#### Return values

Returns the String message.

### ::dismiss()

Dismisses the notification, removing it from the UI. Calling this programmatically will call all callbacks added via `onDidDismiss`.
