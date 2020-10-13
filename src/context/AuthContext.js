import React, { createContext, useState, useEffect } from 'react'
import decode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const logIn = (newToken) => {
    localStorage.setItem('buena-onda-token', newToken)
    setToken(newToken)
    setIsAuth(true)
    console.log(decode(newToken))
  }
  
  const logOut = () => {
    localStorage.removeItem('buena-onda-token')
    setToken('')
    setIsAuth(false)
  }
  

  useEffect(() => {
    const localToken = localStorage.getItem('buena-onda-token')
    if (localToken) {
      setToken(localToken)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, token, logIn, logOut
  }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
