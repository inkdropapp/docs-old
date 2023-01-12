---
index: 1010
category: data-access
path: /reference/inkdrop-database
title: Inkdrop Database
---

Provides ways to access the local database for managing notes, notebooks, tags and images.

An instance of this class can be got via [`inkdrop.main.dataStore.getLocalDB()`](/reference/data-store#getlocaldb).

## Properties

### notes

An instance of [DBNote](/reference/db-note)

### books

An instance of [DBBook](/reference/db-book)

### tags

An instance of [DBTag](/reference/db-tag)

### files

An instance of [DBFile](/reference/db-file)

### utils

An instance of [DBUtils](/reference/db-utils)

## Event Subscription

### onChange(callback)

Invoke the given callback when the database has been changed.

| Argument           | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `callback(change)` | A Function to be invoked.                                                                             |
| &emsp;`change`     | Object, indicating the [changes feed](https://pouchdb.com/guides/changes.html#understanding-changes). |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onNoteChange(callback)

Invoke the given callback when a note has been added, modified or deleted.

| Argument           | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `callback(change)` | A Function to be invoked.                                                                             |
| &emsp;`change`     | Object, indicating the [changes feed](https://pouchdb.com/guides/changes.html#understanding-changes). |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onBookChange(callback)

Invoke the given callback when a notebook has been added, modified or deleted.

| Argument           | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `callback(change)` | A Function to be invoked.                                                                             |
| &emsp;`change`     | Object, indicating the [changes feed](https://pouchdb.com/guides/changes.html#understanding-changes). |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onTagChange(callback)

Invoke the given callback when a tag has been added, modified or deleted.

| Argument           | Description                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `callback(change)` | A Function to be invoked.                                                                             |
| &emsp;`change`     | Object, indicating the [changes feed](https://pouchdb.com/guides/changes.html#understanding-changes). |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onFullTextIndexBuildStart(callback)

Invoke the given callback when the app started building full-text search index.

| Argument     | Description               |
| ------------ | ------------------------- |
| `callback()` | A Function to be invoked. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onFullTextIndexBuildEnd(callback)

Invoke the given callback when the app finished building full-text search index.

| Argument     | Description               |
| ------------ | ------------------------- |
| `callback()` | A Function to be invoked. |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.

### onFullTextIndexBuildError(callback)

Invoke the given callback when the app failed to build full-text search index.

| Argument          | Description               |
| ----------------- | ------------------------- |
| `callback(error)` | A Function to be invoked. |
| &emsp;`error`     | Error that was occurred.  |

#### Return values

Returns a [Disposable](/reference/disposable) on which `.dispose()` can be called to unsubscribe.
