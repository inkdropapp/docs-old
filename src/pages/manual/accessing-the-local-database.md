---
index: 50
category: "hacking"
toc: false
path: "/manual/accessing-the-local-database"
title: "Accessing the Local Database"
---

There are two databases in local and on remote and they sync via HTTP(S).
The Inkdrop client app is built on top of a [PouchDB](https://pouchdb.com/) for storing data in local and syncing with the remote database. For many parts of the application, the database is the source of truth.
Data is written to the local database first, then synced with the remote database, and changes to the database trigger [Actions, Stores](/manual/flux-architecture) and components to refresh their contents. The illustration below shows this flow of data:

![Data flow](./accessing-the-local-database_data-flow.png)

## Accessing the data from plugins (Recommended)

There is a class called [InkdropDatabase](/reference/inkdrop-database) which wraps PouchDB and provides a bunch of useful methods that help you access the local database for managing notes, notebooks, tags and images.

For example, below code gets a note data directly from the local database:

```js
const db = inkdrop.main.dataStore.getLocalDB()

// Get a note data by note ID
const note = await db.notes.get('note:F8xUp-23G')

// Get all notebooks
const books = await db.books.all()

// Get notes in a notebook
const notesInBook = await db.notes.findInBook(books[0]._id)
```

## Accessing the PouchDB instance (Advanced)

There is a global variables named [`inkdrop`](/reference/environment) which allows you to access the internal objects of Inkdrop.
It has [`main`](/reference/inkdrop-application) property, which is a reference to the inkdrop instance in the main process.
To access the local PouchDB instance in the main process:

```js
async function getDatabaseInfo () {
  const db = inkdrop.main.dataStore.localPouch;
  const info = await db.info();
  console.log(info.db_name);
}
```

In this code, `localPouch` is the instance of PouchDB.
*Be careful, you could break your database* by accessing it with PouchDB since its API does not protect you from breaking it.
Use it only if [InkdropDatabase](/reference/inkdrop-database) does not provide what you would do.

<div class="ui info message">
<strong>NOTE</strong>: Returned objects from the database represent <a href="https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects">Remote Objects</a>.
</div>

