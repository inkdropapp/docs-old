---
index: 100
category: 'hacking'
toc: true
path: '/manual/integrating-with-alfred'
title: 'Integrating with Alfred'
---

[Alfred](https://www.alfredapp.com/) is the powerful alternative to Spotlight.
By integrating Inkdrop and Alfred, you can instantly search your notes from Alfred.

## Download the Alfred Workflow

Go to [the Releases page](https://github.com/inkdropapp/inkdrop-alfred-workflow/releases) and click the file `Inkdrop.alfredworkflow`.

## Configuration

### 1. Set up the local http server

The workflow accesses your notes via HTTP locally.
You have to configure the app to open a HTTP endpoint.
See [the instruction](/manual/accessing-the-local-database/#accessing-via-http-advanced) for more detail.

### 2. Set up the workflow

Click `[x]` button to configure environment variables of the workflow.

![configure workflow][configure-1]

Specify your server configuration.

![configure server][configure-2]

## Usage

You can search using `ink {query}` in Alfred. You can use [the same qualifiers](https://docs.inkdrop.app/manual/searching-notes/#filter-notes-with-special-qualifiers) for filtering notes.

![screenshot][workflow]

[workflow]: ./integrating-with-alfred_screenshot.png 'Sample Inkdrop result'
[configure-1]: ./integrating-with-alfred_configure-workflow-1.png 'Configure workflow 01'
[configure-2]: ./integrating-with-alfred_configure-workflow-2.png 'Configure workflow 02'
