import React, { createContext, useState, useEffect } from 'react'
import decode from 'jwt-decode'
import { setAuthToken } from '../utils/http.js'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const logIn = (newToken) => {
    localStorage.setItem('buena-onda-token', newToken)
    const decoded = decode(newToken)
    setAuthToken(newToken)
    setUser(decoded)
    setIsAuth(true)
  }
  
  const logOut = () => {
    localStorage.removeItem('buena-onda-token')
    setUser({})
    setIsAuth(false)
  }
  
    useEffect(() => {
      const localToken = localStorage.getItem('buena-onda-token')
    if (localToken) {
      setAuthToken(localToken)
      const decoded = decode(localToken)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])
  console.log(isAuth, 'context')
  return (
    <AuthContext.Provider value={{
      isAuth, user, logIn, logOut
  }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
