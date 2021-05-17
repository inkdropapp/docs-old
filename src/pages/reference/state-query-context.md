---
index: 1400
category: flux-state
path: /reference/state-query-context
title: queryContext
---

An [app state](/manual/flux-architecture) of query context which represents currenty used query for showing the content of note list.
To get the `queryContext` state:

```js
const { queryContext } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from "react-redux"

const connector = connect(
  ({ queryContext }) => ({ queryContext }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

The data structure varies based on the value of `mode` field.

### mode: `string`

The query mode which takes one of "all", "book", "tag", "status", "trash" and "search".

Following sections describe data structure for each mode.

### `"all"`: All Notes

It is a mode to show all notes.

| Field           | Description                                        |
| --------------- | -------------------------------------------------- |
| `filterKeyword` | String. A filter keyword to filter note list items |

### `"book"`: Show notes in a notebook

It is a mode to show notes in a particular notebook.

| Field             | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `bookId`          | String. A notebook ID to query                       |
| `tagId`           | String, optional. A tag ID to filter                 |
| `status`          | String, optional. A status to filter                 |
| `filterKeyword`   | String. A filter keyword to filter note list items   |
| `includeChildren` | Boolean. Whether to include notes in child notebooks |

### `"tag"`: Show notes with a tag

It is a mode to show notes that are associated with a tag.

| Field           | Description                                        |
| --------------- | -------------------------------------------------- |
| `tagId`         | String. A tag ID to query                          |
| `filterKeyword` | String. A filter keyword to filter note list items |

### `"status"`: Show notes with a status

It is a mode to show notes that has a given status.

| Field           | Description                                        |
| --------------- | -------------------------------------------------- |
| `status`        | String. A status to query                          |
| `filterKeyword` | String. A filter keyword to filter note list items |

### `"trash"`: Show notes in trash

It is a mode to show notes that are in trash.

| Field    | Description                   |
| -------- | ----------------------------- |
| `bookId` | String. The trash notebook ID |

### `"search"`: Show notes that match keywords and consitions

It is a mode to show notes that match given keywords and conditions.

| Field           | Description                         |
| --------------- | ----------------------------------- |
| `searchKeyword` | String. The search keyword to query |
