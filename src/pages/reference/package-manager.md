---
index: 180
category: classes
path: /reference/package-manager
title: Package Manager
---

Package manager for coordinating the lifecycle of Inkdrop packages.

An instance of this class is always available as the `inkdrop.packages` global.

Packages can be loaded, activated, and deactivated, and unloaded:

* Loading a package reads and parses the package's metadata and resources such as keymaps, menus, stylesheets, etc.
* Activating a package registers the loaded resources and calls `activate()` on the package's main module.
* Deactivating a package unregisters the package's resources and calls `deactivate()` on the package's main module.
* Unloading a package removes it completely from the package manager.

Packages can be enabled/disabled via the `core.disabledPackages` config settings and also by calling `enablePackage()/disablePackage()`.

## Event Subscription

### ::onDidLoadInitialPackages(callback)

Invoke the given callback when all packages have been loaded.

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidActivateInitialPackages(callback)

Invoke the given callback when all packages have been activated.

| Argument | Description |
| -------- | ----------- |
| `callback()` | Function |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidActivatePackage(callback)

Invoke the given callback when a package is activated.

| Argument | Description |
| -------- | ----------- |
| `callback(package)` | A Function to be invoked when a package is activated. |
| &emsp;`package`     | The [Package](/reference/package) that was activated.

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidDeactivatePackage(callback)

Invoke the given callback when a package is deactivated.

| Argument | Description |
| -------- | ----------- |
| `callback(package)` | A Function to be invoked when a package is deactivated. |
| &emsp;`package`     | The [Package](/reference/package) that was deactivated.

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidLoadPackage(callback)

Invoke the given callback when a package is loaded.

| Argument | Description |
| -------- | ----------- |
| `callback(package)` | A Function to be invoked when a package is loaded. |
| &emsp;`package`     | The [Package](/reference/package) that was loaded.

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.


### ::onDidUnloadPackage(callback)

Invoke the given callback when a package is unloaded.

| Argument | Description |
| -------- | ----------- |
| `callback(package)` | A Function to be invoked when a package is unloaded. |
| &emsp;`package`     | The [Package](/reference/package) that was unloaded.

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

## Package system data

### ::getApmPath()

Get the path to the `ipm` command.

#### Return values

Return a String file path to `ipm`.

### ::getPackageDirPaths()

Get the paths being used to look for packages.

#### Return values

Returns an Array of String directory paths.

## General package data

### ::resolvePackagePath(name)

Resolve the given package name to a path on disk.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Return a String folder path or undefined if it could not be resolved.

### ::isBundledPackage(name)

Is the package with the given name bundled with Inkdrop?

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a Boolean, true if bundled, false if not bundled.

## Enabling and disabling packages

### ::enablePackage(name)

Enable the package with the given name.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns the [Package](/reference/package) that was enabled or null if it isn't loaded.

### ::disablePackage(name)

Disable the package with the given name.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns the [Package](/reference/package) that was disabled or null if it isn't loaded.

### ::isPackageDisabled(name)

Check if the package with the given name disabled.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a Boolean, true if disabled, false if not disabled

## Accessing active packages

### ::getActivePackages()

Get an Array of all the active [Package](/reference/package)s.

### ::getActivePackage(name)

Get the active [Package](/reference/package) with the given name.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a [Package](/reference/package) or undefined.

### ::isPackageActive(name)

Is the [Package](/reference/package) with the given name active?

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a Boolean.

## Accessing loaded packages

### ::getLoadedPackages()

Get an Array of all the loaded [Package](/reference/package)s.


### ::getLoadedPackage(name)

Get the loaded [Package](/reference/package) with the given name.

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a [Package](/reference/package) or undefined.


### ::isPackageLoaded(name)

Is the package with the given name loaded?

| Argument | Description |
| -------- | ----------- |
| `name` | The String package name. |

#### Return values

Returns a Boolean.


## Accessing available packages

### ::getAvailablePackagePaths()

Returns an Array of Strings of all the available package paths.

### ::getAvailablePackageNames()

Returns an Array of Strings of all the available package names.

### ::getAvailablePackageMetadata()

Returns an Array of Strings of all the available package metadata.

