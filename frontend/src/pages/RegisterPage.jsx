import { useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios'

export default function RegisterPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email: data.email,
      password: data.password,
    }
    axios.post('https://reqres.in/api/login', userData).then((response) => {
      console.log(response.status, response.data.token)
    })
  }

  return (
    <div>
      <NavbarComponent />
      <div className="bg-white">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h1>Login Account</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
