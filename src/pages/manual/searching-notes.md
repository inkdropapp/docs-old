---
index: 40
category: "usage"
toc: true
path: "/manual/searching-notes"
title: "Searching Notes"
---

Notes are only useful if you can find them quickly. Inkdrop's full-text search also supports filtering notebooks and tags with search qualifiers.

## Local & Global Search Scope

Inkdrop provides two search scopes:

- **Local**: It filters the items of the note list
- **Global**: It searches all notes across notebooks

When you are viewing a certain notebook, tag, or status, the search scope is automatically set to local.
In this mode, you can see the search bar on top of the note list has "Filter" placeholder with funnel icon.

![Local search scope](./searching-notes_search-bar-local.png)

When you are viewing "All Notes", the search scope is set to global.
In this mode, the search bar has "Search" placeholder with magnifier icon.

![Global search scope](./searching-notes_search-bar-global.png)

### Shortcut Keys

You can move focus to the search bar by pressing <kbd>Cmd+Shift+F</kbd> on macOS or <kbd>Ctrl+Shift+F</kbd> on Windows and Linux (Command: `core:find`).
To switch search scope from local to global, press the same shortcut key again while having focus on the search bar, or press <kbd>Cmd+Shift+Alt+F</kbd> on macOS or <kbd>Ctrl+Shift+Alt+F</kbd> on Windows and Linux (Command: `core:find-global`).

Pressing <kbd>Esc</kbd> key to clear out the search keyword.

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

Also, you can filter notes by title or body:

```
title:"JavaScript setTimeout"
body:keyword
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

Note that you can't specify excluding modifiers only without including conditions.

## Caveats

The Inkdrop's full-text search does not support partial keyword matching while prefix matching works.
That is, you can't find notes with "string" when you search for "trin".

That's because it uses the SQLite's full-text search engine which uses a token-based indexing algorithm like Google web search.
It gives you a great performance and an ability to sort by rank, by tokenizing text into words and rank them based on TF-IDF:

- [https://sqlite.org/fts5.html](https://sqlite.org/fts5.html)

That's why you can't search notes like grep.
