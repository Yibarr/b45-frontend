import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Logout from './pages/Logout/Logout.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'
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
    <PrivateRoute
      exact path="/logout"
      component={ Logout }
    />
    <PrivateRoute
      exact path="/profile/:id"
      component={ Profile }
    />
    <Route
      component={ NotFound }
    />
  </Switch>