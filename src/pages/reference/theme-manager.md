---
index: 190
category: classes
path: /reference/theme-manager
title: Theme Manager
---

Handles loading and activating available themes.

An instance of this class is always available as the `inkdrop.themes` global.

## Event Subscription

### ::onDidChangeActiveThemes(callback)

Invoke `callback` when style sheet changes associated with updating the list of active themes have completed.

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Accessing Loaded Themes

### ::getLoadedThemeNames()

Returns an Array of Strings of all the loaded theme names.

### ::getLoadedThemes()

Returns an Array of all the loaded themes.

## Accessing Active Themes

### ::getActiveThemeNames()

Returns an Array of Strings of all the active theme names.

### ::getActiveThemes()

Returns an Array of all the active themes.

## Managing Enabled Themes

### ::getEnabledThemeNames()

Get the enabled theme names from the config.

#### Return values

Returns an array of theme names in the order that they should be activated.
