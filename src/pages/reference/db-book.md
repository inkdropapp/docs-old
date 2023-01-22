---
index: 1101
category: data-access
path: /reference/db-book
title: DBBook
---

Provides methods for dealing with notebooks in the local database.

An instance of this class can be got as following:

```js
const db = inkdrop.main.dataStore.getLocalDB()
const books = db.books
```

## Methods

### createId()

Creates new notebook ID which is String

### validateDocId(docId)

Tests if given `docId` is a valid notebook ID

| Argument | Description                            |
| -------- | -------------------------------------- |
| `docId`  | String, a document ID to be validated. |

#### Return values

true if valid

### put(doc)

Creates or updates a notebook. It throws an `InvalidDataError` if the given doc was invalid.

| Argument | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| `doc`    | A [Book](/reference/data-models#a-nameresource-bookbooka) data to be put. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "book:9IoGtoCuv",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

Or it will reject with an error if it failed to put.

### get(docId, options)

Retrieves a notebook

| Argument  | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `docId`   | String, a notebook ID to retrieve.                                                            |
| `options` | Object, optional. See [PouchDB's documentation](https://pouchdb.com/api.html#fetch_document). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [Book](/reference/data-models#a-nameresource-bookbooka) data if successful or will reject if failed to get.

### remove(docId)

Deletes a notebook with specified notebook ID

| Argument | Description                      |
| -------- | -------------------------------- |
| `docId`  | String, a notebook ID to remove. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "book:9IoGtoCuv",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```

Or it will reject with an error if it failed to delete.

### countAll()

Counts a number of notebooks

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the number of notebooks.

### all()

Retrieves all notebooks

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an array of [Book](/reference/data-models#a-nameresource-bookbooka).

Example response:

```js
[
  {
    updatedAt: 1475549348850,
    createdAt: 1475549348850,
    count: 0,
    name: 'Inbox',
    parentBookId: null,
    migratedBy: 'migrateAddingParentBookId',
    _id: 'book:SkTsOceR',
    _rev: '2-aa25f8bfe83cfcd6910fbb78c8e45eeb'
  },
  ...
]
```

### allIds()

Retrieves all notebook IDs.

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an array of notebook IDs.

### findWithName(name)

Retrieves a notebook with the given name

| Argument | Description                      |
| -------- | -------------------------------- |
| `name`   | String, a notebook name to find. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [Book](/reference/data-models#a-nameresource-bookbooka) data if found or undefined if not found, or will reject if failed to get.
