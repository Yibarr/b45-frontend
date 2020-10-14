import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { user, post } from '../../utils/http.js'
import {
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

import './Profile.css'

const Profile = () => {
  const { id } = useParams()
  const [profileUser, setProfileUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [postBody, setPost] = useState('')
  const [postPhoto, setPostPhoto] = useState('')
  const [permissions, setPermissions] = useState('PUBLIC')
  
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await user.get(id)
    setProfileUser(response.data)
    setUserPosts(response.data.posts)
  }
  
  const publish = async () => {
    try {
      const body = {
        permissions: permissions,
        body: postBody,
        url_photo: postPhoto
      }
      const response = await post.create(body)
      setPost('')
      setPostPhoto('')
      setPermissions('PUBLIC')
      setUserPosts(response.data.posts)
    } catch (error) {
      console.error(error.message)
    }
  }
  
  const handlePostInput = (e, callback) => {
    callback(e.target.value)
  }

  const renderPost = () => {
    return userPosts.map((post, idx) => {
      return (
        <Col key={`${post.id}_${idx}`} md={{ span: 6, offset: 3 }} >
          <Card>
            <Card.Img variant="top" src={post.url_photo} style={{maxHeight: '360px'}}/>
            <Card.Text>
              { post.body }
            </Card.Text>
          </Card>
        </Col>
      )
    })
  }
  
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4>{profileUser.last_name} {profileUser.first_name}</h4>
            </Card.Header>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="my-5">
          <Card className="px-3 pt-1 pb-3">
            <InputGroup size="sm" className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Escribe...</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                rows={4}
                aria-label="With textarea"
                aria-describedby="inputGroup-sizing-sm"
                value={postBody}
                onChange={e => handlePostInput(e, setPost)}
              /> 
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Imagen</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                value={postPhoto}
                onChange={e => handlePostInput(e, setPostPhoto)}
              />
              <InputGroup.Prepend>
                <InputGroup.Text>Permisos</InputGroup.Text>
              </InputGroup.Prepend>
                <Form.Control as="select">
                  <option>PUBLIC</option>
                  <option>PRIVATE</option>
                </Form.Control>
            </InputGroup>
            <Button onClick={publish}> Pubicar </Button>
          </Card>
        </Col>
        { renderPost() }
      </Row>
    </React.Fragment>
  )
}

export default Profile
