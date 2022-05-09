---
index: 10
category: info
path: /faq
title: Frequently Asked Questions
---

![FAQ #cover](/images/faq.svg)

## What platforms does Inkdrop run on?

Inkdrop is available for macOS 10.11.4 (El Capitan) or later, Windows 8.1 or later, and Ubuntu Linux 18.04 or later.
Mobile app is also available for iOS 13+ and Android 8.0+.

## Can I sync my data with DropBox, GoogleDrive, etc?

No. You can only sync your data with a server compatible with CouchDB.
Read the [documentation](/manual/synchronizing-in-the-cloud#how-to-set-up-your-own-sync-server) to learn how to set up your own sync server.

We’re delivering stable smooth experience to our users.
That’s why we don’t want to defocus on support of different platforms.

## I don’t trust anyone with my note. Can I run Inkdrop server myself?

Yes!
See the [documentation](/manual/synchronizing-in-the-cloud) for full instructions on setting up the sync server on your local machine.
Or you can simply use it in offline by setting from preferences.

## Why don't you support WYSIWYG or rich text editor?

No. Because Inkdrop is for people who like writing Markdown in plain text.
That allows the app to provide special features like [vim](https://my.inkdrop.app/plugins/vim) keybindings.
Providing both will end up becoming bad UX.

## Why don't you target non-programmers? You will attract more customers.

No. Inkdrop should be simple and clean.
It will never be feature-fat like a Swiss army knife.

## How can I delete my account?

You can delete your account from [here](https://my.inkdrop.app/account/delete).
You data including personal information will be deleted immediately and permanently.

If you wish to delete your account but you forgot your password, please contact us from your registered email.

## Can I deactivate my account without deleting data?

No.
Since Inkdrop is not a VC-backed startup, we don't have a budget for keeping your data without your payments.

## I forgot my password. How to reset my password?

Inkdrop cannot reset your password for security reason.
Please read [how to recover your password](/manual/recovering-your-password).

### If you think you remember your password

If you believe you know your password, but it isn’t accepted, try these steps:

- Make sure you’re typing lowercase and uppercase letters correctly. If Caps Lock is turned on, the password field shows a Caps Lock symbol ⇪.
- Try older passwords. If you’re able to log in to Inkdrop with your old password, you can then change your password.
- Type your password in another app, like a text editor, so you can see that you’ve entered it correctly. Then copy and paste it into Inkdrop.
- If you use multiple languages, make sure you’re using the correct keyboard layout when you enter your password.
- Make sure you’re typing correct email address.

## I don't remember my password but can I delete my account?

Yes, you can delete your account by receiving a link via email from [here](https://my.inkdrop.app/forgot-password).

## Do you offer student/teacher discounts?

Yes. See [this page](/student-discount) for requesting your discount.

## Any chance to get a lifetime license?

No. Because lifetime pricing is not sustainable.
We know there are similar apps with lifetime pricing out there, but it doesn't work for long-running business.
The sustainability is crucial especially for note-taking apps because you will store a lot of notes in them day by day.

## Where are my local data and config files?

You have a local data stored in here:

- on macOS: `~/Library/Application Support/inkdrop`
- on Windows: `%APPDATA%/inkdrop`
- on Linux: `~/.config/inkdrop`

The config file is `config.cson` in that directory.

## `Setup.exe` gets quarantined as a virus threat by Windows Defender

It is false positive.
Our `Setup.exe` is generated with [Squirrel](https://github.com/Squirrel/Squirrel.Windows) and apps built with it sometimes get quarantined as a virus threat which is false positive.
You’ll either have to add a policy exclusion for the `Setup.exe` runs from or whitelist the process itself.
[Lean more about this issue on our forum](https://forum.inkdrop.app/t/download-failed-setup-exe-contained-a-virus-and-was-deleted/961).

## Desktop app won't launch because it fails to load database

If you are getting an error saying `Failed to load database`, please make sure that other Inkdrop instance is not running.
If you still get the error, your local data might be corrupt or missing.
Please try moving [your local data](#where-are-my-local-data-and-config-files-) to other place and launch it again.

## Is it possible to attach files to a note?

No. Inkdrop only supports attaching images.
Please upload files to a cloud storage service and paste the URLs of them to the note.

## Billing

### How do I cancel my plan?

You can cancel your subscription by deleting your account through [the Account page](https://my.inkdrop.app/account/delete).
Please keep in mind that all created notes and uploaded images will be deleted forever.
Since Inkdrop is not like a big company, we don't have a budget for keeping your data without your payments.

### What happens if I change my plan before my next billing date?

If you switch from a monthly plan to a yearly plan, the billing date becomes the date of the switch. By default, Inkdrop prorates subscription costs. Please read the [Stripe's documentation](https://stripe.com/docs/subscriptions/upgrading-downgrading) for more detail.

### What payment methods are available?

Currently, we can accept credit and debit card payment with Visa, MasterCard, and American Express.

### Is it secure to send my card information?

We uses [Stripe.com](https://stripe.com/) for online payments. Stripe has been audited by a PCI-certified auditor and is certified to [PCI Service Provider Level 1](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe). This is the most stringent level of certification available in the payments industry. We never send and store your credit/debit card information to Inkdrop server.

Learn more: [Security at Stripe](https://stripe.com/docs/security/stripe)

### What happens if the free trial expired without adding my payment information?

Your account will be deleted and you can no longer access to your account. But you can still access your data stored in local with the app in read-only mode.

### What happens if the payment failed?

The payment fails if you have canceled your card, the card may have expired, or the payment might be declined by the bank for some other reason. Then we will send you an email notification. Inkdrop will retry failed payments up to three times:

- 1st failed attempt: Retry 3 days after the previous attempt
- 2nd failed attempt: Retry 5 days after the previous attempt
- 3rd failed attempt: Retry 7 days after the previous attempt
- Then finally: Cancel your subscription and deactivate your account

### What happens if my account has been deactivated?

Your data is kept stored on the Inkdrop server.
You can't access your notes while deactivated.
You can re-activate your account anytime.
