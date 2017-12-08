## What platforms does Inkdrop run on?

Inkdrop is available for macOS 10.11.4 (El Capitan) or later, Windows 7 or later, and Ubuntu Linux 12.04 or later.
Mobile app is also available for iOS 10+ and Android 4.1+.

## Can I sync my data with DropBox, GoogleDrive, etc?

No. You can only sync your data with a server compatible with CouchDB.
Read the [documentation](/manual/synchronizing-in-the-cloud#how-to-set-up-your-own-sync-server) to learn how to set up your own sync server.

We’re delivering stable smooth experience to our users.
That’s why we don’t want to defocus on support of different platforms.

## I don’t trust anyone with my note. Can I run Inkdrop server myself?

Yes!
See the [documentation](/manual/synchronizing-in-the-cloud) for full instructions on setting up the sync server on your local machine.
Or you can simply use it in offline by setting from preferences.

## How can I delete my account?

You can delete your account from [here](https://app.inkdrop.info/account/delete).
You data will be deleted immediately.

## I forgot my password. How to reset my password?

Inkdrop cannot reset your password for security reason.
Please read [how to recover your password](/manual/recovering-your-password).

## Do you offer student discounts?

Yes. See [this page](/student-discount) for requesting your discount.

## Billing

### How do I cancel my plan?

You can cancel your subscription by deleting your account through the Account page. Please keep in mind that all created notes and uploaded images will be deleted forever.

### What happens if I change my plan before my next billing date?

If you switch from a monthly plan to a yearly plan, the billing date becomes the date of the switch. By default, Inkdrop prorates subscription costs. Please read the [Stripe's documentation](https://stripe.com/docs/subscriptions/upgrading-downgrading) for more detail.

### What payment methods are available?

Currently, we can only accept credit card payment with Visa, MasterCard, and American Express.

### Is it secure to send my credit card information?

We uses [Stripe.com](https://stripe.com/) for online payments. Stripe provides security and compliance without the headaches. We never send and store your credit card information to Inkdrop server.

Learn more: [Security at Stripe](https://stripe.com/docs/security/stripe)

### What happens if the free trial expired without adding my credit card?

Your account will be deleted and you can no longer access to your account. But you can still access your data stored in local with the app in read-only mode.

### What happens if the payment failed?

The payment fails if you have canceled your card, the card may have expired, or the payment might be declined by the bank for some other reason. Then we will send you an email notification. Inkdrop will retry failed payments up to three times:

*   1st failed attempt: Retry 3 days after the previous attempt
*   2nd failed attempt: Retry 5 days after the previous attempt
*   3rd failed attempt: Retry 7 days after the previous attempt
*   Then finally: Cancel your subscription and deactivate your account

### What happens if my account has been deactivated?

Your data is kept stored on the Inkdrop server.
You can't access your notes while deactivated.
You can re-activate your account anytime.

