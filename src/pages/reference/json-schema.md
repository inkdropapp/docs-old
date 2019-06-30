---
index: 10
category: data
path: /reference/json-schema
title: JSON Schema
---

We provide Inkdrop data model definitions in json-schema and flowtype.
The source code is hosted on [GitHub](https://github.com/inkdropapp/inkdrop-model).

## Usage

### Json Schema

You can use schemas by importing `inkdrop-model` module like so:

```javascript
import { NoteSchema, BookSchema, TagSchema, FileSchema } from 'inkdrop-model'
```

### Validating data

You can validate data with json schemas.
Below example uses [ajv](https://github.com/epoberezkin/ajv) as a validator:

```javascript
import { NoteSchema } from 'inkdrop-model'
import Ajv from 'ajv'
const ajv = new Ajv()
const validate = ajv.compile(NoteSchema)

const data = {
  _id: 'note:BkgOZZUJzf',
  title: 'link',
  doctype: 'markdown',
  updatedAt: 1513330812556,
  createdAt: 1513214207639,
  tags: [],
  status: 'none',
  share: 'private',
  body: 'markdown note body',
  bookId: 'book:first',
  _rev: '38-636e505958d24f9c21614d95ea03b5a1'
}
const valid = validate(data)
console.log(valid) // => true
```
