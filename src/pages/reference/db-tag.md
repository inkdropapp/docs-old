---
index: 1102
category: data-access
path: /reference/db-tag
title: DBTag
---

Provides methods for dealing with tags in the local database.

An instance of this class can be got as following:

```js
const db = inkdrop.main.dataStore.getLocalDB()
const tags = db.tags
```

## Methods

### createId()

Creates new tag ID which is String

### validateDocId(docId)

Tests if given `docId` is a valid tag ID

| Argument | Description                            |
| -------- | -------------------------------------- |
| `docId`  | String, a document ID to be validated. |

#### Return values

true if valid

### put(doc)

Creates or updates a tag. It throws an `InvalidDataError` if the given doc was invalid.

| Argument | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| `doc`    | A [Tag](/reference/data-models#a-nameresource-tagtaga) data to be put. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "tag:9IoGtoCuv",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

Or it will reject with an error if it failed to put.

### get(docId, options)

Retrieves a tag

| Argument  | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `docId`   | String, a tag ID to retrieve.                                                                 |
| `options` | Object, optional. See [PouchDB's documentation](https://pouchdb.com/api.html#fetch_document). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [Tag](/reference/data-models#a-nameresource-tagtaga) data if successful or will reject if failed to get.

### remove(docId)

Deletes a tag with specified tag ID

| Argument | Description                 |
| -------- | --------------------------- |
| `docId`  | String, a tag ID to remove. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "tag:9IoGtoCuv",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```

Or it will reject with an error if it failed to delete.

### countAll()

Counts a number of tags

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the number of tags.

### all()

Retrieves all tags

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an array of [Tag](/reference/data-models#a-nameresource-tagtaga).

Example response:

```js
[
  {
    color: 'teal',
    updatedAt: 1558591583616,
    createdAt: 1558591574807,
    count: 0,
    name: 'Web',
    _id: 'tag:utZx58AKj',
    _rev: '2-f329584c979e7ccce05da55bc24859ac'
  },
  ...
]
```

### findWithName(name)

Retrieves a tag with the given name

| Argument | Description                 |
| -------- | --------------------------- |
| `name`   | String, a tag name to find. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [Tag](/reference/data-models#a-nameresource-tagtaga) data if found or undefined if not found, or will reject if failed to get.
