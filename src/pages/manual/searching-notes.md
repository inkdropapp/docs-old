---
index: 40
category: "usage"
path: "/manual/searching-notes"
title: "Searching Notes"
---

Notes are only useful if you can find them quickly. Inkdrop's full-text search also supports filtering notebooks and tags with search qualifiers.

## Local & Global Search Scope

Inkdrop provides two search scopes:

* **Local**: It searches current context of the note list. It is useful if you would like to just filter notes shown in the note list.
* **Global**: It searches all notes, regardless of which notebook, tag or status is currently selected.

When search scope is local, the search bar on top of the note list has "Filter" placeholder with funnel icon as following image.
While you are navigating notes, search scope automatically switches to local.

![Search Bar](./searching-notes_search-bar-local.png)

When search scope is global, the search bar has "Search" placeholder with magnifier icon.
If you would like to search all notes, click **"Search All"** item on the sidebar as following:

![Search Bar Global](./searching-notes_search-bar-global.png)

### Shortcut Keys

You can move focus to the search bar by pressing `Cmd+Shift+F` on macOS or `Ctrl+Shift+F` on Windows and Linux.
To switch search scope from local to global, press the same shortcut key again while having focus on the search bar, or press `Cmd+Shift+Alt+F` on macOS or `Ctrl+Shift+Alt+F` on Windows and Linux.

## Filter Notes with Special Qualifiers

You can specify qualifiers to filter notes with notebook, status and tag like so:

```
book:Blog
book:"First Notebook"
tag:JavaScript
tag:WIP
status:active
status:onHold
status:completed
status:dropped
```

For example, to find notes which contain a keyword "Hello" and a tag "Issue":

```
Hello tag:Issue
```

## Search with a phrase

By enclosing keywords in double quotes (`"`), you can search notes by a phrase including spaces.
Example:

```
"foo bar"
```

## Excluding modifier

To search notes NOT matched with specified keyword and condition, add `-` modifier before the keyword and the qualifier like following:

```
-book:Blog
-tag:JavaScript
-status:completed
-foo
-"foo bar"
```
