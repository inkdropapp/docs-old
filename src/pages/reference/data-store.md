---
index: 1001
category: classes
path: /reference/data-store
title: Data Store
---

The class in the main process for dealing with database and sync.

An instance of this class is always available as the `inkdrop.main.dataStore` global.

## Properties

### localPouch

An instance of [PouchDB](https://pouchdb.com/) associated with the local database.
If the user is not logged in yet, it is `undefined`.

### local

An instance of [InkdropDatabase](/reference/inkdrop-database)
If the user is not logged in yet, it is `undefined`.

### sync

An instance of InkdropDataSync

## Methods

### getLocalDB()

Returns an instance of [InkdropDatabase](/reference/inkdrop-database).
Throws an error if it's not loaded yet.

### updateFTSIndex()

Triggers updating full-text search index.


