---
index: 1104
category: data-access
path: /reference/db-utils
title: DBUtils
---

Provides convenient methods for managing documents in the local database.

An instance of this class can be got as following:

```js
const db = inkdrop.main.dataStore.getLocalDB()
const utils = db.utils
```

## Methods

### search(keyword, options)

Retrieves notes which match given keyword.

| Argument | Description |
| -------- | ----------- |
| `keyword` | String, a keyword. The syntax is described [here](/manual/searching-notes). |
| `options` | Object with following keys, optional:  |
| &emsp;sort | An array of an object indicating the field and order.<br />Ex: `[ { updatedAt: 'asc' } ]`, `[ { title: 'desc' } ]`.<br />Inkdrop supports sorting notes with only one field.<br />Supported fields are: `'title'`, `'updatedAt'` and `'createdAt'`. |
| &emsp;limit | A number to limit how many notes to fetch. Default: `20` |
| &emsp;skip | A number of notes to skip at the start of a collection. Default: `0` |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with a query result.
Example response:

```js
{
  query: {
    index: 'fts',
    conditions: [
      {
        type: 'keyword',
        term: 'foobar',
        phrase: false,
        exclude: false
      }
    ]
  },
  cursor: {
    index: 'fts',
    conditions: [
      {
        type: 'keyword',
        term: 'hoge',
        phrase: false,
        exclude: false
      }
    ],
    limit: 20,
    skip: 20
  }
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


### countNotesWithTag(tagId)

Counts number of notes which are associated with specified tag ID

| Argument | Description |
| -------- | ----------- |
| `tagId` | String, a tag ID.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the number of notes with specified tag ID.

### deleteTag(tagId)

Deletes a tag with given ID and removes it from associated notes.

| Argument | Description |
| -------- | ----------- |
| `tagId` | String, a tag ID to delete.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to delete the tag.

### moveNoteToBook(noteId, moveToBookId)

Moves a note to a notebook

| Argument | Description |
| -------- | ----------- |
| `noteId` | String, a note ID to move.  |
| `moveToBookId` | String, a destination notebook ID where the note is moved.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to move the note.

### moveNoteToBookBatch(noteIds, moveToBookId)

Moves notes to a notebook

| Argument | Description |
| -------- | ----------- |
| `noteIds` | Array, a list of note IDs to move.  |
| `moveToBookId` | String, a destination notebook ID where the notes are moved.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to move the notes.

### duplicateNote(noteId)

Duplicates a note with given ID.
A duplicated note will have new values with `_id`, `createdAt`, `updatedAt` and `_rev` fields.

| Argument | Description |
| -------- | ----------- |
| `noteId` | String, a note ID to duplicate.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which resolves a duplicated note.

### duplicateNoteBatch(noteIds)

Duplicates notes with given IDs.
Duplicated notes will have new values with `_id`, `createdAt`, `updatedAt` and `_rev` fields.

| Argument | Description |
| -------- | ----------- |
| `noteIds` | Array, a list of note IDs to duplicate.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which resolves duplicated notes.

### moveNotesToTrashOrDelete(noteIds)

Moves given notes to trash or deletes permanently if they were already in trash.

| Argument | Description |
| -------- | ----------- |
| `noteIds` | Array, a list of note IDs to move to trash or delete.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which rejects if failed to perform any of operations.

### emptyTrash()

Delete notes in trash permanently.

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which rejects if failed to empty trash.

### setTagsBatch(noteIds, tags)

Sets given tags to notes with specified IDs.

| Argument | Description |
| -------- | ----------- |
| `noteIds` | Array, a list of IDs of notes to be set.  |
| `tags` | Array of String, a list of tag IDs to set.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which resolves an Array of updated [Note](/reference/data-models#a-nameresource-notenotea)s.

### setStatusBatch(noteIds, status)

Sets specified note status to notes with given IDs.

| Argument | Description |
| -------- | ----------- |
| `noteIds` | Array, a list of IDs of notes to be set.  |
| `status` | String, a note status which can be `'none'`, `'active'`, `'onHold'`, `'completed'` or `'dropped'`.  |

### moveBook(bookId, newParentBookId)

Sets a notebook with specified ID as a child of a notebook.

| Argument | Description |
| -------- | ----------- |
| `bookId` | String, a notebook ID to move.  |
| `newParentBookId` | String or `null`. a notebook ID of new parent notebook. Specifying `null` moves the notebook to the root. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which resolves the updated [Book](/reference/data-models#a-nameresource-bookbooka).

### deleteBook(bookId)

Deletes a notebook with given ID and moves notes associated with it into trash.

| Argument | Description |
| -------- | ----------- |
| `bookId` | String, a notebook ID to delete.  |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### getBufferFromFile(fileId)

Loads an image file as [Buffer](https://nodejs.org/api/buffer.html#buffer_buffer).

| Argument | Description |
| -------- | ----------- |
| `fileId` | String, a file ID to load.  |


#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
which resolves a content of the image file.

