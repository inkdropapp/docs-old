---
index: 1
category: 'usage'
toc: true
path: '/manual/'
title: 'Quick start'
---

Welcome to Inkdrop!

On this page, you'll find all the necessary information to start crafting notes with Inkdrop. There're 3 steps to take:

1. Create an Inkdrop account.
2. Download the app.
3. Install the app on your device.

Let's get started.

## Create Inkdrop account

First, you need to create an Inkdrop account. Your account serves many purposes and helps you to:

* Manage your personal information, including account credentials.
* Keep track of authenticated devices and IP addresses.
* Manage payments.
* Browse and publish plugins.

To create an account, go to the [Inkdrop's sign-up](https://my.inkdrop.app/signup) page.

## Download the app

Once you've created an account, Inkdrop sends a verification link to the specified email. What you need to do:

<div class="ui warning message">
<b>For Windows users</b></br></br>
There're 2 options for Windows users: installer and zip archive. Prefer the installer option as it automatically updates the app once the new versions are released.
</div>

1. Go to the link to verify the account.  
   You're redirected to the Inkdrop website.
2. Select **Download the client app**.
3. Select an installer appropriate for your operating system.  
   The download will start.

Alternatively, you can sign in to your Inkdrop account and select **Download app** as shown in the image below:

![Download](quick-start-guide_download.png)

Then select an installer appropriate for your operating system.

![Download](quick-start-guide_download2.png)

## Install Inkdrop 

### macOS

Once you downloaded the `Inkdrop-x.y.z-Mac.zip` file:

1. Double-click the downloaded file to extract the application.  
2. Drag extracted application into your **Applications** folder.

### Windows

Once you've downloaded the `Setup.exe` file, double-click it and follow the installation instruction.

### Linux

You can install Inkdrop via Snap or package.

#### via Snap

<div class="ui info message">
If you don't have <code>snapd</code> yet, please <a href="https://snapcraft.io/docs/core/install" target="_blank">install it</a> beforehand.
</div>

The app is available in [Snap Store](https://snapcraft.io/inkdrop). To install Inkdrop using snap, run the following command in the terminal:

```bash
sudo snap install inkdrop
# Allow the app to access your keyring
sudo snap connect inkdrop:password-manager-service
```

You can easily update the app by running the command below:

```bash
sudo snap refresh inkdrop
```

#### via Package

To install Inkdrop on Linux, you can download a Debian package, an RPM package, or a zip archive.

<div class="ui warning message">
These packages don't support auto-updates! You'll need to repeat the installation process to update to the latest version. Visit the <a href="https://forum.inkdrop.app/c/announcements"><b>What's new page</b></a> to keep up with the latest bug fixes and improvements.
</div>

##### Debian, Ubuntu, or related systems

```bash
wget https://api.inkdrop.app/download/linux/deb -O /tmp/inkdrop.deb && sudo dpkg -i /tmp/inkdrop.deb && rm /tmp/inkdrop.deb

# Install Inkdrop's dependencies if they are missing
sudo apt-get -f install
```

##### RedHat, Fedora, or related systems

```bash
wget https://api.inkdrop.app/download/linux/rpm -O /tmp/inkdrop.rpm && sudo yum install /tmp/inkdrop.rpm && rm /tmp/inkdrop.rpm
```

## Sign in to your account

Once you've installed Inkdrop, sign in to your account. To do that:

1. Open the app. You'll see a login screen.
2. Enter your credentials and select **LOG IN**.

![Login](quick-start-guide_login.png)
