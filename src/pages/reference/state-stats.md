---
index: 500
category: flux-state
path: /reference/state-stats
title: stats
---

An [app state](/manual/flux-architecture) that represents the statistics of the database, including the total number of notes, the number of notes in each notebook, the number of notes with each tag, and so on.
To get the `stats` state:

```js
const { stats } = inkdrop.store.getState()
```

Or, to get the stats from the Redux store state within your React component:

```js
import { useSelector } from 'react-redux'

const selectStats = ({ stats }) => stats

const MyComponent = props => {
  const stats = useSelector(selectStats)
  // render
}
```

## Example

```json
{
  "notes": 141,
  "pins": 4,
  "tags": {
    "tag:HyBgJ94gx": 12,
    "tag:Hyg5Cyoaz": 1,
    "tag:ZiQET3lID": 3,
    "tag:cBDJ4lFfE": 10,
    "tag:h11OMPbSs": 3,
    "tag:sxSqVKdRv": 15,
    "tag:tBELDUITs": 1,
    "tag:tutorial": 3
  },
  "books": {
    "book:-wDNxxN_a": 28,
    "book:0cFae6lCc": 6,
    "book:Bk5Ivk0T": 6,
    "book:HJWHS7SMZ": 15,
    "book:SkTsOceR": 9,
    "book:XxhoCNo8u": 3,
    "book:first": 66,
    "book:kKNHqOr6z": 3,
    "book:tjnPbJakw": 5
  },
  "status": {
    "none": 115,
    "active": 16,
    "onHold": 5,
    "completed": 4,
    "dropped": 1
  }
}
```

## Data Structure

### notes: `number`

The total number of notes in the database.

### pins: `number`

The number of pinned notes.

### tags.{tagId}: `number`

The number of notes associated with the tag having `tagId`.

### books.{bookId}: `number`

The number of notes in the notebook identified by `bookId`.

### status.{status}: `number`

The number of notes with each status.
