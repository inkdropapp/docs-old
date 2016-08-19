This store class represents all essential editing state for a note editor.

## Accessing Editor Store Instance

```js
const editorStore = inkdrop.flux.getStore('editor')
const editorState = editorStore.getState()
```

## State Properties

 * `noteId`: A String containing an ID of a note currently editing.
 * `document`: A [Note](/reference/note) Object representing the current note.
 * `changed`: A Boolean indicating the note has been changed since it's opened.
 * `openingNoteId`: A String containing an ID of a note currently being loaded.
 * `viewMode`: A String containing the editor's view mode which can be following values:
   - `preview`
   - `sideBySide`
   - `edit`
 * `lastError`: A Error object indicating a last error occurred during an editor action.

