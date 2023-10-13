---
index: 1010
category: classes
path: /reference/ipm-wrapper
title: IPM Wrapper
---

IPM (Inkdrop Package Manager) wrapper for installing/uninstalling plugins.

An instance of this class is always available as the `inkdrop.ipm` global.

While [Package Manager](/reference/package-manager) helps coordinate the lifecycle of installed packages, IPM wrapper helps invoke [the internal ipm command](https://github.com/inkdropapp/ipm) to install/uninstall packages.

## Installing packages

### ::install(pack)

| Argument | Description                                   |
| -------- | --------------------------------------------- |
| `pack`   | The package Object containing the keys:       |
|          | `name`: The package name.                     |
|          | `version`: The package version. Optional.     |
|          | `theme`: Whether the package is theme or not. |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to install the package.

### Example

```js
async function installPackage(
  pluginName: string,
  version: string,
  theme: boolean
) {
  try {
    await inkdrop.ipm.install({ name: pluginName, version, theme })
  } catch (e) {
    logger.error(e)
    logger.error('stdout:', e.stdout)
    logger.error('stderr:', e.stderr)
  }
}
```

## Updating packages

### ::update(pack, newVersion)

| Argument     | Description                                   |
| ------------ | --------------------------------------------- |
| `pack`       | The package Object containing the keys:       |
|              | `name`: The package name.                     |
|              | `theme`: Whether the package is theme or not. |
| `newVersion` | The new version.                              |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to update the package.

### Example

```js
async function updatePackage(
  pluginName: string,
  theme: boolean,
  newVersion: string
) {
  try {
    await ipm.update({ name: pluginName, theme }, newVersion)
  } catch (e) {
    logger.error(e)
    logger.error('stdout:', e.stdout)
    logger.error('stderr:', e.stderr)
  }
}
```

## Uninstalling packages

### ::uninstall(pack)

| Argument | Description                            |
| -------- | -------------------------------------- |
| `pack`   | The package Object containing the key: |
|          | `name`: The package name.              |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
Rejects if failed to uninstall the package.

### Example

```js
async function uninstallPackage(pluginName: string) {
  try {
    await ipm.uninstall({ name: pluginName })
  } catch (e) {
    logger.error(e)
    logger.error('stdout:', e.stdout)
    logger.error('stderr:', e.stderr)
  }
}
```

## Accessing the package repository

### ::getInstalled()

Retrieve the installed packages

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the information of installed packages.
Rejects if failed to get the information.

#### Example

```json
{
  "core": [],
  "user": [
    {
      "name": "breaks",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/inkdropapp/inkdrop-breaks.git"
      },
      ...
    },
    ...
  ]
}
```

### ::getOutdated()

Retrieve the packages that have a new version

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the information of installed packages.
Rejects if failed to get the information.

#### Example

```json
[
  {
    "name": "breaks",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/inkdropapp/inkdrop-breaks.git"
    },
    ...
  },
  ...
]
```

### ::getPackage(packageName)

Retrieve the package information with the specified package name.

| Argument      | Description      |
| ------------- | ---------------- |
| `packageName` | The package name |

#### Return values

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve with the retrieved package information.
Rejects if failed to get the package.

#### Example

```js
await inkdrop.ipm.getPackage('vim')
```

It returns the following json object:

````json
{
  "name": "vim",
  "main": "./lib/vim",
  "version": "2.1.7",
  "description": "vim keybindings",
  "keywords": [],
  "repository": "https://github.com/inkdropapp/inkdrop-vim",
  "license": "MIT",
  "scripts": {
    "build": "babel src/ -d lib/",
    "dev": "babel src/ -s -d lib/ --watch"
  },
  "engines": {
    "inkdrop": "^5.x"
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/preset-env": "^7.9.5",
    "@babel/preset-react": "^7.9.4",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.8.0",
    "eslint-config-prettier": "^6.10.1",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.19.0",
    "prettier": "^2.0.4"
  },
  "dist": {
    "tarball": "https://api.inkdrop.app/v1/packages/vim/versions/2.1.7/tarball"
  },
  "readme": "# vim keybindings plugin for Inkdrop\n\nProvides Vim modal control for Inkdrop, blending the best of Vim and Inkdrop.\n\n## Features\n\n- All common motions and operators, including text objects\n- Operator motion orthogonality\n- Visual mode - characterwise, linewise, blockwise\n- Incremental highlighted search (`/`, `?`, `#`, `*`, `g#`, `g*`)\n- Search/replace with confirm (:substitute, :%s)\n- Search history\n- Sort (`:sort`)\n- Marks (`,`)\n- Cross-buffer yank/paste\n- Select next/prev item in note list bar (`j` / `k`)\n- Scroll markdown preview pane\n\n## Install\n\n```sh\nipm install vim\n```\n\n## Key customizations\n\nDefault vim keymaps are defined [here](https://github.com/inkdropapp/inkdrop-vim/blob/master/keymaps/vim.json) and you can override them in your `keymap.json` file.\n\nCSS selectors for each mode:\n\n- Not insert mode: `.CodeMirror.vim-mode:not(.insert-mode):not(.key-buffering) textarea`\n- Normal mode: `.CodeMirror.vim-mode.normal-mode:not(.key-buffering) textarea`\n- Insert mode: `.CodeMirror.vim-mode.insert-mode textarea`\n- Replace mode: `.CodeMirror.vim-mode.replace-mode textarea`\n- Visual mode: `.CodeMirror.vim-mode.visual-mode:not(.key-buffering) textarea`\n\nYou can check current keybindings on the _Keybindings_ pane on preferences window:\n\n![Preferences](https://raw.githubusercontent.com/inkdropapp/inkdrop-vim/master/docs/preferences.png)\n\n## Ex Commands\n\n### `:w`, `:write`\n\nSaves current note immediately to the disk.\n\n### `:next`, `:n`\n\nOpens next note on the note list.\n\n### `:prev`\n\nOpens previous note on the note list.\n\n### `:preview`, `:p`\n\nToggles HTML preview.\n\n### `:side-by-side`, `:side`\n\nToggles side-by-side mode.\n\n## Changelog\n\n### 2.1.7\n\n- fix(typo): Number keys not working as expected (Thanks [FORTRAN](https://forum.inkdrop.app/t/vim-plugin/2228/2))\n\n### 2.1.6\n\n- fix(motion): Ignore numeric keys when a modifier key is pressed (Thanks [Basyura](https://github.com/inkdropapp/inkdrop-vim/pull/25))\n\n### 2.1.5\n\n- fix(motion): enter/space/arrow keys not working as expected while key buffering (Thanks [rcashie](https://github.com/inkdropapp/inkdrop-vim/issues/24))\n\n### 2.1.4\n\n- fix(motion): text object manipulation not working for some tokens (Thanks [rcashie](https://github.com/inkdropapp/inkdrop-vim/issues/23))\n\n### 2.1.2\n\n- fix(keymap): remove keybindings of <kbd>s h</kbd>, <kbd>s k</kbd>, <kbd>s l</kbd> since those conflict with the default vim behavior of `s` (Thanks [oniatsu-san](https://github.com/inkdropapp/inkdrop-vim/issues/19))\n\n### 2.1.1\n\n- fix(keymap): change keybinding for `vim:move-to-mark` from <kbd>\"</kbd> to <kbd>'</kbd> (Thanks [oniatsu-san](https://github.com/inkdropapp/inkdrop-vim/issues/18))\n\n### 2.1.0\n\n- feat(motion): support moving cursor up/down by display lines (<kbd>g k</kbd> / <kbd>g j</kbd>) (Thanks [jolyon129](https://github.com/inkdropapp/inkdrop-vim/issues/16))\n\n### 2.0.1\n\n- Fix a bug where `vim:scroll-full-screen-up` and `vim:scroll-full-screen-down` not working (Thanks [@basyura](https://github.com/inkdropapp/inkdrop-vim/issues/13#issuecomment-612326857))\n\n### 2.0.0\n\n- (Breaking) The command prefix has been changed from `vim-mode:` to `vim:` so that the keybindings are correctly listed in the plugin settings\n- Moving focus between panes (sidebar, note list bar, editor, note title) with `s h` / `s j` / `s k` / `s l`\n- Select next/prev item in note list bar (`j` / `k`)\n- Scroll markdown preview pane ([Thanks @trietphm](https://github.com/inkdropapp/inkdrop-vim/issues/13))\n\n### 1.0.12\n\n- fix(key-buffering): replace character with \"a\" does not work ([Thanks seachicken](https://github.com/inkdropapp/inkdrop-vim/issues/11))\n\n### 1.0.11\n\n- fix(debug): typo in debug code that causes an error\n\n### 1.0.10\n\n- fix(operatormotion): do not start key buffering for \"D\" and \"C\" operator motions (Thanks shimizu-san)\n- fix(buffering): avoid running command with 0 key while key buffering (Thanks volment)\n\n### 1.0.8\n\n- fix(keymap): handle keystrokes as text input which failed to match binding [#8](https://github.com/inkdropapp/inkdrop-vim/issues/8) (Thanks @rtmoranorg)\n\n### 1.0.7\n\n- fix(keymap): substitute keys not working [#4](https://github.com/inkdropapp/inkdrop-vim/issues/4) (Thanks @gregwebs and @giantsol)\n\n### 1.0.6\n\n- fix(keymap): 'X' in visual mode does not work [#7](https://github.com/inkdropapp/inkdrop-vim/issues/7) (Thanks [@usou](https://github.com/usou))\n\n### 1.0.5\n\n- Copy deleted text to clipboard\n- Fix invalid selectors for `vim-mode:text-object-manipulation*` keymaps again\n\n### 1.0.4\n\n- Fix invalid selectors for `vim-mode:text-object-manipulation*` keymaps\n\n### 1.0.3\n\n- Support some actions for visual mode ([diff](https://github.com/inkdropapp/inkdrop-vim/commit/4536385f6d74c5e7c7247e7c65e593108925b056))\n\n### 1.0.2\n\n- feat(visual-mode): Support insert-at-start-of-target & insert-at-end-of-target (Thanks [Vikram](https://forum.inkdrop.app/t/vim-inserting-at-beginning-of-line-or-at-target-in-visual-block-mode-doesnt-work/1397/))\n\n### 1.0.1\n\n- fix(keybuffering): Avoid buffering key after processing command\n- fix(keybuffering): Avoid incorrect key buffering\n- fix(replace): Replacing with numeric character not working\n\n### 1.0.0\n\n- feat(\\*): Support inkdrop 4.x\n\n### 0.3.2\n\n- fix(operator): Fix incorrect handling for operators\n\n### 0.3.1\n\n- fix(keymaps): Support key buffering for keys like 'd' and 'c'\n\n### 0.3.0\n\n- fix(keymaps): Support text object manipulations\n\n### 0.2.4\n\n- Support Inkdrop v3.17.1\n\n### 0.2.3\n\n- Support `ge` and `gE` (Thanks [@kiryph](https://github.com/kiryph))\n\n### 0.1.0 - First Release\n\n- Every feature added\n- Every bug fixed\n",
  "downloads": 7888,
  "stargazers_count": 0
}
````
