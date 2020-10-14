import axios from 'axios'

export const instance = axios.create(
  {
    baseURL: "http://localhost:4000/api/v1/",
    headers: {
      'Content-Type': 'application/json',
    },
  }
)

export const setAuthToken = token => {
  if (token) {
    //applying token
    instance.defaults.headers.Authorization = `Bearer ${token}`
  } else {
  //deleting the token from header
  delete instance.defaults.headers.common['Authorization']
  }
 }

export const auth = {
  login: body => instance.post('/login', body),
  signup: body => instance.post('/signup', body)
}

export const user = {
  get: id => instance.get(
    `/users/${id}`,
    { Authorization: `Bearer ${localStorage.getItem('buena-onda-token')}` }
  )
}

export const post = {
  create: body => instance.post(
    `/post`,
    body,
    { Authorization: `Bearer ${localStorage.getItem('buena-onda-token')}` }
  )
}
