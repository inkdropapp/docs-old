---
index: 100
category: "usage"
path: "/manual/backing-up-your-data"
title: "Backing Up Your Data"
---

You can back up your all data to your local filesystem and restore it at anytime.
Inkdrop stores them as JSON files **continuously** while you use it. It works like local replication.
You can configure where to store from the preferences:

![Backup](./backing-up-your-data_preferences.png)

Specify the file path for the backup and then click the *'Apply'* button.
You can also input the file path easily by clicking *'...'* button which opens an dialog to select the directory.

Now your backup folder contains three directories as following:

 * **state**: The state information of backup for each client
 * **data**: Documents of your notes, notebooks, tags and attachments
 * **_deleted**: Deleted documents will be moved here. You can move files from it to the `data` folder if you would like to restore them.

To restore your backup, click the *'Restore...'* button which opens a dialog to select your backup location and then the data restore will start.

## Exporting Data as Markdown

Since the backup data is in JSON format, it is not useful in some cases.
You can export all note data in Markdown format from the application menu *File* -> *Export* -> *All Notes..*.

