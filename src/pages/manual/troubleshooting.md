---
index: 200
category: "usage"
path: "/manual/troubleshooting"
title: "Troubleshooting"
---

## I Can't Log In

### Restart Computer

As obvious as it sounds, it's always a good first step to make sure that you restart Inkdrop as well as your computer.
Restarting the computer flushes all kinds of system states and caches, while also resetting other programs and releasing locks on files and other resources.

### Configure Web Proxy

If you are working behind a company proxy or you have a local proxy running, it's necessary to tell Inkdrop to go through it.
Please read [this documentation](/manual/working-behind-a-corporate-web-proxy) to learn how to configure.

### Investigate Firewalls

If you are inside a corporate network, it may interrupt the request.
Please ask your network administrator to allow the app to access `*.inkdrop.app`.

### Investigate Gnome Keyring on Linux

Inkdrop stores your credentials in your Keyring.
If you are not on Gnome, such as KDE, you need to install `gnome-keyring`.

### Install Missing Packages on Linux

In some environment you need some additional packages installed. Please try installing following packages:

```
sudo apt-get install libgconf2-4 libcanberra-gtk-module libgnome-keyring0 gnome-keyring
```

## Plugin Won't Work

### Update the Plugin

Check if you are using the latest version of the plugin.
You can check currently installed plugins with `ipm ls`.
You can update them with `ipm update`.

### Restart the App

You have to reload the app so that it recognizes new plugins installed.

### Found an Issue on the Plugin

If it's an official plugin, please create a topic on [our forum here](https://forum.inkdrop.app/).
If a third-party plugin, please create an issue on its GitHub repository.
