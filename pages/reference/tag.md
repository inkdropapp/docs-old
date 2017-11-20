Example:

```JSON
{
   "_id": "tag:1f0a9052-c82b-4749-9568-b79581d5282b",
   "_rev": "3-0da4f435c145fbf73d9eb5962996c2ec",
   "name": "Tutorial",
   "count": 2,
   "updatedAt": 1471228624903,
   "createdAt": 1470916772952
}
```

## Fields

### \_id

Type: **String**

The unique tag ID which should start with `tag:` and the remains are randomly generated string.

### \_rev

Type: **String**

This is a CouchDB specific field.
The current MVCC-token/revision of this document (mandatory and immutable).

### name

Type: **String**

The name of the tag.

### count

Type: **Number**

It indicates the number of notes with the tag.

### updatedAt

Type: **Number**

The date time when the tag was last updated, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

### createdAt

Type: **Number**

The date time when the tag was created, represented with [Unix timestamps](http://www.unixtimestamp.com/) in milliseconds.

