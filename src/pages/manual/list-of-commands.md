---
index: 70
category: "hacking"
path: "/manual/list-of-commands"
title: "List of Commands"
---

Inkdrop provides a bunch of commands to allow you to associate arbitrary interactions with the features.
You can bind them with [keystrokes](/reference/keymap-manager), [menu](/reference/menu-manager) and [context menu](/reference/context-menu-manager) from [plugins](/manual/plugin-word-count), [the init file](/manual/the-init-file) or [keymap config file](/manual/customizing-keybindings).
Note that some commands like `core:open-note` require parameters so you have to invoke them programmatically with [CommandRegistry](/reference/command-registry) like so:

```js
inkdrop.commands.dispatch(document.body, 'core:open-note', { noteId: 'note:uugSvPq5r' })
```

## Application commands

Special commands that run in the main process to control the Inkdrop app.

### application:about

Shows a dialog about Inkdrop.

### application:bring-all-windows-to-front

* macOS only

Arranges windows listed in the Window menu in front of all other windows

### application:hide

* macOS only

Hides Inkdrop windows

### application:hide-other-applications

* macOS only

Hides all apps, except Inkdrop

### application:inspect

Shows a Developer Tools and inspects an element

### application:logout

Logs out from the currently authenticated account

### application:minimize

* macOS only

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

### application:unhide-all-applications

* macOS only

Unhides all apps, including Inkdrop.

### application:view-help

Opens up the documentation website

### application:zoom

* macOS only

Toggles the size and location of the window between its standard state and its user state

## Core commands

### core:copy

Copy the selected text to clipboard

### core:copy-image

Copy the target element's image to clipboard

### core:copy-note-link

Copy links to notes currently selected on the note list as Markdown

### core:cut

Delete the selected text and copy it to clipboard

### core:delete-note

Move notes currently selected on the note list to trash.
If the notes are already in trash, they will be permanently deleted.

### core:delete-notebook

<div class="ui warning message">It's a private command for now</div>

### core:delete-tag

<div class="ui warning message">It's a private command for now</div>

### core:duplicate-note

Duplicates notes currently selected on the note list

### core:emphasize

* Selector: `.mde-cm-wrapper`

Emphersize currently selected text

### core:empty-trash

Empties trash

### core:filter-by-tag

Adds a filter condition with specified tag

| Argument | Description |
| -------- | ----------- |
| `tagId` | The ID of the tag to filter by. |

### core:find

Moves focus to the search bar

### core:find-clear

Clears the search bar text

### core:find-global

