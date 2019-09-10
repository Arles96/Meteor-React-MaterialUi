import './main.html';
import './font.css';
import './icon.css';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/startup/client/route';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
