import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Login from '../ui/Login'
import SignUp from '../ui/SignUp'
import Links from '../ui/Links'
import NotFound from '../ui/NotFound'

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/links" component={Links}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