Moves focus to the search bar and switch the [search scope to global](/manual/searching-notes#local--global-search-scope).

### core:focus-next

Moves focus to the next focussable UI component

### core:focus-note-list-bar

Moves focus to the note list bar

### core:focus-previous

Moves focus to the previous focussable UI component

### core:indent

* Selector: `.mde-cm-wrapper`

Indents the selected line(s)

### core:insert-code-block

* Selector: `.mde-cm-wrapper`

Inserts a code block

### core:insert-horizontal-rule

* Selector: `.mde-cm-wrapper`

Inserts a horizontal rule: `* * *`

### core:insert-link

* Selector: `.mde-cm-wrapper`

Inserts a link

### core:move-notebook

<div class="ui warning message">It's a private command for now</div>

### core:move-to-notebook

<div class="ui warning message">It's a private command for now</div>

### core:navigate-back

Moves backward through the note open history

### core:navigate-forward

Moves forward through the note open history

### core:new-note

Creates a new note and open it in the editor

### core:new-notebook

Shows up a dialog for creating a new notebook

### core:note-list-show-all-notes

Lists all notes on the note list bar

### core:open-first-note

Opens the first note of the note list bar in the editor

### core:open-next-note

Opens the next note of currently selected note on the note list bar.

### core:open-note

Opens a note with specified note ID

| Argument | Description |
| -------- | ----------- |
| `noteId` | The ID of the note to open. |
| `selectInNoteListBar` | Whether to select the correspond note in the note list bar. |
| `pushState` | Remember it in the navigation history. |
| `newWindow` | Whether to open the note in a separate window. |


### core:open-note-in-separate-window

Opens notes selected on the note list bar in separate windows

### core:open-prev-note

Opens the previous note of currently selected note on the note list bar.

### core:open-tag-settings

Opens up the settings window for the tag with specified ID.

| Argument | Description |
| -------- | ----------- |
| `tagId` | The ID of the tag to set. |

### core:paste

Pastes a text from clipboard

### core:redo

Redoes the last undone change.

### core:rename-notebook

<div class="ui warning message">It's a private command for now</div>

### core:save-image

Saves the target element's image to disk

### core:save-note

Saves the currently editing note to the local database

### core:select-all

Select all text

### core:share-note

Shows up a dialog for sharing note with specified ID

| Argument | Description |
| -------- | ----------- |
| `noteId` | The ID of the note to be shared. |

### core:show-note-revisions

Shows up a dialog for viewing note change history with specified ID

| Argument | Description |
| -------- | ----------- |
| `noteId` | The ID of the note to view its revision history. |

### core:sidebar-focus

Moves focus to the side bar

### core:sidebar-select-next-item

Select next item of the side bar menu

### core:sidebar-select-prev-item

Select previous item of the side bar menu

### core:strikethrough

* Selector: `.mde-cm-wrapper`

Toggles strikethrough to the selected text

### core:strong

* Selector: `.mde-cm-wrapper`

Toggles strong emphasis to the selected text

### core:toggle-blockquote

* Selector: `.mde-cm-wrapper`

Toggles blockquote to the selected lines

### core:toggle-bulleted-list

* Selector: `.mde-cm-wrapper`

Toggles bulleted list to the selected lines

### core:toggle-heading-1

* Selector: `.mde-cm-wrapper`

Toggles h1 heading to the selected lines

### core:toggle-heading-2

* Selector: `.mde-cm-wrapper`

Toggles h2 heading to the selected lines

### core:toggle-heading-3

* Selector: `.mde-cm-wrapper`

Toggles h3 heading to the selected lines

### core:toggle-heading-4

* Selector: `.mde-cm-wrapper`

Toggles h4 heading to the selected lines

### core:toggle-heading-bigger

* Selector: `.mde-cm-wrapper`

Decreases heading level of the selected lines

### core:toggle-heading-smaller

* Selector: `.mde-cm-wrapper`

Increases heading level of the selected lines

### core:toggle-numbered-list

* Selector: `.mde-cm-wrapper`

Toggles ordered list to the selected lines

### core:toggle-task-list

* Selector: `.mde-cm-wrapper`

Toggles task list to the selected lines

### core:undo

* Selector: `.mde-cm-wrapper`

Undoes the last change

### core:unindent

* Selector: `.mde-cm-wrapper`

Unindents the current lines

## Editor commands

### editor:clear-find
### editor:delete-char-after
### editor:delete-char-before
### editor:delete-group-after
### editor:delete-group-before
### editor:delete-line
### editor:delete-word-after
### editor:delete-word-before
### editor:delete-wrapped-line-left
### editor:delete-wrapped-line-right
### editor:find
### editor:find-next
### editor:find-prev
### editor:find-text
### editor:focus
### editor:focus-mde
### editor:focus-preview
### editor:go-char-left
### editor:go-char-right
### editor:go-doc-end
### editor:go-doc-start
### editor:go-group-left
### editor:go-group-right
### editor:go-line-down
### editor:go-line-end
### editor:go-line-left
### editor:go-line-right
### editor:go-line-start
### editor:go-line-up
### editor:go-page-down
### editor:go-page-up
### editor:go-word-left
### editor:go-word-right
### editor:indent
### editor:indent-less
### editor:indent-more
### editor:insert-images
### editor:jump-to-line
### editor:kill-line
### editor:new-line
### editor:open-line
### editor:redo-selection
### editor:replace
### editor:replace-selection
### editor:save-editor-scroll
### editor:save-preview-scroll
### editor:scroll-editor-to-line
### editor:scroll-preview-to-line
### editor:select-all
### editor:select-lines-downward
### editor:select-lines-upward
### editor:single-selection
### editor:sync-editor-scroll
### editor:sync-preview-scroll
### editor:title:focus
### editor:toggle-overwrite
### editor:toggle-task-list
### editor:transpose-chars
### editor:undo-selection
### editor:unindent

## Export commands

### export-as-html:export
### export-as-markdown:all
### export-as-markdown:single
### export-print:export-as-pdf
### export-print:print

## Import commands

### import-html:import-from-file

## View commands

### view:sort-by-date-created
### view:sort-by-date-updated
### view:sort-by-title
### view:sort-in-ascending
### view:sort-in-descending
### view:toggle-distraction-free
### view:toggle-preview
### view:toggle-side-by-side
### view:toggle-sidebar

## Window commands

### window:close
### window:decrease-font-size
### window:increase-font-size
### window:install-shell-commands
### window:new-inkdrop-window
### window:reload
### window:toggle-dev-tools
### window:toggle-full-screen
