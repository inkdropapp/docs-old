---
index: 40
category: "hacking"
path: "/manual/flux-architecture"
title: "Flux Architecture"
---

Inkdrop uses [Alt](http://alt.js.org/), a slim implementation of Facebook's [Flux Application Architecture](https://facebook.github.io/flux/) to coordinate the movement of data through the application. Flux is extremely well suited for applications that support third-party extension because it emphasizes loose coupling and well defined interfaces between components. It enforces:

 * Uni-directional data flow
 * Loose coupling between components

For more information about the Flux pattern, check out [this diagram](https://facebook.github.io/flux/docs/overview.html#structure-and-data-flow).

You can access a global instance of Alt via `inkdrop.flux`.
There are several core stores in the application:

 * **[EditorStore](/reference/editor-store)** - Manages current editing note document.
 * **NoteListBarStore** - Manages states of the note list bar.
 * **BookListBarStore** - Manages states of the book list bar.
 * **BookListStore** - Manages books currently available.
 * **TagListBarStore** - Manages states of hte tag list bar.
 * **TagListStore** - Manages tags currently available.
 * **SessionStore** - Manages current session status of the user.

## Actions

In Flux applications, views fire Actions, which anyone in the application can subscribe to. Typically, Stores listen to actions to perform business logic and trigger updates to their corresponding views. For example, when you click "Create New Note" button on the top right corner of the note list bar, the React component for the button fires `EditorActions::create`. The `EditorStore` listens to this action and opens a newly created note.

This approach means that your plugins can fire existing Actions, like `EditorActions::update`, or observe actions to add functionality. You can also define your own actions for use within your plugin with `inkdrop.flux`.
