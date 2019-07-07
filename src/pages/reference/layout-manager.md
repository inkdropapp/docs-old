---
index: 155
category: classes
path: /reference/layout-manager
title: Layout Manager
---

Associates React components with layouts.

You can access a global instance of this class via `inkdrop.layouts`.

## Registering and unregistering a React component

You can register your React component classes to the [component registry](/reference/component-manager).
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

## Event Subscription

### onLayoutChange(name, callback)

Invoke the given callback when the layout with given name is changed.

| Argument | Description |
| -------- | ----------- |
| `callback(components)` | Function to be called when keystrokes match a binding. |
| &emsp;components | An array of component class names that was changed |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Methods

### addComponentToLayout(layoutName, componentClassName)

Adds a component to specified layout

| Argument | Description |
| -------- | ----------- |
| `layoutName` | String, a layout name |
| `componentClassName` | A React class name which is registered in the [component registry](/reference/component-manager). |

### insertComponentToLayoutBefore(layoutName, referenceComponentClassName, componentClassNameToInsert)

Inserts a component before the reference component to specified layout

| Argument | Description |
| -------- | ----------- |
| `layoutName` | String, a layout name |
| `referenceComponentClassName` | A React class name before which `componentClassName` is inserted. |
| `componentClassName` | A React class name which is registered in the [component registry](/reference/component-manager). |

### insertComponentToLayoutAfter(layoutName, referenceComponentClassName, componentClassNameToInsert)

Inserts a component after the reference component to specified layout

| Argument | Description |
| -------- | ----------- |
| `layoutName` | String, a layout name |
| `referenceComponentClassName` | A React class name after which `componentClassName` is inserted. |
| `componentClassName` | A React class name which is registered in the [component registry](/reference/component-manager). |

### getLayout(name)

Returns a set of components of the specified layout

| Argument | Description |
| -------- | ----------- |
| `name` | A name of the layout to get |

#### Return values

An array of component class names

### getLayoutComponents(name)

Returns a set of React component classes of the specified layout

| Argument | Description |
| -------- | ----------- |
| `name` | A name of the layout to get |

#### Return values

An array of React component classes

### indexOfComponentInLayout(layoutName, componentClassName)

Returns the first index at which a given component can be found in the specified layout, or `-1` if cannot found.

| Argument | Description |
| -------- | ----------- |
| `layoutName` | String, a layout name |
| `componentClassName` | A React class name to search. |

#### Return values

Number

### removeComponentFromLayout(layoutName, componentClassName)

Removes a component from specified layout

| Argument | Description |
| -------- | ----------- |
| `layoutName` | String, a layout name |
| `componentClassName` | A React class name which is registered in the [component registry](/reference/component-manager). |

### setLayout(name, components)

Sets a set of components to the specified layout

| Argument | Description |
| -------- | ----------- |
| `name` | A name of the layout to be set |
| `components` | An array of component class names |
