## Inkdrop cannot reset your password

For [securing your data](/security), your notes are encrypted and Inkdrop must need your password to decrypt your data.
This means that if you forget your login password, we cannot recover your data and we can't even reset your password.

But there is one way to recover your password, which is to check your computer system possibly storing your password.

## Check your Keychain/Keyring in your computer

The client desktop app stores your password as same as web browser does in secure way.
On macOS the password are managed by the Keychain, on Linux it is managed by Gnome Keyring and on Windows it is managed by Credential Vault.

Note that it doesn't work if you have already logged out from Inkdrop on the client app.

<div class="ui error message">
  <div class="header">For Windows users</div>
  <p>
    Unfortunately you can't get your password from Windows Credential Vault.
  </p>
</div>

### On macOS

![Keychain Access 01](/manual/07-recovering-your-password_keychain-access-01.png)

 * Launch "**Keychain Access.app**"
 * Search with "Inkdrop"
 * Double click an item with kind of `application password`

![Keychain Access 02](/manual/07-recovering-your-password_keychain-access-02.png)

 * Click "**Show password**" check box

### On Linux (Ubuntu)

![Keyring Access 01](/manual/07-recovering-your-password_linux01.png)

 * Launch "**Passwords and Keys**"
 * Search with "Inkdrop"
 * Click an item which the name starts with `inkdrop/`

![Keyring Access 02](/manual/07-recovering-your-password_linux02.png)

 * Click "**Show password**" check box

