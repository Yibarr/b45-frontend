import React from 'react';
import { Link } from 'react-router-dom'

import {
  Navbar,
  Button,
  NavLink
} from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light">
        <Link to="/">
          <Navbar.Brand>
            Buena onda App
          </Navbar.Brand>
        </Link>
        <Link
          className="ml-auto"
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
      </Navbar>
    </div>
  )
}

export default Navigation