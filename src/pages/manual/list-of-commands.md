---
index: 80
category: "hacking"
toc: false
path: "/manual/list-of-commands"
title: "List of Commands"
---

Inkdrop provides a bunch of commands to allow you to associate arbitrary interactions with the features.
You can bind them with [keystrokes](/reference/keymap-manager), [menu](/reference/menu-manager) and [context menu](/reference/context-menu-manager) from [plugins](/manual/plugin-word-count), [the init file](/manual/the-init-file) or [keymap config file](/manual/customizing-keybindings).
Note that some commands like `core:open-note` require parameters so you have to invoke them programmatically with [CommandRegistry](/reference/command-registry) like so:

```js
inkdrop.commands.dispatch(document.body, "core:open-note", {
  noteId: "note:uugSvPq5r",
})
```

## Table of Contents

- [Application commands](#application-commands)
- [Core commands](#core-commands)
- [Editor commands](#editor-commands)
- [Export commands](#export-commands)
- [Import commands](#import-commands)
- [View commands](#view-commands)
- [Window commands](#window-commands)

## Application commands

Special commands that run in the main process to control the Inkdrop app.
To invoke them, do like so:

```js
import { ipcRenderer } from "electron"
ipcRenderer.send("command", "application:about", {})
```

### application:about

Shows a dialog about Inkdrop.

### application:bring-all-windows-to-front

- macOS only

Arranges windows listed in the Window menu in front of all other windows

### application:hide

- macOS only

Hides Inkdrop windows

### application:hide-other-applications

- macOS only

Hides all apps, except Inkdrop

### application:inspect

Shows a Developer Tools and inspects an element

### application:logout

Logs out from the currently authenticated account

### application:minimize

- macOS only

Minimizes Inkdrop application

### application:open-preferences

Opens up the preference window

### application:open-website

Opens up the Inkdrop website

### application:quit

Quits the app

### application:report-issue

Opens up the Inkdrop forum

### application:show-credits

Opens up the list of software licenses

### application:show-and-focus-main-window

Show and focus Inkdrop main window

### application:toggle-main-window

Toggle Inkdrop main window

### application:unhide-all-applications

- macOS only

Unhides all apps, including Inkdrop.

### application:view-help

Opens up the documentation website

### application:zoom

- macOS only

Toggles the size and location of the window between its standard state and its user state

## Core commands

### core:copy

- Selector: `body`

Copy the selected text to clipboard

### core:copy-image

- Selector: `body`

Copy the target element's image to clipboard

### core:copy-note-link

- Selector: `body`

Copy links to notes as Markdown links. By default, copy currently selected on the note list.

| Argument | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `noteId` | (Optional) A String or An Array. The ID(s) of the note(s) to process. |

### core:cut

- Selector: `body`

Delete the selected text and copy it to clipboard

### core:delete-note

- Selector: `body`

Move notes currently selected on the note list to trash.
If the notes are already in trash, they will be permanently deleted.

### core:delete-notebook

<div class="ui warning message">It's a private command for now</div>

### core:delete-tag

<div class="ui warning message">It's a private command for now</div>

### core:duplicate-note

- Selector: `body`

Duplicates notes currently selected on the note list

### core:emphasize

- Selector: `.mde-cm-wrapper`

Emphersize currently selected text

### core:empty-trash

- Selector: `body`

Empties trash

### core:filter-notes

- Selector: `body`

Filters current note list items with given keywords

| Argument  | Description             |
| --------- | ----------------------- |
| `keyword` | The keywords to filter. |

### core:filter-by-tag

- Selector: `body`

Adds a filter condition with specified tag

| Argument | Description                     |
| -------- | ------------------------------- |
| `tagId`  | The ID of the tag to filter by. |

### core:find

- Selector: `body`

Moves focus to the search bar

### core:find-clear

- Selector: `body`

Clears the search bar text

### core:find-global

- Selector: `body`

Moves focus to the search bar and switch the [search scope to global](/manual/searching-notes#local--global-search-scope).

### core:focus-next

- Selector: `body`

Moves focus to the next focussable UI component

### core:focus-note-list-bar

- Selector: `body`

Moves focus to the note list bar

### core:focus-previous

- Selector: `body`

Moves focus to the previous focussable UI component

### core:indent

- Selector: `.mde-cm-wrapper`

Indents the selected line(s)

### core:insert-code-block

- Selector: `.mde-cm-wrapper`

Inserts a code block

### core:insert-horizontal-rule

- Selector: `.mde-cm-wrapper`

Inserts a horizontal rule: `* * *`

### core:insert-link

- Selector: `.mde-cm-wrapper`

Inserts a link

### core:move-notebook

<div class="ui warning message">It's a private command for now</div>

### core:move-to-notebook

<div class="ui warning message">It's a private command for now</div>

### core:navigate-back

- Selector: `body`

Moves backward through the note open history

### core:navigate-forward

- Selector: `body`

Moves forward through the note open history

### core:new-note

- Selector: `body`

Creates a new note and open it in the editor

### core:new-notebook

- Selector: `body`

Shows up a dialog for creating a new notebook

### core:note-list-show-all-notes

- Selector: `body`

Lists all notes on the note list bar

| Argument          | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `selectFirstNote` | A Boolean, whether select the first note or not. Default: `true` |

### core:note-list-show-notes-in-book

- Selector: `body`

List notes in specified notebook on the note list bar

| Argument          | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `bookId`          | The notebook ID                                                  |
| `tagId`           | The tag ID to filter items                                       |
| `selectFirstNote` | A Boolean, whether select the first note or not. Default: `true` |

### core:note-list-show-notes-with-tag

- Selector: `body`

List notes with specified tag on the note list bar

| Argument          | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `tagId`           | The tag ID                                                       |
| `selectFirstNote` | A Boolean, whether select the first note or not. Default: `true` |

### core:note-list-show-notes-with-status

- Selector: `body`

List notes with specified [note status](/manual/managing-tasks-with-status) on the note list bar

| Argument          | Description                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `status`          | The note status which should be **one of:**`"none"` or `"active"` or `"onHold"` or `"completed"` or `"dropped"` |
| `selectFirstNote` | A Boolean, whether select the first note or not. Default: `true`                                                |

### core:note-list-show-notes-in-book-of-editing-note

- Selector: `body`

List notes in a notebook of the currently editing note on the note list bar

### core:note-tags-bar-item-list-unselect

- Selector: `.note-tags-bar-item-list`

Unselect items on the note tags bar

### core:note-tags-bar-item-list-select-prev

- Selector: `.note-tags-bar-item-list`

Select the previous item on the note tags bar

### core:note-tags-bar-item-list-select-next

- Selector: `.note-tags-bar-item-list`

Select the next item on the note tags bar

### core:note-tags-bar-item-list-select-remove-item-before

- Selector: `.note-tags-bar-item-list`

Remove the selected item and select its previous item on the note tags bar

### core:note-tags-bar-item-list-select-remove-item

- Selector: `.note-tags-bar-item-list`

Remove the target item on the note tags bar

| Argument | Description                     |
| -------- | ------------------------------- |
| `tagId`  | (Optional) The tag ID to remove |

### core:open-first-note

- Selector: `body`

Opens the first note of the note list bar in the editor

### core:open-next-note

- Selector: `body`

Opens the next note of currently selected note on the note list bar.

### core:close-note

- Selector: `body`

Closes the currently editing note

### core:open-note

- Selector: `body`

Opens a note with specified note ID

| Argument              | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `noteId`              | The ID of the note to open.                                 |
| `selectInNoteListBar` | Whether to select the correspond note in the note list bar. |
| `pushState`           | Remember it in the navigation history.                      |
| `newWindow`           | Whether to open the note in a separate window.              |

### core:open-note-in-separate-window

- Selector: `body`

Opens notes in separate windows. By default, opens notes selected on the note list bar.

| Argument | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| `noteId` | (Optional) A String or An Array. The ID(s) of the note(s) to open. |

### core:open-prev-note

- Selector: `body`

Opens the previous note of currently selected note on the note list bar.

### core:open-tag-settings

- Selector: `body`

Opens up the settings window for the tag with specified ID.

| Argument | Description               |
| -------- | ------------------------- |
| `tagId`  | The ID of the tag to set. |

### core:paste

- Selector: `body`

Pastes a text from clipboard

### core:redo

- Selector: `body`

Redoes the last undone change.

### core:rename-notebook

<div class="ui warning message">It's a private command for now</div>

### core:save-image

- Selector: `body`

Saves the target element's image to disk

### core:save-note

- Selector: `body`

Saves the currently editing note to the local database

### core:select-all

- Selector: `body`

Select all text

### core:search-notes

- Selector: `body`

Search notes globally with given keywords

| Argument  | Description             |
| --------- | ----------------------- |
| `keyword` | The keywords to search. |

### core:share-note

- Selector: `body`

Shows up a dialog for sharing note with specified ID

| Argument | Description                      |
| -------- | -------------------------------- |
| `noteId` | The ID of the note to be shared. |

### core:show-note-revisions

- Selector: `body`

Shows up a dialog for viewing note change history with specified ID

| Argument | Description                                      |
| -------- | ------------------------------------------------ |
| `noteId` | The ID of the note to view its revision history. |

### core:sidebar-focus

- Selector: `body`

Moves focus to the side bar

### core:sidebar-select-next-item

- Selector: `body`

Select next item of the side bar menu

### core:sidebar-select-prev-item

- Selector: `body`

Select previous item of the side bar menu

### core:strikethrough

- Selector: `.mde-cm-wrapper`

Toggles strikethrough to the selected text

### core:strong

- Selector: `.mde-cm-wrapper`

Toggles strong emphasis to the selected text

### core:toggle-blockquote

- Selector: `.mde-cm-wrapper`

Toggles blockquote to the selected lines

### core:toggle-bulleted-list

- Selector: `.mde-cm-wrapper`

Toggles bulleted list to the selected lines

### core:toggle-heading-1

- Selector: `.mde-cm-wrapper`

Toggles h1 heading to the selected lines

### core:toggle-heading-2

- Selector: `.mde-cm-wrapper`

Toggles h2 heading to the selected lines

### core:toggle-heading-3

- Selector: `.mde-cm-wrapper`

Toggles h3 heading to the selected lines

### core:toggle-heading-4

- Selector: `.mde-cm-wrapper`

Toggles h4 heading to the selected lines

### core:toggle-heading-bigger

- Selector: `.mde-cm-wrapper`

Decreases heading level of the selected lines

### core:toggle-heading-smaller

- Selector: `.mde-cm-wrapper`

Increases heading level of the selected lines

### core:toggle-numbered-list

- Selector: `.mde-cm-wrapper`

Toggles ordered list to the selected lines

### core:toggle-task-list

- Selector: `.mde-cm-wrapper`

Toggles task list to the selected lines

### core:undo

- Selector: `.mde-cm-wrapper`

Undoes the last change

### core:unindent

- Selector: `.mde-cm-wrapper`

Unindents the current lines

## Editor commands

### editor:clear-find

- Selector: `body`

Clears the text in the editor search bar

### editor:change-note-status-none

- Selector: `body`

Set the [note status](/manual/managing-tasks-with-status) of editing note to None.

### editor:change-note-status-active

- Selector: `body`

Set the [note status](/manual/managing-tasks-with-status) of editing note to Active.

### editor:change-note-status-onhold

- Selector: `body`

Set the [note status](/manual/managing-tasks-with-status) of editing note to OnHold.

### editor:change-note-status-completed

- Selector: `body`

Set the [note status](/manual/managing-tasks-with-status) of editing note to Completed.

### editor:change-note-status-dropped

- Selector: `body`

Set the [note status](/manual/managing-tasks-with-status) of editing note to Dropped.

### editor:delete-char-after

- Selector: `.mde-cm-wrapper`

Deletes the char after the cursor

### editor:delete-char-before

- Selector: `.mde-cm-wrapper`

Deletes the char before the cursor

### editor:delete-group-after

- Selector: `.mde-cm-wrapper`

Deletes the text group after the cursor

### editor:delete-group-before

- Selector: `.mde-cm-wrapper`

Deletes the text group before the cursor

### editor:delete-line

- Selector: `.mde-cm-wrapper`

Deletes the line

### editor:delete-word-after

- Selector: `.mde-cm-wrapper`

Deletes the word after the cursor

### editor:delete-word-before

- Selector: `.mde-cm-wrapper`

Deletes the word before the cursor

### editor:delete-wrapped-line-left

- Selector: `.mde-cm-wrapper`

Deletes the wrapped line left

### editor:delete-wrapped-line-right

- Selector: `.mde-cm-wrapper`

Deletes the wrapped line right

### editor:find

- Selector: `body`

Toggles the editor search bar

### editor:find-next

- Selector: `body`

Locates the next item in the editor that matches criteria

### editor:find-prev

- Selector: `body`

Locates the previous item in the editor that matches criteria

### editor:find-text

- Selector: `body`

Finds given text in the editor

| Argument | Description               |
| -------- | ------------------------- |
| `text`   | String, the text to find. |

### editor:focus

- Selector: `body`

If the editor mode is `'edit'` or `'side-by-side'`, it focuses to the MDE.
If the editor mode is `'preview'`, it focuses to the preview pane.

### editor:focus-mde

- Selector: `body`

Moves focus to the MDE.

### editor:focus-preview

- Selector: `body`

Moves focus to the preview pane.

### editor:go-char-left

- Selector: `.mde-cm-wrapper`

Moves the cursor to one character left

### editor:go-char-right

- Selector: `.mde-cm-wrapper`

Moves the cursor to one character right

### editor:go-doc-end

- Selector: `.mde-cm-wrapper`

Moves the cursor to the end of the document

### editor:go-doc-start

- Selector: `.mde-cm-wrapper`

Moves the cursor to the start of the document

### editor:go-group-left

- Selector: `.mde-cm-wrapper`

Moves the cursor to one group left

### editor:go-group-right

- Selector: `.mde-cm-wrapper`

Moves the cursor to one group right

### editor:go-line-down

- Selector: `.mde-cm-wrapper`

Moves the cursor to one line down

### editor:go-line-end

- Selector: `.mde-cm-wrapper`

Moves the cursor to the line end

### editor:go-line-left

- Selector: `.mde-cm-wrapper`

Moves the cursor to the line left

### editor:go-line-right

- Selector: `.mde-cm-wrapper`

Moves the cursor to the line right

### editor:go-line-start

- Selector: `.mde-cm-wrapper`

Moves the cursor to the line start

### editor:go-line-up

- Selector: `.mde-cm-wrapper`

Moves the cursor to one line up

### editor:go-page-down

- Selector: `.mde-cm-wrapper`

Moves the cursor to one page down

### editor:go-page-up

- Selector: `.mde-cm-wrapper`

Moves the cursor to one page up

### editor:go-word-left

- Selector: `.mde-cm-wrapper`

Moves the cursor to one word left

### editor:go-word-right

- Selector: `.mde-cm-wrapper`

Moves the cursor to one word right

### editor:indent

- Selector: `.mde-cm-wrapper`

Indents the currently selected line(s)

### editor:indent-less

- Selector: `.mde-cm-wrapper`

Unindents the currently selected line(s)

### editor:indent-more

- Selector: `.mde-cm-wrapper`

Indents one more the currently selected line(s)

### editor:insert-images

- Selector: `body`

Inserts image files at the cursor to the editing note

| Argument     | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pos`        | Position to insert with the following keys:                                                                                                                                                                                   |
| &emsp;`ch`   | Number, character position                                                                                                                                                                                                    |
| &emsp;`line` | Number, line position                                                                                                                                                                                                         |
| `files`      | [FIleList](https://developer.mozilla.org/en-US/docs/Web/API/FileList), or an Array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) or [NativeImage](https://electronjs.org/docs/api/native-image) to insert. |

### editor:jump-to-line

- Selector: `.mde-cm-wrapper`

Toggles a dialog which allows you to jump to the line at the specified number

### editor:kill-line

- Selector: `.mde-cm-wrapper`

Deletes the line at the cursor

### editor:new-line

- Selector: `.mde-cm-wrapper`

Insert a new line below the cursor

### editor:open-line

- Selector: `.mde-cm-wrapper`

Insert a new line above the cursor

### editor:redo-selection

- Selector: `.mde-cm-wrapper`

Redoes the last selection.

### editor:replace

- Selector: `body`

Initiates the replace sequence in the editor

### editor:replace-selection

- Selector: `.mde-cm-wrapper`

Replaces selected text with the given text

| Argument | Description                  |
| -------- | ---------------------------- |
| `text`   | String, the text to replace. |

### editor:save-editor-scroll

<div class="ui warning message">It's a private command</div>

### editor:save-preview-scroll

<div class="ui warning message">It's a private command</div>

### editor:scroll-editor-to-line

- Selector: `body`

Scrolls the editor to the given line

| Argument | Description                          |
| -------- | ------------------------------------ |
| `line`   | Number, the destination line number. |

### editor:scroll-preview-to-line

- Selector: `body`

Scrolls the preview to the given line

| Argument | Description                          |
| -------- | ------------------------------------ |
| `line`   | Number, the destination line number. |

### editor:select-all

- Selector: `.mde-cm-wrapper`

Selects all text in the editor

### editor:select-lines-downward

- Selector: `.mde-cm-wrapper`

Adds a cursor downward

### editor:select-lines-upward

- Selector: `.mde-cm-wrapper`

Adds a cursor upward

### editor:single-selection

- Selector: `.mde-cm-wrapper`

Removes all cursors except the primary one

### editor:sync-editor-scroll

Syncs the scroll position of the editor with the same position of the preview pane

### editor:sync-preview-scroll

Syncs the scroll position of the preview pane with the same position of the editor

### editor:title:focus

Moves focus to the title input bar of the editor

### editor:toggle-overwrite

- Selector: `.mde-cm-wrapper`

Toggles overwrite mode

### editor:toggle-task-list

- Selector: `.mde-cm-wrapper`

Toggles task list to the current selections

### editor:transpose-chars

- Selector: `.mde-cm-wrapper`

Transposes characters at the cursor

### editor:undo-selection

- Selector: `.mde-cm-wrapper`

Undoes the last selection

### editor:unindent

- Selector: `.mde-cm-wrapper`

Unindents the current lines

### core:toggle-editor-drawer

- Selector: `body`

Toggle editor drawer

### core:show-editor-drawer

- Selector: `body`

Show editor drawer

### core:close-editor-drawer

- Selector: `body`

Hide editor drawer

## Export commands

### export-as-html:export

- Selector: `body`

Exports selected notes on the note list bar as HTML to disk

### export-as-markdown:all

- Selector: `body`

Exports all notes as Markdown to disk

### export-as-markdown:single

- Selector: `body`

Exports the editing note as Markdown to disk

### export-print:export-as-pdf

- Selector: `body`

Exports the editing note as PDF to disk

### export-print:print

- Selector: `body`

Prints the editing note

## Import commands

### import-html:import-from-file

- Selector: `body`

Imports a note from a HTML file

## View commands

### view:sort-by-date-created

- Selector: `body`

Sorts the note list by date created

### view:sort-by-date-updated

- Selector: `body`

Sorts the note list by date updated

### view:sort-by-title

- Selector: `body`

Sorts the note list by title

### view:sort-in-ascending

- Selector: `body`

Sorts the note list in ascending

### view:sort-in-descending

- Selector: `body`

Sorts the note list in descending

### view:toggle-distraction-free

- Selector: `body`

Toggles distraction free mode.

### view:toggle-preview

- Selector: `body`

Toggles the preview pane.

### view:toggle-side-by-side

- Selector: `body`

Toggles the side-by-side mode.

### view:toggle-sidebar

- Selector: `body`

Toggles the side bar.

## Window commands

### window:close

- Selector: `body`

Closes the window

### window:decrease-font-size

- Selector: `body`

Decreases the font size in the editor

### window:increase-font-size

- Selector: `body`

Increases the font size in the editor

### window:install-shell-commands

- Selector: `body`

Installs `ipm` command to your system

### window:new-inkdrop-window

- Selector: `body`

Opens up a new window

### window:reload

- Selector: `body`

Reloads the window

### window:toggle-dev-tools

- Selector: `body`

Toggles the Developer Tools window

### window:toggle-full-screen

- Selector: `body`

Toggles full screen mode
