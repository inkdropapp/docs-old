If you are working behind a company proxy or you have a local proxy running, it's necessary to tell Inkdrop to go through it.
Here is a quick tip for those dealing with a proxy.

You can configure the web proxy settings by editing `config.cson`. This config file is in following directory:

 * on macOS: `~/Library/Application Support/inkdrop/config.cson`
 * on Windows: `%APPDATA%/inkdrop/config.cson`
 * on Linux: `~/.config/inkdrop/config.cson`

Quit Inkdrop before you edit it.

```yaml
"*":
  core:
    network:
      http_proxy: "http://webproxy:8080/"
      https_proxy: "http://webproxy:8080/"
```

Now open Inkdrop and you will be able to get synced!
If the web proxy requires BASIC auth, you can just specify a URL with username and password like so:

```
http://username:password@webproxy:8080/
```

## Configuring ipm

`ipm` is also necessary to be configured for working behind a web proxy.

```bash
ipm config set proxy "http://webproxy:8080"
ipm config set https_proxy proxy "http://webproxy:8080"
```
