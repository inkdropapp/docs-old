---
index: 50
category: "hacking"
toc: true
path: "/manual/accessing-the-local-database"
title: "Accessing the Local Database"
---

There are two databases in local and on remote and they sync via HTTP(S).
The Inkdrop client app is built on top of a [PouchDB](https://pouchdb.com/) for storing data in local and syncing with the remote database. For many parts of the application, the database is the source of truth.
Data is written to the local database first, then synced with the remote database, and changes to the database trigger [Actions, Stores](/manual/flux-architecture) and components to refresh their contents. The illustration below shows this flow of data:

![Data flow](./accessing-the-local-database_data-flow.png)

## Accessing the data from plugins (Recommended)

There is a class called [InkdropDatabase](/reference/inkdrop-database) which wraps PouchDB and provides a bunch of useful methods that help you access the local database for managing notes, notebooks, tags and images.

For example, below code gets data directly from the local database:

```js
const db = inkdrop.main.dataStore.getLocalDB()

// Get a note data by note ID
const note = await db.notes.get("note:F8xUp-23G")

// Get all notebooks
const books = await db.books.all()

// Get notes in a notebook
const notesInBook = await db.notes.findInBook(books[0]._id)

// Search notes with keywords
const result = await db.utils.search("Foobar")
const { docs } = result
console.log("Search result:", docs)
```

<div class="ui info message">
<strong>NOTE</strong>: Returned objects from the database represent <a href="https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects">Remote Objects</a>.
</div>

## Accessing the PouchDB instance (Advanced)

There is a global variables named [`inkdrop`](/reference/environment) which allows you to access the internal objects of Inkdrop.
It has [`main`](/reference/inkdrop-application) property, which is a reference to the inkdrop instance in the main process.
To access the local PouchDB instance in the main process:

```js
async function getDatabaseInfo() {
  const db = inkdrop.main.dataStore.localPouch
  const info = await db.info()
  console.log(info.db_name)
}
```

In this code, `localPouch` is the instance of PouchDB.
_Be careful, you could break your database_ by accessing it with PouchDB since its API does not protect you from breaking it.
Use it only if [InkdropDatabase](/reference/inkdrop-database) does not provide what you would do.

<div class="ui info message">
<strong>NOTE</strong>: Returned objects from the database represent <a href="https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects">Remote Objects</a>.
</div>

## Accessing via HTTP (Advanced)

The Inkdrop client app can open a simple HTTP server so that you can access the data from an external program easily, which gives you a flexible ability to import/export your notes.

You can configure the HTTP server settings by editing `config.cson` in [the user data directory](/manual/basic-usage/#user-data-directory).

Quit Inkdrop before you edit it like so:

```yaml
"*":
  core:
    server:
      enabled: true
      port: 19840
      bindAddress: "127.0.0.1"
      auth:
        username: "foo"
        password: "bar"
```

Then, launch the app.

### Configurations

- `core.server.enabled` - Specify `true` to enable the HTTP server. Default is `false`.
- `core.server.port` - Defines the port number to listen. Default is `19840`.
- `core.server.bindAddress` - Defines the IP address to listen. Default is `127.0.0.1`.
- `core.server.auth.{username,password}` - Defines Basic auth credentials.

### API reference

#### GET `/`

Accessing the root of a HTTP server returns meta information about the app.

#### GET `/notes`

Returns a list of all the [Notes](/reference/data-models#a-nameresource-notenotea) in the local database.

##### Query parameters

All parameters are optional.

- `keyword` (string) – The search keyword to filter notes. You can use [the same qualifiers for searching notes](/manual/searching-notes/#filter-notes-with-special-qualifiers).
- `limit` (number) – Limit the number of the returned documents to the specified number.
- `skip` (number) – Skip this number of documents before starting to return the results. Default is `0`.
- `sort` (string) – Sort the documents by the specified field. One of: `'updatedAt' | 'createdAt' | 'title'`.
- `descending` (boolean) - Reverse the order of the output documents.

##### Example

Request:

```
GET /notes/?limit=1 HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
[
  {
    "doctype": "markdown",
    "bookId": "book:tjnPbJakw",
    "createdAt": 1589165355584,
    "updatedAt": 1592532006000,
    "status": "active",
    "share": "private",
    "numOfTasks": 0,
    "numOfCheckedTasks": 0,
    "pinned": true,
    "title": "hello",
    "body": "example note",
    "tags": ["tag:HyBgJ94gx", "tag:h11OMPbSs"],
    "_id": "note:BKzzd8iGK",
    "_rev": "19-d882f96ee27f7b9f71f6183b0cab9193"
  }
]
```

#### POST `/notes`

The POST method creates a new [Note](/reference/data-models#a-nameresource-notenotea) document, or creates a new revision of the existing document.
The document ID `_id` is optional and will be automatically generated.

##### Response JSON Object

- `id` (string) – Document ID
- `ok` (boolean) – Operation status
- `rev` (string) – Revision MVCC token

##### Example

Request:

```
POST /notes/ HTTP/1.1
Host: localhost:19840
Content-Type: application/json
Authorization: Basic Zm9vOmJhcg==

{
  "doctype": "markdown",
  "bookId": "book:tjnPbJakw",
  "status": "active",
  "share": "private",
  "title": "hello",
  "body": "example note",
  "tags": ["tag:HyBgJ94gx", "tag:h11OMPbSs"]
}
```

Response:

```json
{
  "ok": true,
  "id": "note:BKzzd8iGK",
  "rev": "1-d882f96ee27f7b9f71f6183b0cab9193"
}
```

#### GET `/books`

Returns a list of all the [Books](/reference/data-models#a-nameresource-bookbooka) in the local database.

##### Query parameters

- limit (number) – Limit the number of the returned documents to the specified number.
- skip (number) – Skip this number of documents before starting to return the results. Default is `0`.

##### Example

Request:

```
GET /books HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
[
  {
    "parentBookId": "book:Bk5Ivk0T",
    "updatedAt": 1598593031080,
    "createdAt": 1598593007103,
    "name": "Desktop app",
    "_id": "book:0cFae6lCc",
    "_rev": "2-7f29bee428d16b6f5a05ece8abf7f571"
  },
  ...
]
```

#### POST `/books`

The POST method creates a new [Book](/reference/data-models#a-nameresource-bookbooka) document, or creates a new revision of the existing document.
The document ID `_id` is optional and will be automatically generated.

##### Response JSON Object

- `id` (string) – Document ID
- `ok` (boolean) – Operation status
- `rev` (string) – Revision MVCC token

##### Example

Request:

```
POST /books/ HTTP/1.1
Host: localhost:19840
Content-Type: application/json
Authorization: Basic Zm9vOmJhcg==

{
  "name": "New notebook"
}
```

Response:

```json
{
  "ok": true,
  "id": "book:Bk5Ivk0T",
  "rev": "1-7f29bee428d16b6f5a05ece8abf7f571"
}
```

#### GET `/tags`

Returns a list of all the [Tags](/reference/data-models#a-nameresource-tagtaga) in the local database.

##### Query parameters

- limit (number) – Limit the number of the returned documents to the specified number.
- skip (number) – Skip this number of documents before starting to return the results. Default is `0`.

##### Example

Request:

```
GET /tags HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
[
  {
    "count": 4,
    "color": "orange",
    "createdAt": 1489212448648,
    "updatedAt": 1607068381327,
    "name": "Lifehack",
    "_id": "tag:h11OMPbSs",
    "_rev": "3-bceb5835af6be6ae277762a877b884d1"
  },
  ...
]
```

#### POST `/tags`

The POST method creates a new [Tag](/reference/data-models#a-nameresource-tagtaga) document, or creates a new revision of the existing document.
The document ID `_id` is optional and will be automatically generated.

##### Response JSON Object

- `id` (string) – Document ID
- `ok` (boolean) – Operation status
- `rev` (string) – Revision MVCC token

##### Example

Request:

```
POST /tags/ HTTP/1.1
Host: localhost:19840
Content-Type: application/json
Authorization: Basic Zm9vOmJhcg==

{
  "color": "red",
  "name": "Important"
}
```

Response:

```json
{
  "ok": true,
  "id": "tag:HyBgJ94gx",
  "rev": "1-e5ad1c150a30e1ad5a781755466b19a1"
}
```

#### GET `/files`

Returns a list of all the [Files](/reference/data-models#a-nameresource-filefilea) in the local database.

##### Query parameters

- limit (number) – Limit the number of the returned documents to the specified number.
- skip (number) – Skip this number of documents before starting to return the results. Default is `0`.

##### Example

Request:

```
GET /files?limit=1 HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
[
  {
    "name": "dog.png",
    "createdAt": 1613887605720,
    "contentType": "image/png",
    "contentLength": 10389,
    "publicIn": [],
    "_attachments": {
      "index": {
        "digest": "md5-if+yj7slT2E8u2JG7ee3yw==",
        "content_type": "image/png",
        "revpos": 5,
        "data": "iVBORw0K...AElFTkSuQmCC"
      }
    },
    "_id": "file:-dKJeWShi",
    "_rev": "5-541c58ffdbec966840709683c658c7dc"
  }
]
```

#### POST `/files`

The POST method creates a new [File](/reference/data-models#a-nameresource-filefilea) document, or creates a new revision of the existing document.
The document ID `_id` is optional and will be automatically generated.

##### Response JSON Object

- `id` (string) – Document ID
- `ok` (boolean) – Operation status
- `rev` (string) – Revision MVCC token

##### Example

Request:

```
POST /tags/ HTTP/1.1
Host: localhost:19840
Content-Type: application/json
Authorization: Basic Zm9vOmJhcg==

{
  "name": "dog.png",
  "contentType": "image/png",
  "contentLength": 10389,
  "publicIn": [],
  "_attachments": {
    "index": {
      "content_type": "image/png",
      "data": "iVBORw0K...AElFTkSuQmCC"
    }
  }
}
```

Response:

```json
{
  "ok": true,
  "id": "file:HyBgJ94gx",
  "rev": "1-e5ad1c150a30e1ad5a781755466b19a1"
}
```

#### GET `/{docid}`

Returns document by the specified `docid` of Note, Book, Tag, or File.

##### Query parameters

All parameters are optional.

- `rev` (string) – Fetch specific revision of a document. Defailts to the latest revision.
- `attachments` (boolean) – Include attachment data. It should be `true` if you fetch a content of the file document.

##### Example

Request:

```
GET /note:BKzzd8iGK HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
{
  "doctype": "markdown",
  "bookId": "book:tjnPbJakw",
  "createdAt": 1589165355584,
  "updatedAt": 1592532006000,
  "status": "active",
  "share": "private",
  "numOfTasks": 0,
  "numOfCheckedTasks": 0,
  "pinned": true,
  "title": "hello",
  "body": "example note",
  "tags": ["tag:HyBgJ94gx", "tag:h11OMPbSs"],
  "_id": "note:BKzzd8iGK",
  "_rev": "19-d882f96ee27f7b9f71f6183b0cab9193"
}
```

#### DELETE `/{docid}`

Deletes document by the specified `docid` of Note, Book, Tag, or File.

##### Example

Request:

```
DELETE /note:BKzzd8iGK HTTP/1.1
Host: localhost:19840
Authorization: Basic Zm9vOmJhcg==
```

Response:

```json
{
  "ok": true,
  "id": "note:BKzzd8iGK",
  "rev": "2-e5ad1c150a30e1ad5a781755466b19a1"
}
```
