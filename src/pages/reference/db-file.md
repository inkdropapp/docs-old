---
index: 1103
category: data-access
path: /reference/db-file
title: DBFile
---

Provides methods for dealing with images in the local database.

An instance of this class can be got as following:

```js
const db = inkdrop.main.dataStore.getLocalDB()
const files = db.files
```

Note that it is **not** for attaching generic files like PDFs. Images only.

## Methods

### createId()

Creates new file ID which is String

### validateDocId(docId)

Tests if given `docId` is a valid file ID

| Argument | Description |
| -------- | ----------- |
| `docId` | String, a document ID to be validated.  |

#### Return values

true if valid

### put(doc)

Creates or updates a file. It throws an `InvalidDataError` if the given doc was invalid.

| Argument | Description |
| -------- | ----------- |
| `doc` | A [File](/reference/data-models#a-nameresource-filefilea) data to be put. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "file:9IoGtoCuv",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

Or it will reject with an error if it failed to put.

### get(docId, options)

Retrieves a file

| Argument | Description |
| -------- | ----------- |
| `docId` | String, a file ID to retrieve. |
| `options` | Object, optional. See [PouchDB's documentation](https://pouchdb.com/api.html#fetch_document). |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a [File](/reference/data-models#a-nameresource-filefilea) data if successful or will reject if failed to get.

### remove(docId)

Deletes a file with specified file ID

| Argument | Description |
| -------- | ----------- |
| `docId` | String, a file ID to remove. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an object like following:

```js
{
  "ok": true,
  "id": "file:9IoGtoCuv",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```

Or it will reject with an error if it failed to delete.

### countAll()

Counts a number of files

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the number of files.

### all()

Retrieves all files

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with an array of [File](/reference/data-models#a-nameresource-filefilea).

Example response:

```js
[
  {
    createdAt: 1537774057842,
    name: 'IMG_1004 copy.JPG',
    contentType: 'image/jpeg',
    contentLength: 40020,
    md5digest: '9e00f2a9242499ccd3c47dbfa802d548',
    revpos: 1,
    _attachments: {
      index: {
        digest: 'md5-ngDyqSQkmczTxH2/qALVSA==',
        content_type: 'image/jpeg',
        revpos: 1,
        data: '...(base64)...'
      }
    }
  },
  ...
]
```

