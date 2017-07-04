## Compatible with CouchDB

Inkdrop provides API to "hack" your note data from remote computer.
It's called **Data Access API** which is compatible with [CouchDB](http://couchdb.apache.org/).
That means, there're already tons of libraries for CouchDB and you can choose from them in your favorite language.
We're using [PouchDB](https://github.com/pouchdb/pouchdb) for building the desktop app.

By using this API, you can make your own notebook client app with sync feature or useful utility.

## Creating API Keys

The API key is necessary for both publishing your plugins and accessing your data stored in the cloud.
To create new API key, go to [API Keys](https://www.inkdrop.info/account/api-keys) page and push "Create new API key" button.
Generated API key is not stored in the database, so be carefully and don't lose it.

## Getting your database URL

By default, Inkdrop creates a separate database for storing your data in the cloud. It has a URL for each databases.
So you already have a URL to your database after signing up to Inkdrop.

Your database URL can be checked at `Preferences -> Sync`.
You should see your specific URL on the bottom of pane like this:

![Sync Preferences](/manual/2-1-data-access-api_url.png)

The URL is something like this: `https://db.inkdrop.info/user-<user_id>`

## Accessing your database

Now you can send a request to the URL via HTTPS, but you will get an error as following:

```bash
$ curl https://db.inkdrop.info/user-<user_id>/
{"error":"unauthorized","reason":"_reader access is required for this request"}
```

Because it's protected and you can't access without any credentials.
You need to append your API keys as the credentials with HTTP Basic authentication in the request:

```
$ curl https://<access_key_id>:<secret_access_key>@db.inkdrop.info/<database_name>/
```

and you will get a response represented with JSON like following:

```JSON
{"update_seq":"2856-g1AAAAD5eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTUy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____f1YSkC0H0qgI12iJT1-SA5BMqodp_YSq1RSf1jwWIMnQAKSAuveDtDNHoDnZiLD-AxD9EOsPZAEAbTlR6A","db_name":"user-***","sizes":{"file":2171762,"external":361988,"active":705412},"purge_seq":0,"other":{"data_size":361988},"doc_del_count":94,"doc_count":218,"disk_size":2171762,"disk_format_version":6,"data_size":705412,"compact_running":false,"instance_start_time":"0"}
```

Now you got access to your database.
See [CouchDB documentation](http://docs.couchdb.org/en/1.6.1/api/) for detailed API specifications.

