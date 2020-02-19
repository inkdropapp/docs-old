---
index: 170
category: classes
path: /reference/notification-manager
title: Notification Manager
---

A notification manager used to create [Notification](/reference/notification)s to be shown to the user.

An instance of this class is always available as the `inkdrop.notifications` global.

## Events

### ::onDidAddNotification(callback)

Invoke the given callback after a notification has been added.

| Argument                 | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `callback(notification)` | Function to be called after the notification is added.      |
| &emsp;notification       | The [Notification](/reference/notification) that was added. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidClearNotifications(callback)

Invoke the given callback after the notifications have been cleared.

| Argument     | Description                                              |
| ------------ | -------------------------------------------------------- |
| `callback()` | Function to be called after the notification is cleared. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Adding Notifications

### ::addSuccess(message, [options])

Add a success notification.

| Argument           | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `message`          | A String message                                                                                  |
| `options`          | An options Object with the following keys:                                                        |
| &emsp;.dismissable | A Boolean indicating whether this notification can be dismissed by the user. Defaults to `false`. |
| &emsp;.detail      | A string containing a longer description about the notification.                                  |

#### Return values

Returns the [Notification](/reference/notification) that was added.

### ::addInfo(message, [options])

Add an informational notification. See [::addSuccess](#addsuccessmessage-options) for arguments.

### ::addWarning(message, [options])

Add a warning notification. See [::addSuccess](#addsuccessmessage-options) for arguments.

### ::addError(message, [options])

Add an error notification. See [::addSuccess](#addsuccessmessage-options) for arguments.

### ::addFatalError(message, [options])

Add a fatal error notification. See [::addSuccess](#addsuccessmessage-options) for arguments.

## Getting Notifications

### ::getNotifications()

Get all the notifications.

#### Return values

Returns an Array of [Notification](/reference/notification)s.
