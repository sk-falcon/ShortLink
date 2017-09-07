import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDom from 'react-dom'
import { Tracker } from 'meteor/tracker'

import { routes } from '../imports/routes/routes'

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDom.render(routes, document.getElementById('app'));
  });
});
