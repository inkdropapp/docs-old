---
index: 700
category: flux-state
path: /reference/state-layouts
title: layouts
---

An app state of component layouts.
To get the `layouts` state:

```js
const { layouts } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from 'react-redux'

const connector = connect(
  ({ layouts }) => ({ layouts }),
  (dispatch) => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

A map of `[layout_name]: LayoutComponents` where:

* `layout_name`: String
* `LayoutComponents`: A class name of React component

### main:full

The main layout that consists of 3 columns.

#### Default value

```js
[
  'ModalLayout',
  'SideBarLayout',
  'NoteListBarLayout',
  'EditorLayout'
]
```

### main:slim

The main layout that consists of 2 columns.

#### Default value

```js
['ModalLayout', 'NoteListBarLayout', 'EditorLayout']
```

### main:distraction-free

The main layout for distraction-free mode.

#### Default value

```js
['ModalLayout', 'EditorLayout']
```

### sidebar

The sidebar layout

#### Default value

```js
[
    'SideBarHeader',
    'SideBarNavigation',
    'SideBarSyncStatusView'
]
```

### sidebar-menu

The menu layout of sidebar

#### Default value

```js
[
  'SideBarMenuItemAllNotes',
  'SideBarMenuItemSearch',
  'SideBarMenuSectionNotebooks',
  'SideBarMenuBookList',
  'SideBarMenuItemTrash',
  'SideBarMenuSectionStatus',
  'SideBarMenuStatusList',
  'SideBarMenuSectionTags',
  'SideBarMenuTagList'
]
```

### sidebar-book-filter-menu

The menu layout of sidebar book filter

#### Default value

```js
[
  'SidebarBookFilterTitle',
  'SideBarMenuSectionStatus',
  'SidebarBookFilterStatusList',
  'SideBarMenuSectionTags',
  'SidebarBookFilterTagList'
]
```

### note-list-bar

The menu layout of note list bar

#### Default value

```js
[
  'NoteListHeader',
  'NoteListSearchBar',
  'NoteListBarContainer'
]
```

### note-list-bar:trash

The trash menu layout of note list bar

#### Default value

```js
['NoteListHeader', 'NoteListBarContainer']
```

### mde

The mde layout

#### Default value

```js
['Editor']
```

### editor

The editor layout

#### Default value

```js
[
  'EditorHeaderLayout',
  'EditorTitleInput',
  'EditorMetaLayout',
  'EditorToolbar',
  'MDELayout',
  'MDESearchBar'
]
```

### editor-header

The header layout of the editor

#### Default value

```js
[
  'EditorHeaderItemNavigationButtons',
  'EditorHeaderItemNotebook',
  'EditorHeaderItemCreatedDate',
  'EditorHeaderItemUpdatedDate',
  'EditorHeaderItemSpacer',
  'EditorHeaderItemActions'
]
```

### editor-meta

The meta pane layout of the editor

#### Default value

```js
['EditorMetaStatusPicker', 'EditorMetaTags']
```

### modal

The layout for modal components

#### Default value

```js
[
  'NewNotebookDialog',
  'DeleteNotebookDialog',
  'RenameNotebookDialog',
  'TagSettingsDialog',
  'DeleteTagDialog',
  'AssistiveErrorDialog',
  'MoveNotesDialog',
  'MoveNotebookDialog',
  'EmptyTrashDialog',
  'ShareNoteDialog',
  'NoteRevisionsDialog'
]
```

### editor-toolbar

The toolbar layout of the editor

### Default value

```js
[]
```

### editor-status-bar

The status bar layout of the editor

### Default value

```js
[]
```

