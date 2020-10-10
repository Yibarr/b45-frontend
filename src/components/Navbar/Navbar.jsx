import React from 'react';

import {
  Navbar,
  Button
} from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>
      
      <Navbar bg="light">
        <Navbar.Brand>
          <h1>Aplicación buena onda</h1>
        </Navbar.Brand>
        <Button className="ml-auto" variant="warning">Registro</Button>
        <Button className="ml-4" variant="warning">Inicia sesión</Button>
      </Navbar>
    </div>
  )
}

export default Navigation