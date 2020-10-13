import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Redirect } from 'react-router-dom'

const Logout = () => {
  const { logOut } = useContext(AuthContext)
  useEffect(() => {
    logOut()
  })
  return (
    <Redirect to="/"/>
  )
}

export default Logout
