/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {
  static title = 'Terms of Use';

  render() {
    return (
      <div className="ui container main-content">
        <h1>Terms of Use</h1>
        <p>
        The beta version of this service is free of charge to beta users during the beta stage.
        The 'beta version' or 'private beta' is the trial period of this service until its official release which may include a change in the service name and the features it includes.
        A beta user is someone who is interested in examining and evaluating the beta version of this service for personal or business reasons.
        This terms of use are subject to change with or without notice after the initial beta sign up stage.
        </p>
        <p>
        In addition, there is no guarantee that the features and functionalities of the beta version will be included in the official release - the official version may include different features and functionalities than the beta version.
        Inkdrop is not responsible for any damage, inconvenience, or loss experienced during the beta trial period, when available, by any beta user.
        </p>
      </div>
    );
  }

}
