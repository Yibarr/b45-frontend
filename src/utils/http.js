import axios from 'axios'

const instance = axios.create({ baseURL: "http://localhost:4000/api/v1/" })

// export const post = {}
export const user = {
  login: body => instance.post('/login', body),
  signup: body => instance.post('/signup', body)
}