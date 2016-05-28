import React, { Component } from 'react';

export default class extends Component {
  static title = 'Security';

  render() {
    return (
      <div className="ui container main-content">
        <h1>Security</h1>

        <h2>Transport Encryption</h2>
        <p>
          Inkdrop uses industry standard encryption to protect your data in transit.
          This is commonly referred to as transport layer security (“TLS”) or secure socket layer (“SSL”) technology.
        </p>

        <h2>Encrypted Note with Password</h2>
        <p>
        You can encrypt a note to add an extra level of protection to private information.
        Evernote uses AES (Advanced Encryption Standard) with a 256-bit key to encrypt your note content.
        </p>
        <p>
        When you encrypt note, we prompt you for a passphrase.
        We take your passphrase along with a unique salt and use PBKDF2 with 90,510 rounds of SHA-512 to derive a 256-bit AES key.
        We use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode).
        </p>
        <p>
        We never receive a copy of this key or your passphrase and don’t use any escrow mechanism to recover your encrypted data.
        This means that if you forget your passphrase, we cannot recover your data.
        </p>
      </div>
    );
  }

}

