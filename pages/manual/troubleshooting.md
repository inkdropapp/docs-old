## I can't log in

### Restart Computer

As obvious as it sounds, it's always a good first step to make sure that you restart Inkdrop as well as your computer.
Restarting the computer flushes all kinds of system states and caches, while also resetting other programs and releasing locks on files and other resources.

### Configure Web Proxy

If you are working behind a company proxy or you have a local proxy running, it's necessary to tell Inkdrop to go through it.
Please read [this documentation](/manual/working-behind-a-corporate-web-proxy) to learn how to configure.

### Investigate Firewalls

If you are inside a corporate network, it may interrupt the request.
Please ask your network administrator to allow the app to access `*.inkdrop.info`.

### Investigate Gnome Keyring on Linux

Inkdrop stores your credentials in your Keyring.
If you are not on Gnome, such as KDE, you need to install `gnome-keyring`.
