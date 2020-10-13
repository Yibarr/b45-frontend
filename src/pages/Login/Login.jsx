import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../utils/http.js'
import {
  Form,
  Button,
  FormGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './Login.css'


const Login = () => {
  const { isAuth, logIn } = useContext(AuthContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = { email, password }
      const response = await auth.login(body)
      const newToken = response.data.token
      logIn(newToken)
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
                  placeholder="Enter email"
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
      { isAuth ? <Redirect to="/"/> : null}
    </React.Fragment>
  )
}

export default Login
