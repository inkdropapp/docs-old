---
index: 200
category: classes
path: /reference/style-manager
title: Style Manager
---

A singleton instance of this class available via `inkdrop.styles`, which you can use to globally query and observe the set of active style sheets.
The `StyleManager` doesn't add any style elements to the DOM on its own, but is instead subscribed to by individual `<inkdrop-styles>` elements, which clone and attach style elements in different contexts.

## Event Subscription

### ::observeStyleElements(callback)

Invoke `callback` for all current and future style elements.

| Argument | Description |
| -------- | ----------- |
| `callback(styleElement)` | Function that is called with style elements. |
| &emsp;`styleElement` | An `HTMLStyleElement` instance. The `.sheet` property will be null because this element isn't attached to the DOM. If you want to attach this element to the DOM, be sure to clone it first by calling `.cloneNode(true)` on it. The style element will also have the following non-standard properties: |
| &emsp;&emsp;`sourcePath` | A String containing the path from which the style element was loaded. |
| &emsp;&emsp;`context`    | A String indicating the target context of the style element. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidAddStyleElement(callback)

Invoke `callback` when a style element is added.

| Argument | Description |
| -------- | ----------- |
| `callback(styleElement)` | Function that is called with style elements. |
| &emsp;`styleElement` | An `HTMLStyleElement` instance. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidRemoveStyleElement(callback)

Invoke `callback` when a style element is removed.

| Argument | Description |
| -------- | ----------- |
| `callback(styleElement)` | Function that is called with style elements. |
| &emsp;`styleElement` | An `HTMLStyleElement` instance. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### ::onDidUpdateStyleElement(callback)

Invoke `callback` when an existing style element is updated.

| Argument | Description |
| -------- | ----------- |
| `callback(styleElement)` | Function that is called with style elements. |
| &emsp;`styleElement` | An `HTMLStyleElement` instance. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Reading Style Elements

### ::getStyleElements()

Get all loaded style elements.

## Paths

### ::getUserStyleSheetPath()

Get the path of the user style sheet in [the config path](http://localhost:8000/manual/basic-usage#user-data-directory).

#### Return values

Returns a String.

