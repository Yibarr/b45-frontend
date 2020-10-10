import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default
  <Switch>
    <Route
      exact path="/"
      component={ Home }
    />
    <Route
      exact path="/login"
      component={ Login }
    />
    <Route
      exact path="/signup"
      component={ Signup }
    />
    <Route
      component={ NotFound }
    />
  </Switch>