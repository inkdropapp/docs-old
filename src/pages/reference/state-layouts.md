---
index: 700
category: flux-state
path: /reference/state-layouts
title: layouts
---

An [app state](/manual/flux-architecture) of component layouts.
To get the `layouts` state:

```js
const { layouts } = inkdrop.store.getState()
```

Or, to connect with your React component:

```js
import { connect } from "react-redux"

const connector = connect(
  ({ layouts }) => ({ layouts }),
  dispatch => ({ dispatch })
)

const MyComponent = connector(props => {
  // render
})
```

## Data Structure

A map of `[layout_name]: LayoutComponents` where:

- `layout_name`: String
- `LayoutComponents`: A class name of React component

### main:full

The main layout that consists of 3 columns.

#### Default value

```json
["ModalLayout", "SideBarLayout", "NoteListBarLayout", "EditorLayout"]
```

### main:slim

The main layout that consists of 2 columns.

#### Default value

```json
["ModalLayout", "NoteListBarLayout", "EditorLayout"]
```

### main:distraction-free

The main layout for distraction-free mode.

#### Default value

```json
["ModalLayout", "EditorLayout"]
```

### sidebar

The sidebar layout

#### Default value

```json
[
  "SideBarHeader",
  "SideBarNavigation",
  "SideBarSyncStatusView",
  "SideBarPluginUpdatesNotificationView"
]
```

### sidebar-menu

The menu layout of sidebar

#### Default value

```json
[
  "SideBarMenuItemAllNotes",
  "SideBarMenuSectionNotebooks",
  "SideBarMenuBookListRoot",
  "SideBarMenuItemTrash",
  "SideBarMenuSectionStatus",
  "SideBarMenuStatusList",
  "SideBarMenuSectionTags",
  "SideBarMenuTagList"
]
```

### sidebar-workspace-menu

The menu layout of sidebar workspace menu

#### Default value

```json
[
  "SidebarWorkspaceMenuTitle",
  "SideBarWorkspaceMenuAllNotes",
  "SideBarMenuSectionNotebooks",
  "SideBarWorkspaceMenuBookList",
  "SideBarMenuSectionStatus",
  "SidebarWorkspaceMenuStatusList",
  "SideBarMenuSectionTags",
  "SidebarWorkspaceMenuTagList"
]
```

### note-list-bar

The menu layout of note list bar

#### Default value

```json
["NoteListHeader", "NoteListSearchBar", "NoteListBarContainer"]
```

### note-list-bar:trash

The trash menu layout of note list bar

#### Default value

```json
["NoteListHeader", "NoteListBarContainer"]
```

### mde

The mde layout

#### Default value

```json
["Editor"]
```

### editor

The editor layout

#### Default value

```json
[
  "EditorDrawer",
  "EditorFloatingActions",
  "EditorHeaderLayout",
  "EditorMetaLayout",
  "EditorToolbar",
  "MDELayout",
  "MDESearchBar",
  "EditorStatusBarLayout"
]
```

### editor-header

The header layout of the editor

#### Default value

```json
["EditorHeaderTitleInput", "EditorHeaderMore"]
```

### editor-meta

The meta pane layout of the editor

#### Default value

```json
["EditorMetaNotebook", "EditorMetaStatusPicker", "EditorMetaTags"]
```

### modal

The layout for modal components

#### Default value

```json
[
  "NewNotebookDialog",
  "DeleteNotebookDialog",
  "RenameNotebookDialog",
  "TagSettingsDialog",
  "DeleteTagDialog",
  "AssistiveErrorDialog",
  "MoveNotesDialog",
  "MoveNotebookDialog",
  "EmptyTrashDialog",
  "ShareNoteDialog",
  "NoteRevisionsDialog"
]
```

### editor-toolbar

The toolbar layout of the editor

### Default value

```json
[]
```

### editor-drawer-menu

The editor drawer menu items

### Default value

```json
[
  "EditorDrawerSectionHeaderNoteInformation",
  "EditorDrawerMenuItemNotebook",
  "EditorDrawerItemStatus",
  "EditorDrawerItemTags",
  "EditorDrawerItemCreatedDate",
  "EditorDrawerItemUpdatedDate",
  "EditorDrawerSeparator-1",
  "EditorDrawerSectionHeaderActions",
  "EditorDrawerActionButtonDuplicate",
  "EditorDrawerActionButtonCopyNoteLink",
  "EditorDrawerActionButtonPinToTop",
  "EditorDrawerActionButtonOpenNoteInSeparateWindow",
  "EditorDrawerSeparator-2",
  "EditorDrawerActionButtonDeleteNote",
  "EditorDrawerActionButtonRevisionHistory",
  "EditorDrawerSeparator-3",
  "EditorDrawerActionButtonShare"
]
```

### editor-status-bar

The status bar layout of the editor

### Default value

```json
[]
```

### editor-floating-actions

The floating action buttons on the editor

```json
["EditorFloatingActionTogglePreview", "EditorFloatingActionToggleSideBySide"]
```
