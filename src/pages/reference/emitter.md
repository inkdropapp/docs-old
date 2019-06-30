---
index: 200
category: classes
path: /reference/emitter
title: Emitter
---

Utility class to be used when implementing event-based APIs that allows for handlers registered via `::on` to be invoked with calls to `::emit`.
Instances of this class are intended to be used internally by classes that expose an event-based API.
You can use it by requiring [event-kit](https://github.com/atom/event-kit) module.

For example:

```js
import { Emitter } from 'event-kit'

class User {
  constructor() {
    this.emitter = new Emitter()
  }
 
  onDidChangeName(callback) {
    this.emitter.on('did-change-name', callback)
  }
 
  setName(name) {
    if (name !== this.name) {
      this.name = name
      this.emitter.emit('did-change-name', name)
    }
 
    return this.name
  }
}
```

## Construction and Destruction

### ::constructor()

Construct an emitter.

```js
this.emitter = new Emitter()
```

### ::clear()

Clear out any existing subscribers.

### ::dispose()

Unsubscribe all handlers.

## Event Subscription

### ::on(eventName, handler)

Register the given handler function to be invoked whenever events by the given name are emitted via `::emit`.

| Argument | Description |
| -------- | ----------- |
| `eventName` | String naming the event that you want to invoke the handler when emitted. |
| `handler()` | Function to invoke when `::emit` is called with the given event name. |

#### Return values

Returns a Boolean indicating whether `object` is a valid `Disposable`.

### ::once(eventName, handler)

Register the given handler function to be invoked the next time an events with the given name is emitted via `::emit`.

| Argument | Description |
| -------- | ----------- |
| `eventName` | String naming the event that you want to invoke the handler when emitted. |
| `handler()` | Function to invoke when `::emit` is called with the given event name. |

#### Return values

Returns a Boolean indicating whether `object` is a valid `Disposable`.

### ::preempt(eventName, handler)

Register the given handler function to be invoked *before* all other handlers existing at the time of subscription whenever events by the given name are emitted via `::emit`.

Use this method when you need to be the first to handle a given event. This could be required when a data structure in a parent object needs to be updated before third-party event handlers registered on a child object via a public API are invoked.
Your handler could itself be preempted via subsequent calls to this method, but this can be controlled by keeping methods based on `::preempt` private.

| Argument | Description |
| -------- | ----------- |
| `eventName` | String naming the event that you want to invoke the handler when emitted. |
| `handler()` | Function to invoke when `::emit` is called with the given event name. |

#### Return values

Returns a Boolean indicating whether `object` is a valid `Disposable`.

## Event Emission

### ::emit(eventName, value)

Invoke handlers registered via `::on` for the given event name.

| Argument | Description |
| -------- | ----------- |
| `eventName` | The name of the event to emit. Handlers registered with `::on` for the same name will be invoked. |
| `value` | Callbacks will be invoked with this value as an argument. |

