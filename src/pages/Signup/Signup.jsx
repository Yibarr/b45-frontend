import React, { useState } from 'react'
import { user } from '../../utils/http.js'
import {
  Form,
  Button,
  FormGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [first_name, setfirstName] = useState('')
  const [phone_number, setphoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [last_name, setlastName] = useState('')
  

//   {
//     "email": "u@devf.mx",
//     "first_name": "im back",
//     "last_name": "lala",
//     "phone_number": "5514079633",
//     "password": "123123"
// }

  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = {
        email,
        first_name,
        last_name, 
        phone_number,
        password
      }
      const response = await user.signup(body)
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleForm}>
              <FormGroup>
                <label> Email </label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ingresa un email"
                />
              </FormGroup>
              <FormGroup>
                <label> Nombre </label>
                <Form.Control
                  value={first_name}
                  onChange={e => setfirstName(e.target.value)}
                  placeholder="Ingresa tu nombre"
                />
              </FormGroup>
              <FormGroup>
                <label> Apellido </label>
                <Form.Control
                  value={last_name}
                  onChange={e => setlastName(e.target.value)}
                  placeholder="Ingresa tu apellido"
                />
              </FormGroup>
              <FormGroup>
                <label> Número teléfonico </label>
                <Form.Control
                  type="tel"
                  value={phone_number}
                  onChange={e => setphoneNumber(e.target.value)}
                  placeholder="Ingresa tu número telefónico"
                />
              </FormGroup>
              <FormGroup>
                <label> Password </label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Signup
