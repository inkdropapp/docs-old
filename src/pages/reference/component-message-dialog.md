---
index: 100
category: component
path: /reference/message-dialog
title: MessageDialog
---

<div class='ui warning message'>
Deprecated as of v5.3.1. Use <a href='/reference/dialog'><code>Dialog</code></a> component instead.
</div>

A built-in React [component](/reference/component-manager) of Inkdrop that allows you to display a simple modal dialog with buttons.
To get the class of `MessageDialog` component:

```js
const MessageDialog = inkdrop.components.getComponentClass("MessageDialog")
```

## Props

```flow
type Props = {|
  title: string | (() => React.Node),
  message: string,
  buttons: MessageDialogButton[],
  autofocus: boolean,
  className?: string,
  onDismiss?: (dialog: MessageDialog, buttonIndex: number) => boolean,
  onHidden?: (dialog: MessageDialog, buttonIndex: number) => any,
  children: React.Node,
  // See: https://semantic-ui.com/modules/modal.html#/settings
  modalSettings?: Object,
|}

type MessageDialogButton = {
  label: string,
  primary?: boolean,
  destructive?: boolean,
}
```

## Example

```js
<MessageDialog
  title={() => (
    <span>
      <i className="share alternate icon" />
      Share Note &quot;{note && note.title}&quot;
    </span>
  )}
  buttons={[
    { label: "Cancel", cancel: true },
    { label: "Share", primary: true },
  ]}
  onDismiss={(caller, buttonIndex) => {
    if (buttonIndex === 1 /* Share */) {
      // prevent the dialog from closing
      return false
    } else {
      return true
    }
  }}
>
  <p>
    Are you sure you want to share this note on the web? A public link will be
    created.
  </p>
</MessageDialog>
```

It produces:

![Example](component-message-dialog_example.png)

## Customizing modal dialog

The dialog is based on Semantic UI's Modal component.
If you would like to customize it, you can specify `modalSettings` prop.
Supported values are documented [here](https://semantic-ui.com/modules/modal.html#/settings).

```js
<MessageDialog
  ...
  modalSettings={{ closable: true }}
>
  <p>
    ...
  </p>
</MessageDialog>
```
