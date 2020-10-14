import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js'
import { Link } from 'react-router-dom'

import {
  Navbar,
  Button
} from 'react-bootstrap'

import './Navbar.css'

const Navigation = () => {
  const { isAuth, user } = useContext(AuthContext)

  const toggleNav = () => {
    return isAuth
      ? (
        <div className="logged-nav-section">
          <Link to={`/profile/${user.id}`}>
            <span className="mr-5 username-nav" >{user.first_name}</span>
          </Link>
          <Link
              to="/logout"
          >
            <Button
              variant="warning"
            >
              Cerrar sesión
            </Button>
          </Link>
        </div>
      )
      : (
        <div>
          <Link
            to="/signup"
          >
            <Button
              variant="warning"
            >
              Registro
            </Button>
          </Link>
          <Link
            className="ml-4"
            to="/login"
          >
            <Button
              variant="warning"
            >
              Inicia sesión
            </Button>
          </Link>
        </div>
      )
  }

  return (
    <div>
      <Navbar bg="light">
        <Link to="/">
          <Navbar.Brand className="brand-nav">
            Buena onda App
          </Navbar.Brand>
        </Link>
        <div className="ml-auto">
          {
            toggleNav()
          }
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation