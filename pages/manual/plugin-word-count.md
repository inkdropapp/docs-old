Let's get started by writing a very simple plugin and looking at some of the tools needed to develop one effectively. We'll start by writing a plugin that tells you how many words are in the current editor and display it in a small modal window.

## Scaffolding your plugin

You can generate code scaffolding by running following command:

```bash
$ ipm init -p wordcount
```

You can see that `ipm` has created about a dozen files that make up the plugin. Let's take a look at each of them to get an idea of how a plugin is structured, then we can modify them to get our word count functionality.

The basic plugin layout is as follows:

```
word-counter/
├── keymaps
│   └── wordcount.json
├── lib
│   ├── wordcount-message-dialog.js
│   └── wordcount.js
├── menus
│   └── wordcount.json
├── package.json
└── styles
    └── wordcount.less
```

Not every plugin will have (or need) all of these directories. Let's see what some of these are so we can start messing with them.

### package.json

Similar to [Node modules](https://docs.npmjs.com/getting-started/what-is-npm), Inkdrop plugins contain a `package.json` file in their top-level directory. This file contains metadata about the plugin, such as the path to its "main" module, library dependencies, and manifests specifying the order in which its resources should be loaded.

In addition to some of the regular [Node `package.json` keys](https://docs.npmjs.com/files/package.json) available, Inkdrop `package.json` files have their own additions.

 * `main`: the path to the JavaScript file that's the entry point to your package. If this is missing, Inkdrop will default to looking for an `index.js` or `index.coffee`.
 * `styles`: an Array of Strings identifying the order of the style sheets your plugin needs to load. If not specified, style sheets in the `styles` directory are added alphabetically.
 * `keymaps`: an Array of Strings identifying the order of the key mappings your plugin needs to load. If not specified, mappings in the `keymaps` directory are added alphabetically.
 * `menus`: an Array of Strings identifying the order of the menu mappings your plugin needs to load. If not specified, mappings in the `menus` directory are added alphabetically.

The `package.json` in the plugin we've just generated looks like this currently:

```json
{
  "name": "wordcount",
  "main": "./lib/wordcount",
  "version": "0.0.0",
  "description": "A short description of your package",
  "keywords": [
  ],
  "repository": "https://github.com/inkdropapp/wordcount",
  "license": "MIT",
  "engines": {
    "inkdrop": ">=0.9.0 <2.0.0"
  },
  "dependencies": {
  }
}
```

One of the first things you should do is ensure that this information is filled out. The name, description, repository URL the project will be at, and the license can all be filled out immediately. The other information we'll get into more detail on as we go.

<div class="ui warning message">
<strong>Warning</strong>: Do not forget to update the repository URL. The one generated for you is invalid by design and will prevent you from publishing your package until updated.
</div>

### Source Code

If you want to extend Inkdrop's behavior, your plugin should contain a single top-level module, which you export from whichever file is indicated by the `main` key in your `package.json` file. In the plugin we just generated, the main package file is `lib/wordcount.js`. The remainder of your code should be placed in the lib directory, and required from your top-level file. If the `main` key is not in your `package.json` file, it will look for `index.coffee` or `index.js` as the main entry point.

Your plugin's top-level module is a singleton object that manages the lifecycle of your extensions to Inkdrop. Even if your plugin creates ten different components and appends them to different parts of the DOM, it's all managed from your top-level object.

Your plugin's top-level module can implement the following basic methods:

 * `activate()`: This **optional** method is called when your plugin is activated. Use this to do initialization work when your plugin is started (like setting up React Components or binding events).
 * `deactivate()`: This **optional** method is called when the window is shutting down. If your plugin is watching any files or holding external resources in any other way, release them here. If you're just subscribing to things on window, you don't need to worry because that's getting torn down anyway.

### Style Sheets

Style sheets for your plugin should be placed in the `styles` directory. Any style sheets in this directory will be loaded and attached to the DOM when your plugin is activated. Style sheets can be written as CSS or [Less](http://lesscss.org/), but Less is recommended.

Ideally, you won't need much in the way of styling. Inkdrop's styles are based on [Semantic UI](http://semantic-ui.com/) which provides a standard set of components which define both the colors and UI elements for any plugin that fits into Inkdrop seamlessly. 

If you *do* need special styling, try to keep only structural styles in the plugin style sheets. If you must specify colors and sizing, these should be taken from the pre-defined CSS Variables where you can find at [variables.less](https://github.com/inkdropapp/inkdrop-ui-theme-template/blob/master/src/definitions/globals/variables.less) like this:

```less
.special-button.highlighted {
  background-color: var(--highlight-background);
}
```

An optional `styles` array in your `package.json` can list the style sheets by name to specify a loading order; otherwise, style sheets are loaded alphabetically.

### Keymaps

You can provide key bindings for commonly used actions for your extension, especially if you're also adding a new command. In our new plugin, we have a keymap filled in for us already in the `keymaps/wordcount.json` file:

```json
{
  "body": {
    "ctrl-alt-o": "wordcount:toggle"
  }
}
```

This means that if you press `Alt+Ctrl+O`, our package will run the `wordcount:toggle` command. We'll look at that code next, but if you want to change the default key mapping, you can do that in this file.

Keymaps are placed in the `keymaps` subdirectory. By default, all keymaps are loaded in alphabetical order. An optional `keymaps` array in your `package.json` can specify which keymaps to load and in what order.

Keybindings are executed by determining which element the keypress occurred on. In the example above, the `wordcount:toggle` command is executed when pressing `Alt+Ctrl+O` on the `body` element. This means the key combination will work anywhere in the application.

### Menus

Menus are placed in the `menus` subdirectory. This defines menu elements like what pops up when you right click a context-menu or would go in the application menu to trigger functionality in your plugin.

By default, all menus are loaded in alphabetical order. An optional `menus` array in your `package.json` can specify which menus to load and in what order.

### Application Menu

It's recommended that you create an application menu item under the *Plugins* menu for common actions with your plugin that aren't tied to a specific element. If we look in the `menus/wordcount.json` file that was generated for us, we'll see a section that looks like this:

```json
{
  "menu": [
    {
      "label": "Plugins",
      "submenu": [
        {
          "label": "Word Count",
          "submenu": [
            {
              "label": "Toggle",
              "command": "wordcount:toggle"
            }
          ]
        }
      ]
    }
  ]
}
```

This section puts a "Toggle" menu item under a menu group named "Your Name Word Count" in the "Plugins" menu.

![Application Menu](/manual/2-3-plugin-word-count-application-menu.png)

When you select that menu item, it will run the `wordcount:toggle` command, which we'll look at in a bit.

The menu templates you specify are merged with all other templates provided by other plugins in the order which they were loaded.

### Context Menu

It's recommended to specify a context menu item for commands that are linked to specific parts of the interface. In our `menus/wordcount.json` file, we can see an auto-generated section that looks like this:

```json
{
  "context-menu": {
    ".CodeMirror": [
      {
        "label": "Toggle Word Count",
        "command": "empty:toggle"
      }
    ]
  }
}
```

This adds a "Toggle Word Count" menu option to the menu that pops up when you right-click in an Inkdrop text editor pane.

![Context Menu](/manual/2-3-plugin-word-count-context-menu.png)

When you click that it will again run the `wordcount:toggle` method in your code.

Context menus are created by determining which element was selected and then adding all of the menu items whose selectors match that element (in the order which they were loaded). The process is then repeated for the elements until reaching the top of the DOM tree.

You can also add separators and submenus to your context menus. To add a submenu, provide a `submenu` key instead of a command. To add a separator, add an item with a single `type: 'separator'` key/value pair. For instance, you could do something like this:

```json
{
  "context-menu": {
    "body": [
      {
        "label": 'Text'
        "submenu": [
          {"label": 'Copy Selected Text', "command": 'core:copy'}
          {"type": 'separator'}
          {"label": 'Selector All', "command": 'core:select-all'}
          {"type": 'separator'}
          {"label": 'Undo', "command": 'core:undo'}
        ]
      }
    ]
  }
}
```

## Developing Our Plugin

Currently with the generated package we have, if we run that `wordcount:toggle` command through the menu or the command palette, we'll get a dialog that says "Word Count was toggled!".

![Dialog](/manual/2-3-plugin-word-count-dialog.png)

### Understanding the Generated Code

Let's take a look at the code in our `lib` directory and see what is happening.

There are two files in our lib directory. One is the main file (`lib/wordcount.js`), which is pointed to in the `package.json` file as the main file to execute for this plugin. This file handles the logic of the whole plugin.

The second file is a React Component class, `lib/wordcount-message-dialog.js`, which handles the UI elements of the plugin. Let's look at this file first:

```jsx
'use babel';

import { React } from 'inkdrop';
import { CompositeDisposable } from 'inkdrop';

export default class WordcountMessageDialog extends React.Component {

  componentWillMount () {
    // Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(inkdrop.commands.add(document.body, {
      'wordcount:toggle': () => this.toggle()
    }));
  }

  componentWillUnmount () {
    this.subscriptions.dispose();
  }

  render() {
    const { MessageDialog } = inkdrop.components.classes;
    return (
      <MessageDialog ref='dialog' title='Word Count'>
        Word Count was toggled!
      </MessageDialog>
    );
  }

  toggle() {
    console.log('Wordcount was toggled!');
    const { dialog } = this.refs;
    if (!dialog.isShown) {
      dialog.showDialog();
    } else {
      dialog.dismissDialog();
    }
  }
}
```

Inkdrop is built with [React](https://facebook.github.io/react/), and you can make UI components with it.
The `WordcountMessageDialog` defines a React Component which shows a modal message dialog on toggling from the command.
This component implements following four methods:

 * `componentWillMount` - invoked once, immediately before the initial rendering occurs. See [here](https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount) for more information.
 * `componentWillUnmount` - invoked once, immediately before a component is unmounted from the DOM. See [here](https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount) for more information.
 * `render` - invoked when React renders your component. See [here](https://facebook.github.io/react/docs/tutorial.html) for more information.
 * `toggle` - invoked when `wordcount:toggle` is dispatched.

In the `componentWillMount` method, it creates an instance of the `CompositeDisposable` class so it can register all the commands that can be called from the plugin so other plugins could subscribe to these events.

The second file we have is the main entry point to the plugin. Again, because it's referenced in the `package.json` file. Let's take a look at that file, it's pretty simple:

```js
'use babel';

import WordcountMessageDialog from './wordcount-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(WordcountMessageDialog);
    inkdrop.layouts.addComponentToLayout('modals', 'WordcountMessageDialog');
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout('modals', 'WordcountMessageDialog');
    inkdrop.components.deleteClass(WordcountMessageDialog);
  }

};
```

In the `activate` method called on activation of the plugin, it registers the `WordcountMessageDialog` class to a Inkdrop component registry and adds it to a hidden modal collection.

### The Flow

So, let's review the actual flow in this plugin.

1. Inkdrop starts up
2. Inkdrop starts loading plugins
3. Inkdrop reads your `package.json`
4. Inkdrop loads keymaps, menus, styles and the main module
5. Inkdrop finishes loading plugins
6. Inkdrop executes the `activate` method in your main module which sets up the UI by creating the hidden modal message dialog
7. Inkdrop executes the plugin command `wordcount:toggle` which reveals the hidden modal message dialog
8. At some point, the user executes the `wordcount:toggle` command again
9. Inkdrop executes the command which hides the modal message dialog

## Counting the Words

So now that we understand what is happening, let's modify the code so that our little modal message dialog shows us the current word count instead of static text.

We'll do this in a very simple way. When the dialog is toggled, we'll count the words right before displaying the modal. So let's do this in the `toggle` command. If we add some code to count the words and ask the React component to update itself, we'll have something like this in `lib/wordcount-message-dialog.js`:

```js
  componentWillMount () {
    /* ... */

    this.setState({ words: 0 });
  }
```

```js
  toggle() {
    console.log('WordCount was toggled!');
    const { dialog } = this.refs;
    if (!dialog.isShown) {
      const editor = inkdrop.getActiveEditor()
      const words = editor.getText().split(/\s+/).length;
      this.setState({ words });
      dialog.showDialog();
    } else {
      dialog.dismissDialog();
    }
  }
```

Let's look at the 4 lines we've added. First we set a `words` to `0` by calling `setState` method. Second we get an instance of the current editor object (where our text to count is) by calling `inkdrop.getActiveTextEditor()`.

Next we get the number of words by calling `getText()` on our new editor object, then splitting that text on whitespace with a regular expression and then getting the length of that array.

Finally, we tell our message dialog to update the word count it displays by calling the `setState()` method on our dialog and then showing the modal again. Let's add a code to display the word count through the `render` method of our `lib/wordcount-message-dialog.js` file:

```js
  render() {
    const { MessageDialog } = inkdrop.components.classes;
    return (
      <MessageDialog ref='dialog' title='Word Count'>
        There are { this.state.words } words.
      </MessageDialog>
    );
  }
```

Pretty simple! We take the count number that was passed in and place it into a string that we then stick into the element that our component is controlling.

![Word count](/manual/2-3-plugin-word-count-display-count.png)

## Basic Debugging

You'll notice a few `console.log` statements in the code. One of the cool things about Inkdrop being built on Chromium is that you can use some of the same debugging tools available to you that you have when doing web development.

To open up the Developer Console, press `Alt+Cmd+I`, or choose the menu option *Developer > Toggle Developer Tools*.

![Application Menu](/manual/2-2-create-new-theme-devtools.png)

From here you can inspect objects, run code and view console output just as though you were debugging a web site.

## Publishing

Now that our simple plugin is working and tested, let's go ahead and publish it so it's available to the world.

Inkdrop bundles a command line utility called `ipm` which we first used back in [Using ipm (Inkdrop Plugin Manager)](/manual/extend-inkdrop-with-plugins#using-ipm-inkdrop-plugin-manager-) to search for and install plugins via the command line. The `ipm` command can also be used to publish Inkdrop plugins to the public registry and update them.

### Prepare Your Package

There are a few things you should double check before publishing:

 * Your `package.json` file has `name`, `description`, and `repository` fields.
 * Your `package.json` file has a `version` field with a value of "0.0.0".
 * Your `package.json` file has an `engines` field that contains an entry for Inkdrop such as: `"engines": {"inkdrop": ">=0.9.0 <2.0.0"}`.
 * Your plugin has a `README.md` file at the root.
 * Change the repository url in the `package.json` file to match the URL of your repository.
 * Your plugin is in a Git repository that has been pushed to [GitHub](https://github.com/). Follow [this guide](http://guides.github.com/overviews/desktop) if your plugin isn't already on GitHub.

### Publish Your Package

Before you publish a plugin it is a good idea to check ahead of time if a plugin with the same name has already been published to the [Inkdrop package registry](https://www.inkdrop.info/plugins).
You can do that by visiting https://www.inkdrop.info/plugin/wordcount to see if the plugin already exists. 
If it does, update your plugin's name to something that is available before proceeding.

Now let's review what the `ipm publish` command does:

1. Registers the plugin name on www.inkdrop.info if it is being published for the first time.
2. Updates the `version` field in the `package.json` file and commits it.
3. Creates a new [Git tag](http://git-scm.com/book/en/Git-Basics-Tagging) for the version being published.
4. Pushes the tag and current branch up to GitHub.
5. Updates www.inkdrop.info with the new version being published.

Now run the following commands to publish your package:

```bash
cd ~/github/my-package
ipm publish minor
```

If this is the first package you are publishing, the `ipm publish` command may prompt you for your Inkdrop API Keys which can be created [here](https://www.inkdrop.info/account/api-keys) on the Inkdrop website. This is required to publish and you only need to enter this information the first time you publish. The credentials are stored securely in your [keychain](https://en.wikipedia.org/wiki/Keychain_(Apple)) once you login.

Your package is now published and available on www.inkdrop.info. Head on over to https://www.inkdrop.info/plugins/wordcount to see your plugin's page.

With `ipm publish`, you can bump the version and publish by using

```
$ ipm publish <version-type>
```

where `<version-type>` can be `major`, `minor` and `patch`.

The `major` option to the publish command tells ipm to increment the first number of the version before publishing so the published version will be `1.0.0` and the Git tag created will be `v1.0.0`.

The `minor` option to the publish command tells ipm to increment the second number of the version before publishing so the published version will be `0.1.0` and the Git tag created will be `v0.1.0`.

The `patch` option to the publish command tells ipm to increment the third number of the version before publishing so the published version will be `0.0.1` and the Git tag created will be `v0.0.1`.

Use `major` when you make a change that breaks backwards compatibility, like changing defaults or removing features. Use `minor` when adding new functionality or making improvements on existing code. Use `patch` when you fix a bug that was causing incorrect behaviour. Check out [semantic versioning](http://semver.org/) to learn more about best practices for versioning your plugin releases.

You can also run `ipm help publish` to see all the available options and `ipm help` to see all the other available commands.

## Summary

We've now generated, customized and published our first plugin for Inkdrop. Congratulations! Now anyone can install our masterpiece from directly within Inkdrop as we did in [Extend Inkdrop with Plugins](http://localhost:3005/manual/extend-inkdrop-with-plugins).

