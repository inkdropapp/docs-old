---
index: 1100
category: data-access
path: /reference/db-note
title: DBNote
---

Provides methods for dealing with notes in the local database.

An instance of this class can be got as following:

```js
const db = inkdrop.main.dataStore.getLocalDB()
const notes = db.notes
```

## Methods

### createId()

Creates new note ID which is String

### validateDocId(docId)

Tests if given `docId` is a valid note ID

| Argument | Description                            |
| -------- | -------------------------------------- |
| `docId`  | String, a document ID to be validated. |

#### Return values

true if valid

### put(doc)

Creates or updates a note. It throws an `InvalidDataError` if the given doc was invalid.

| Argument | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| `doc`    | A [Note](/reference/data-models#a-nameresource-notenotea) data to be put. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "note:9IoGtoCuv",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

Or it will reject with an error if it failed to put.

### get(docId, options)

Retrieves a note

| Argument  | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `docId`   | String, a note ID to retrieve.                                                                |
| `options` | Object, optional. See [PouchDB's documentation](https://pouchdb.com/api.html#fetch_document). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [Note](/reference/data-models#a-nameresource-notenotea) data if successful or will reject if failed to get.

### remove(docId)

Deletes a note with specified note ID

| Argument | Description                  |
| -------- | ---------------------------- |
| `docId`  | String, a note ID to delete. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "note:9IoGtoCuv",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```

Or it will reject with an error if it failed to delete.

### removeBatch(docIds)

Deletes notes with specified note IDs

| Argument | Description                     |
| -------- | ------------------------------- |
| `docIds` | An Array of note IDs to delete. |

#### Return values

An Array of [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "note:9IoGtoCuv",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```

Or it will reject with an error if it failed to delete.

### countAll()

Counts a number of notes

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the number of notes.

### all(options)

Retrieves all notes

| Argument          | Description                                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`         | Object with following keys, optional:                                                                                                                                                                                                               |
| &emsp;sort        | An array of an object indicating the field and order.<br />Ex: `[ { updatedAt: 'asc' } ]`, `[ { title: 'desc' } ]`.<br />Inkdrop supports sorting notes with only one field.<br />Supported fields are: `'title'`, `'updatedAt'` and `'createdAt'`. |
| &emsp;limit       | A number to limit how many notes to fetch. Default: `20`                                                                                                                                                                                            |
| &emsp;skip        | A number of notes to skip at the start of a collection. Default: `0`                                                                                                                                                                                |
| &emsp;includeDocs | A Boolean, whether the return values include doc contents. Default: `true`                                                                                                                                                                          |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a query result.
Example response:

```js
{
  query: {
    index: 'index_notes',
    startkey: ['n', 'u', 0, 0],
    endkey: ['n', 'u', {}, {}],
    descending: false,
    limit: 20
  },
  totalRows: 9357,
  cursor: {
    index: 'index_notes',
    startkey: ['n', 'u', 0, 0],
    endkey: ['n', 'u', {}, {}],
    descending: false,
    limit: 20,
    skip: 20
  },
  includeDocs: true,
  docs: [
    {
      doctype: 'markdown',
      updatedAt: 1461564004766,
      createdAt: 1461563995746,
      bookId: 'book:32b385767dc2',
      status: 'none',
      numOfTasks: 0,
      numOfCheckedTasks: 0,
      title: 'title...',
      body: 'body...',
      _id: 'note:4eeb997c',
      _rev: '8-d18201be3336c70979c6a375b497b3a7'
    },
    ...
  ]
}
```

### findInBook(bookId, options)

Retrieves notes associated with given notebook ID.

| Argument  | Description                                             |
| --------- | ------------------------------------------------------- |
| `bookId`  | A notebook ID to find                                   |
| `options` | An Object, optional. See [::all(options)](#alloptions). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a query result.

See [::all(options)](#alloptions).

### findWithTag(tagId, options)

Retrieves notes associated with given tag ID.

| Argument  | Description                                             |
| --------- | ------------------------------------------------------- |
| `tagId`   | A tag ID to find                                        |
| `options` | An Object, optional. See [::all(options)](#alloptions). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a query result.

See [::all(options)](#alloptions).

### findWithStatus(statue, options)

Retrieves notes with given note status.

| Argument  | Description                                                                                |
| --------- | ------------------------------------------------------------------------------------------ |
| `status`  | A note status, which can be `'none'`, `'active'`, `'onHold'`, `'completed'` or `'dropped'` |
| `options` | An Object, optional. See [::all(options)](#alloptions).                                    |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a query result.

See [::all(options)](#alloptions).
