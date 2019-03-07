Welcome to Inkdrop! Here's how to get started.
To get started with Inkdrop, we'll need to get it on your system.

## Creating your Inkdrop account

First, go to [Inkdrop website](https://inkdrop.app/) and sign up.
Inkdrop will prepare new database for storing your note data.
Also your account can be used for publishing your plugins and so on.

## Downloading the app

After you set up an account and log in, you should see a download button as shown here:

![Download](/manual/01-quick-start-guide_download.png)

Desktop application is ready for macOS, Windows and Linux, so choose one for your environment:

![Download](/manual/01-quick-start-guide_download2.png)

## Installing Inkdrop on macOS

Inkdrop follows the standard Mac zip installation process. You can download the `Inkdrop-x.y.z-Mac.zip` file from the Inkdrop website. Once you have that file, you can click on it to extract the application and then drag the new Inkdrop application into your "Applications" folder.

## Installing Inkdrop on Windows

Inkdrop is both available with a Windows installer and zip archive. The installer is recommended because it can provide auto-update features which automatically update to the latest version of the Inkdrop app.

## Installing Inkdrop on Linux

You have two options to install it.

### via Snap app

<div class="ui info message">
If you don't have <code>snapd</code> yet, please <a href="https://snapcraft.io/docs/core/install" target="_blank">install it</a> beforehand.
</div>

The app is [available on Snap Store](https://snapcraft.io/inkdrop).
You can install the app via Snap Store like following:

```bash
sudo snap install inkdrop

# Allow the app to access to your keyring
sudo snap connect inkdrop:password-manager-service
```

You may have to install some packages for keyring:

```bash
sudo apt install libgnome-keyring0 libgnome-keyring-common
```

You can easily update the app manually by running below command:

```bash
sudo snap refresh inkdrop
```

But basically you don't have to do it because the `snapd` daemon automatically checks for updates 4 times each day.

### via Package

To install Inkdrop on Linux, you can download a Debian package, a RPM package or a zip archive.
The packages do not have auto-update features.
So when you would like to upgrade to a new release of Inkdrop, you will have to repeat this installation process.

To install Atom on Debian, Ubuntu, or related systems:

```bash
# Install Inkdrop
sudo dpkg -i inkdrop_x.y.z_amd64.deb

# Install Inkdrop's dependencies if they are missing
sudo apt-get -f install
```

## Log in

When you first open Inkdrop, you should see Log-in screen like this:

![Login](/manual/01-quick-start-guide_login.png)

Enter your email address and password to get started.

