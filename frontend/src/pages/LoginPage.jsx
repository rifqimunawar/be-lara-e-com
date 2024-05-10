import { useState } from 'react'
import axios from 'axios'
import { loginUrl } from '../api'

export default function LoginPage() {
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
    axios.post(loginUrl, userData).then((response) => {
      console.log(response.status, response.data, response)
    })
    // console.log(userData)
  }

  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-center items-center h-screen">
          <div className="card w-96 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="card-body items-center text-center"
            >
              <h1 className="text-4xl font-bold">Login Akun</h1>
              <label htmlFor="email my-5">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white border border-primary py-3 px-3 rounded-lg focus:outline-none"
                  value={data.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full bg-white border border-primary py-3 px-3 rounded-lg focus:outline-none"
                  value={data.password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
