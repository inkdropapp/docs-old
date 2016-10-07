The Note model represents a Note object.

## Example (not encrypted)

```JSON
{
   "_id": "note:ryajdJ9Y",
   "_rev": "30-317a1636d4cdb2c755aee6e92e699cb3",
   "title": "Welcome to Inkdrop",
   "doctype": "markdown",
   "updatedAt": 1471228624903,
   "createdAt": 1470916772952,
   "tags": [
       "Tutorial"
   ],
   "body": "The [Inkdrop docs](http://doc.inkdrop.info/) for Guides and the API reference.\n * The Inkdrop forum at [github](https://github.com/inkdropapp/forum). Please report issue or suggest feedback here.\n * The [Inkdropapp org](https://github.com/inkdropapp/). This is where all Inkdrop-created packages can be found.\n\n* * *\n\n### Get to know Inkdrop 🚀\n\n * [👀 Check a note example](inkdrop://note:HyxgYO15t)\n * [📓 Create a notebook]()\n * [✍️ Create a note]()\n * [🖌 Choose a Theme]()\n * [⚙ Customize the Editor]()\n * [⌨️ Learn some Shortcuts]()\n",
   "bookId": "book:rylKOycF"
}
```

## Fields

### _id

Type: **String**

The unique document ID which should start with `note:` and the remains are randomly generated string.

### _rev

Type: **String**

This is a CouchDB specific field.
The current MVCC-token/revision of this document (mandatory and immutable).

### title

Type: **String**

The title of the note.

### doctype

Type: **String**

The format type of the body field.
It currently can take `markdown` only, reserved for the future.

### updatedAt

Type: **Number**

The date time when the note was last updated, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

### createdAt

Type: **Number**

The date time when the note was created, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

### tags

Type: **Array of String**

The list of tag names.

### body

Type: **String**

The content of the note represented with Markdown.

### bookId

The ID of the book with which the note is associated.

