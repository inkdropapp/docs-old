As a result of a user survey, it appears that Inkdrop users are often using the app for taking notes not just about programming but also projects and meetings for their business.
These notes may include confidential information necessary to be carefully protected.

Since I'm just a single developer I can't ensure the highest network security to protect user data like a big company (though many companies are yet compromised by crackers).
But there's a way to protect data with the highest security I can do, that's data-at-rest encryption.

## What's Data at Rest Encryption

Having data encrypted will make it almost impossible for someone to access or steal a hard disk and get access to the original data.
Your whole notes stored on disk in Inkdrop database will be encrypted with a common key which is a 256-bit AES key generated automatically when first you access to the database.
We use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode).
The key is also encrypted while stored on disk, with a 256-bit AES key derived with PBKDF2 from your login password.

<div class='ui warning message'>
  <p>
    We never store a copy of this common key without encryption and don’t use any escrow mechanism to recover your encrypted data.
    This means that if you forget your login password, we cannot recover your data and we can't even reset your password.
  </p>
</div>

## 'Encrypt Note with Password' is deprecated soon

You could encrypt a note with your password on the client app before.
This feature will be deprecated soon because it's no longer needed.
It may still be necessary for a few people but that's not a scope of Inkdrop.
Please don't forget to decrypt all notes before the deprecation or you will not be able to reveal your note.

## Related documents

 * [How is Inkdrop secure?](/security)
 * [Recovering your password](/manual/recovering-your-password)
