There are two databases in local and on remote and they sync via HTTP(S).
The remote database provides API compatible with CouchDB. You can access your data in the remote database directly with the API as described in the section of [Accessing Data in the Cloud](/manual/accessing-data-in-the-cloud).
The Inkdrop client app is built on top of a [PouchDB](https://pouchdb.com/) for storing data in local and syncing with the remote database. For many parts of the application, the database is the source of truth. Data is written to the local database first, then synced via the API, and changes to the database trigger Actions, Stores and components to refresh their contents. The illustration below shows this flow of data:

![Data flow](/manual/2-5-accessing-the-database_data-flow.png)

## Accessing the PouchDB instance

Inkdrop is built with [Electron](http://electron.atom.io/), an instance of the PouchDB is living inside [Main Process](https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md#main-process). Electron's [remote module](https://github.com/electron/electron/blob/master/docs/api/remote.md) provides 
 a simple way to do inter-process communication (IPC) between the renderer process (web page) and the main process. Using this IPC, you can access the PocuDB like this:

```js
async function getDatabaseInfo () {
  const { app } = require('electron').remote;
  const info = await app.db.local.info();
  console.log(info.db_name);
}
```

In this code, `app.db.local` is the instance of PouchDB.

<div class="ui info message">
<strong>NOTE</strong>: Returned objects from the database represent <a href="https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects">Remote Objects</a>.
</div>

