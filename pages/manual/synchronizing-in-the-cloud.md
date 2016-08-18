Inkdrop lets you sync notes across multiple computers via Cloud.
By default, Inkdrop stores your data in Inkdrop sync server.
You can configure synchronizations in the Preferences like this:

![Sync Preferences](/manual/05-sync_preferences.png)

There are three sync options:

 * **Don't Sync** - Store Inkdrop data only in this computer
 * **Inkdrop Sync Server** - Sync with Inkdrop's own service
 * **Advanced (CouchDB)** - Sync with your own compatible server

## How to set up your own sync server

Inkdrop lets you store your notes in your own database compatible with [CouchDB](http://couchdb.apache.org/) API instead of Inkdrop's own service.
CouchDB is just another open-source NoSQL database so you can deploy it on your environment for free. See CouchDB's [installation guide](http://docs.couchdb.org/en/1.6.1/install/index.html) for more informations.
Using DBaaS instead of operating database by yourself is good choice. For instance, [Cloudant](https://cloudant.com/) is one of fully-managed DBaaS providers.

<div class="ui warning message">
  <strong>WARNING</strong>: Use this feature at your own risk. Inkdrop itself doesn't protect data from other people on your server. To protect your data, read <a href='#optional-security'>Security</a> section at the bottom of this page.
</div>

### Create a database

Once you got your CouchDB server, let's create a database for storing your notes.
You need only one database for Inkdrop. For example, run below command to create a database:

```bash
> curl -X PUT http://localhost:5984/my-inkdrop-notes
```

> NOTE: If you are running CouchDB not on localhost and port 5984 (default), replace `localhost:5984` to your server address and port.

Retrieving the list of databases shows some useful results this time:

```bash
> curl -X GET http://127.0.0.1:5984/_all_dbs
["my-inkdrop-notes"]
```

Return to the Inkdrop sync preferences, you can input the URL to your database to the **Address** section:

```
http://localhost:5984/my-inkdrop-notes
```

![Sync with custom server](/manual/05-sync-custom-server.png)

Then, push the **Apply** button.

Please read [CouchDB's tutorial](http://guide.couchdb.org/draft/tour.html) for more information.

### Optional: Security

As you may know, CouchDB is running with the Admin Party by default. It means Everybody has privileges to do anything.
Please read the [documentation](http://guide.couchdb.org/draft/security.html).
To keep your notes secure, we recommend that you create an admin user with a username and password as your credentials.

Now let’s create an admin user. We’ll call her `anna`, and her password is `secret`:

```bash
> curl -X PUT http://127.0.0.1:5984/_config/admins/anna -d '"secret"'
```

Now we have an admin user named `anna`, let's give her an admin access to `my-inkdrop-notes`:

```bash
> curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes/_security -d '{ "admins": { "names": [ "anna" ] } }'
```

It restricts access from people without the valid credentials:

```bash
> curl -X PUT http://127.0.0.1:5984/my-inkdrop-notes
{"error":"unauthorized","reason":"You are not a server admin."}
```

That looks about right. Now we try again with the correct credentials:

```bash
> HOST="http://anna:secret@127.0.0.1:5984"
> curl -X PUT $HOST/my-inkdrop-notes
{"ok":true}
```

Looks good!

Return to the Inkdrop sync preferences, you can input the URL to your database to the **Address** section:

```
http://anna:secret@127.0.0.1:5984/my-inkdrop-notes
```

<div class="ui warning message">
  <strong>WARNING</strong>: You can neither create design documents nor add attachments on the Inkdrop database.
</div>

