---
index: 70
category: "usage"
toc: true
path: "/manual/extend-inkdrop-with-plugins"
title: "Extend Inkdrop with Plugins"
---

Plugins add new functionality or provide new look to Inkdrop. You can activate or deactivate them at any time.
Go to `Preferences > Plugins` on macOS or `File > Settings` on Windows and Linux to see a list of what’s installed.
To find new plugins to install, please access to [Inkdrop plugin registry](https://my.inkdrop.app/plugins).
For mobile, see [this section](#mobile-support).

Developers can clone or download additional Inkdrop plugins via [GitHub](https://github.com/inkdropapp/). Installation instructions are [here](#installing-plugins). Many of these are community-contributed, and the selection will continue to grow over time.

There are three types of the plugin:

- **General plugin** - Plugin that adds new functionality
- **UI Theme** - Theme for Inkdrop UI
- **Preview Theme** - Theme for Markdown preview

## Using ipm (Inkdrop Plugin Manager)

<div class="ui info message">
  Currently Inkdrop doesn't provide GUI for installing/uninstalling plugins. It's planned to support in the future.
</div>

<div class="ui message">
  ipm is a fork of <a href="https://github.com/atom/apm">apm (atom package manager)</a>, some output messages may include Atom-related though, please ignore them. 😉
</div>

<div class="ui warning message">
  If you are using beta version of the app, please note that the command name is <b>ipm-beta</b>.
</div>

**ipm** is a command-line tool to manage plugins for Inkdrop.

### macOS

When you first open Inkdrop, it will try to install the `ipm` command for use in the terminal.
If the `ipm` command has been installed, you'll see something like this:

```bash
$ which ipm
/usr/local/bin/ipm
```

You can also manually install `ipm` from `Inkdrop -> Install Shell Commands` from the menubar.

### Windows

The setup program will automatically install `ipm` command, and add it to your `PATH`.
The ipm command can be found in `%APPDATA%\inkdrop\bin`.

### Linux

`ipm` is not installed automatically.
The command is available in the path of `<path-to-inkdrop>/resources/app/ipm/bin/ipm`.
For example, on Ubuntu the path to ipm is `/usr/lib/inkdrop/resources/app/ipm/bin/ipm`.

If you have installed via Snap, `inkdrop.ipm` command is available in the path of `/snap/bin/`.

## Finding new plugins

You can also use `ipm` to find new plugins to install. If you run `ipm search`, you can search the plugin registry for a search term.

```bash
$ ipm search emoji
Search Results For 'emoji' (1)
└── markdown-emoji Add emoji syntax support to Inkdrop markdown editor (0 downloads, 0 stars)

Use `ipm install` to install them or visit https://my.inkdrop.app/plugins to read more about them.
```

## Installing plugins

Once you found new plugins to install, you can install them by using the `ipm install` command:

- `ipm install <package_name>` to install the latest version.
- `ipm install <package_name>@<package_version>` to install a specific version.

For example `ipm install markdown-emoji@0.1.0` installs the 0.1.0 release of the [markdown-emoji](https://my.inkdrop.app/plugins/markdown-emoji) package.

## Activating plugins

Go to `Preferences > Plugins` (macOS) or `File > Settings` (Windows and Linux), you can activate/deactivate plugins by toggling a switch on the left of the plugin name here.

![Activating Plugins](./extend-inkdrop-with-plugins_toggle.png)

## Updating plugins

You can update outdated plugins like so:

```sh
$ ipm update
Package Updates Available (1)
└── vim 2.0.0 -> 2.0.1

Would you like to install these updates? (yes) yes

Installing vim@2.0.1 to /Users/nora/.inkdrop/packages ✓
```

If there are no updates available, you will get:

```sh
$ ipm update
Package Updates Available (0)
└── (empty)
```

## Uninstalling plugins

You can also uninstall the plugin by running below command:

```
$ ipm uninstall <package_name>
```

## Mobile support

Some plugins are bundled in the mobile app as Markdown renderer options.
Go to `Preferences > Markdown Renderer` and you will see the list of available options:

![Advanced markdown renderer options](./extend-inkdrop-with-plugins_mobile.png)
