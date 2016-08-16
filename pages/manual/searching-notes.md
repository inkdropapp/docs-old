Notes are only useful if you can find them quickly. Inkdrop's full-text search also supports filtering notebooks and tags with search qualifiers.

To search all the notes, either click the search bar on the top of the note list or press `Cmd+F` / `Ctrl+F` keybind to set focus to it.

![SideBySide](/manual/04-searching_searchbar.png)

Now you can search by keyword.

## Search notes within a notebook and with tags

With `book:<book_name>` qualifier, you can search notes within specified notebook.
For example:

```
book:Blog
book:"First Notebook"
```

If the notebook name has one or more space characters, enclose its name in double quotes (`"`).

With `tag:<tag_name>` qualifier, you can search notes with specified tag.
For example:

```
tag:JavaScript
tag:WIP
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
-foo
-"foo bar"
```
