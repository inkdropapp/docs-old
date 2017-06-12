import React, { Component } from 'react';
import InfopageLayout from '../components/infopage-layout';

export default class InfoPage extends Component {
  static title = 'How secure is Inkdrop?';

  render() {
    return (
      <InfopageLayout currentPageTitle={ InfoPage.title }>
        <h1 className='ui header'>
          <i className='lock icon'></i>
          <div className='content'>
            How secure is Inkdrop?
            <div className='sub header'>
              At Inkdrop, the security of your data is our highest priority.
            </div>
          </div>
        </h1>

        <h2>Transport Encryption</h2>
        <p>
          Inkdrop uses industry standard encryption to protect your data in transit.
          This is commonly referred to as transport layer security (“TLS”) or secure socket layer (“SSL”) technology.
        </p>

        <h2>Data at Rest Encryption</h2>
        <p>
          Having data encrypted will make it almost impossible for someone to access or steal a hard disk and get access to the original data.
          All your notes stored on disk in the Inkdrop database will be encrypted with a common key which is a 256-bit AES key generated when you sign up to Inkdrop.
          We use this key, along with an initialization vector, to encrypt your data in GCM (Galois/Counter Mode).
          The key is also encrypted while stored on disk, with a 256-bit AES key derived with PBKDF2 from your login password.
        </p>

        <div className='ui warning message'>
          <p>
            We never store a copy of this common key without encryption and don’t use any escrow mechanism to recover your encrypted data.
            This means that if you forget your login password, we cannot recover your data and we can't even reset your password.
          </p>
        </div>
      </InfopageLayout>
    );
  }

}

