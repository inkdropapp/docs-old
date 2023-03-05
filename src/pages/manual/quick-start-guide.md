---
index: 1
category: 'usage'
toc: true
path: '/manual/'
title: 'Quick start'
---

Welcome to Inkdrop!
To get started with Inkdrop, we'll need to get it on your system.

## Creating your Inkdrop account

First, go to [Inkdrop website](https://inkdrop.app/) and sign up.
Inkdrop will prepare a new database for storing your note data.
Also, your account can be used for publishing your plugins and so on.

## Downloading the app

After you set up an account and log in, you should see a download button as shown here:

![Download](quick-start-guide_download.png)

Inkdrop is available for macOS, Windows, and Linux, so choose the appropriate download for your environment:

![Download](quick-start-guide_download2.png)

## Installing Inkdrop on macOS

Inkdrop follows the standard Mac zip installation process. You can download the `Inkdrop-x.y.z-Mac.zip` file from the Inkdrop website. Once you have that file, you can double-click it to extract the application and drag the new Inkdrop application into your "Applications" folder.

## Installing Inkdrop on Windows

Inkdrop is available as a Windows installer or a zip archive. The installer is the recommended option because it can provide an auto-update feature that automatically updates the Inkdrop app to the latest version.

## Installing Inkdrop on Linux

You have two options to install it.

### via Snap

<div class="ui info message">
If you don't have <code>snapd</code> yet, please <a href="https://snapcraft.io/docs/core/install" target="_blank">install it</a> beforehand.
</div>

The app is [available on Snap Store](https://snapcraft.io/inkdrop).
You can install the app from the Snap Store using the following commands:

```bash
sudo snap install inkdrop
# Allow the app to access your keyring
sudo snap connect inkdrop:password-manager-service
```

You can easily update the app by running the command below:

```bash
sudo snap refresh inkdrop
```

### via Package

To install Inkdrop on Linux, you can download a Debian package, an RPM package, or a zip archive.
These packages do not have an auto-update feature.
To update to a new version, you will have to repeat the installation process.

#### Debian, Ubuntu, or related systems

```bash
wget https://api.inkdrop.app/download/linux/deb -O /tmp/inkdrop.deb && sudo dpkg -i /tmp/inkdrop.deb && rm /tmp/inkdrop.deb

# Install Inkdrop's dependencies if they are missing
sudo apt-get -f install
```

#### RedHat, Fedora, or related systems

```bash
wget https://api.inkdrop.app/download/linux/rpm -O /tmp/inkdrop.rpm && sudo yum install /tmp/inkdrop.rpm && rm /tmp/inkdrop.rpm
```

## Log in

When you first open Inkdrop, you should see a Log-in screen like this:

![Login](quick-start-guide_login.png)

Enter your email address and password to get started.
