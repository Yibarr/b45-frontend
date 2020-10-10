import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './Login.css'


const Login = () => {



  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <label> Email </label>
                <Form.Control type="email" placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                <label> Password </label>
                <Form.Control type="password" placeholder="Password" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Login
