---
index: 20
category: 'usage'
path: '/manual/navigating-notes'
title: 'Organize notebooks'
---

One of the ways to think about notebooks is like separate projects. Every notebook covers a specific topic and can be divided into [sub notebooks](/manual/basic-usage#create-new-note-and-notebook). Every (sub)notebook has a list of notes, and every note can have [tags](/manual/write-notes#tag-notes) and [statuses](/manual/managing-tasks-with-status). When the number of notebooks or their content grows, notebooks management can become a nightmare.

Inkdrop lets you gracefully organize the notebooks, declutter your workspace, and display the information that belongs to a specific notebook.

### View notebook-specific notes

When a notebook is expanded, the note list shows the notebook's direct notes only. The **Project** notebook in the image below has only one note.

![Expanded notebook](./navigating-notes_notebook_expanded.png)

When a notebook is collapsed, the note list also shows all notes of the sub notebooks. 

![Collapsed notebook](./navigating-notes_notebook_collapsed.png)

## View notebook-specific statuses and tags

By default, the sidebar shows all notebooks, statuses, and tags fetched from the database.
They're all mixed, and it can be challenging to understand which entity belongs to which notebook. 

To display entities of a specific notebook:

* Hover over the notebook and click **Detail** next to its name.  
  You can also open a notebook and press <kbd>Enter</kbd>.

The sidebar only displays notebooks, statuses, and tags of the selected notebook so you can focus on specific information.

![Disclosure button on sidebar](./notebook_detail.png)

### Mobile

To display notebook-specific entities on a mobile device:

* Select **Detail** next to the desired notebook.

![Disclosure Button on Notebook List on Mobile](./navigating-notes_sidebar-mobile.png)

## Browse viewed notes

As you view your notes, Inkdrop remembers in what order you opened them. It lets you go through the history of the viewed notes back and forth.

There're 3 options to see the viewed notes:

### Via keyboard

| MacOS                             | Windows/Linux                 | Action              |
| --------------------------------- | ----------------------------- | ------------------- |
| <kbd>Command</kbd> + <kbd>←</kbd> | <kbd>Alt</kbd> + <kbd>←</kbd> | Go to previous note |
| <kbd>Command</kbd> + <kbd>→</kbd> | <kbd>Alt</kbd> + <kbd>→</kbd> | Go to next note     |

### Via application menu

To navigate between notes via the app menu:

* Click **View** and then select **Back** or **Forward**.

### Via mouse buttons

Some computer mouses have additional buttons that you can use to navigate back and forth through your viewed notes.

### Using touchpad

Watch a short video showing how to navigate via the viewed notes using a touchpad.

<video controls playsInline muted>
  <source src="https://site-cdn.inkdrop.app/docs/manual/navigating-notes_history.mp4" type="video/mp4" />
</video>

<div class="ui info message">
  You can customize...
  The commands for the navigation actions are <a href="/manual/list-of-commands#corenavigate-back"><code>core:navigate-back</code></a> and <a href="/manual/list-of-commands#corenavigate-forward"><code>core:navigate-forward</code></a>.
</div>

