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
   "body": "![logo](/Users/nora/Documents/pkpk/products/inkdrop/images/banner_sm.png)\n\nFor help, please visit:\n\n * The [Inkdrop docs](http://doc.inkdrop.info/) for Guides and the API reference.\n * The Inkdrop forum at [github](https://github.com/inkdropapp/forum). Please report issue or suggest feedback here.\n * The [Inkdropapp org](https://github.com/inkdropapp/). This is where all Inkdrop-created packages can be found.\n\n* * *\n\n### Get to know Inkdrop 🚀\n\n * [👀 Check a note example](inkdrop://note:HyxgYO15t)\n * [📓 Create a notebook]()\n * [✍️ Create a note]()\n * [🖌 Choose a Theme]()\n * [⚙ Customize the Editor]()\n * [⌨️ Learn some Shortcuts]()\n",
   "bookId": "book:rylKOycF"
}
```

## Example (encrypted)

```JSON
{
  "_id": "note:BykcqFxK",
  "_rev": "8-c14fcf8e3fd745ca89231a8a39487987",
  "title": "Welcome to Inkdrop",
  "doctype": "markdown",
  "updatedAt": 1470303011701,
  "createdAt": 1470302855436,
  "tags": [
      "Tutorial"
  ],
  "bookId": "book:05f32a5b-eca0-4bfa-bd9b-6e39afbd6b72:SyEczB-U",
  "encrypted": "aes-256-gcm",
  "encryptedBody": {
    "content": "oZLpfVvymz4s3IffRn9okvw8CGiaYEMjoze8AwQgyrQFhJ0y0WHEfMN9ORlz3UFaRsh5BxjVq+1Lx3g6LOGBpYDBmYVTVkhC7Ah3o4+LNpFQ76y7Z+xoBkP1gNgs7pcs5OkEz4OqzmlZ225RXfmCl4kGgon8v7umZ3GYvZHch+QodLySXUtg0a5P6DB55kZ2VRqqKzneQvVJoESoIK7L95fRLtcJ0fFlUE1WX77cRtXeVYWB3vMxKfxdrILyL0oUQY8/kr5kqYM5ZFooSBcW2qsi/i71YZUf/aS3QuR7QIanbaYMMH3KGsSZ8vonqANTcQulhBcLtQMMyndzphOJ67mUZpJicuAffCIWyvipNTK8NiFVuttjKRM7iu5TpINDDd4pqXApwoHG3Ba3yJdusNX5ZQJZSsb250ex6fErCRRfaIe7JgeRanPROOKQQFC6N+7idYCCNWyeWr6tgQ==",
    "iv": "ce6f133dbda3a3cc5bbcf8d3",
    "tag": "635096d9a0a2a30e41c1afa6ea5765e5"
  }
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

Type: **String**, Optional

The content of the note represented with Markdown.
It's required if the note is not encrypted.

### bookId

The ID of the book with which the note is associated.

### encrypted

Type: **String**, Optional

The encryption algorithm. It's required if the note is encrypted.
Only 'aes-256-gcm' is currently supported.

### encryptedBody

Type: **Object**, Optional

 * **content** - The encrypted data
 * **iv** - The initial vector
 * **tag** - The tag used for the encryption

If the note is encrypted with a password, the data should be stored in this field.


