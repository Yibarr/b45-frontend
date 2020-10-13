
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import {
  Route,
} from 'react-router-dom'
import {
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component, ...RouteProps }) => {
  const { isAuth } = useContext(AuthContext)
  const validateAuth = (props) => {
    const Component = component
    return isAuth
      ? (<Component {...props}/>)
      : (<Redirect to="/login" />)
  }
  return (
      <Route
        {...RouteProps}
        render={
          props => (validateAuth(props))
        }
      />
  )
}

export default PrivateRoute