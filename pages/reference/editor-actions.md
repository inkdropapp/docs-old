This actions class manages all essential editing state for a note editor.
If you're manipulating the state of an editor, use this class.

## Accessing Editor Actions Instance

```js
const editorActions = inkdrop.flux.getActions('editor')
```

## Methods

### `create ()`

Create new note and open it in the editor.

### `open ({ noteId, viewMode, isNew, force })`

Open a note in the editor.

 * `noteId`: A String containing a note ID to open
 * `viewMode`: A String which can be `preview`, `sideBySide` or `edit`. Default: `preview`.
 * `isNew`: A Boolean indicating whether opening note is new. Default: `false`.
 * `force`: A Boolean, `true` to force open a note again even if it's already opened. Default: `false`.


### `close ()`

Close current note.

### `update ({ document, changed })`

Update current note.

 * `document`: A [Note](/reference/note) Object representing the current note to update.
 * `changed`: A Boolean indicating the note has been changed or not.

### `changeViewMode ({ viewMode })`

Change the editor view mode.

  * `viewMode`: A String which can be following values:
    - `preview`
    - `sideBySide`
    - `edit`


### `save ({ document })`

Save current note to the local database.

 * `document`: A [Note](/reference/note) Object representing the current note to save.

