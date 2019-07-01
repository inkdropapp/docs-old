---
index: 111
category: classes
path: /reference/component-manager
title: Component Manager
---

Provides a registry for React components that you'd like to display on layouts.

An instance of this class is always available as the `inkdrop.components` global.

## Registering and unregistering a React component

You can register your React component classes to the component registry.
Then, the registered components can be added to layouts.
Below example registers `MyDialog` class to the component registry and adds it to `modal` layout so that you can show it as a modal view.

```js
module.exports = {
  activate() {
    inkdrop.components.registerClass(MyDialog)
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'MyDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'MyDialog'
    )
    inkdrop.components.deleteClass(MyDialog)
  }
}
```

This is described in detail in the [Word Count plugin](/manual/plugin-word-count#developing-our-plugin) walkthrough.

Available layouts can be found [here](/reference/state-layouts).

## Methods

### registerClass(klass, ?klassName)

Registers a given React component class to the component registry.

| Argument | Description |
| -------- | ----------- |
| `klass` | A React component class to be added. |
| `klassName` | (optional) A custom class name. It is necessary if the given component is HOC. |

### deleteClass(klass, ?klassName)

Unregisters a given React component class from the component registry.

| Argument | Description |
| -------- | ----------- |
| `klass` | A React component class to be removed. |
| `klassName` | (optional) A custom class name. It is necessary if the given component is HOC. |

### getComponentClass(klassName)

Returns a React component that has a given class name.

| Argument | Description |
| -------- | ----------- |
| `klassName` | A component class name to get. |

#### Return values

A React component class that matched the given class name, or undefined if not found.
