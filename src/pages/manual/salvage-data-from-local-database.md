---
index: 220
category: "usage"
toc: false
path: "/manual/salvage-data-from-local-database"
title: "Salvaging Data from Local Database"
---

If you lost your password and cannot authenticate anymore, it means unfortunately that you have lost your account because [your data is encrypted in client](/security).
Please try [troubleshooting](/manual/troubleshooting#i-cant-log-in) once again in order to check if you certainly lost the account.

However, there is still a chance to salvage your data if you haven't uninstalled the desktop app yet.
It stores your data without encrypting in local database.
You can use our tool to extract data as [backup files](/manual/backing-up-your-data) from it.
Follow the below steps to try that.

## Install Inkdrop local database extractor

The tool is published on npm as [inkdrop-localdb-extract](https://www.npmjs.com/package/inkdrop-localdb-extract).

### Requirements

- [NodeJS](https://nodejs.org/) >= 12

### How to install

```sh
npm install -g inkdrop-localdb-extract
```

## How to salvage data

You got a command `inkdrop-localdb-extract`:


```sh
inkdrop-localdb-extract

Options:
  --version   Show version number                                      [boolean]
  -s, --src   The path to the source database directory
              (ex: "~/Library/Application Support/inkdrop/db/56ab08396cec2c0f87492c9a0f005f86")   [required]
  -d, --dest  The path to the destination directory                   [required]
  --help      Show help                                                [boolean]
```

Your data directory can be found at the following path:

- on macOS: `~/Library/Application Support/inkdrop/db/<USER_ID>`
- on Windows: `%APPDATA%/inkdrop/db/<USER_ID>`
- on Linux: `~/.config/inkdrop/db/<USER_ID>`

`USER_ID` looks something like `56ab08396cec2c0f87492c9a0f005f86`.

For example:

```sh
inkdrop-localdb-extract --src /path/to/db --dest /path/to/store
```
Then, you should get [backup files](/manual/backing-up-your-data) in the specified destination directory.

## Migrate data to new account

If you successfully salvaged data, now you can [restore it to new account](/manual/backing-up-your-data).
If you would like to migrate the payment information of your old account, please [contact us](mailto:contact@inkdrop.app).
We will migrate your payment information and delete the old account.

## See also

- [FAQ - I forgot my password. How to reset my password?](/faq#i-forgot-my-password-how-to-reset-my-password)
- [Troubleshooting - I can't login](/manual/troubleshooting#i-cant-log-in)
- [Recovering Your Password](/manual/recovering-your-password)
