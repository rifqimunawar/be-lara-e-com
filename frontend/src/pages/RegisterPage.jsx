import { useState } from 'react'
import axios from 'axios'
import { registerUrl } from '../api'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    axios
      .post(registerUrl, userData)
      .then(() => {
        setMessage('Registrasi berhasil! Silakan login.')
      })
      .catch((error) => {
        console.error('Gagal register:', error.response)
        setMessage('Registrasi gagal. Silakan coba lagi.')
      })
  }

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="card-body items-center text-center"
          >
            <h1 className="text-4xl font-bold">Registrasi Akun</h1>
            <label htmlFor="name" className="my-5">
              Nama
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white border border-primary py-3 px-3 rounded-lg focus:outline-none"
                value={data.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email" className="mb-3">
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
            <label htmlFor="password" className="mb-3">
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
            {message && <p className="text-blue-500 mt-2">{message}</p>}
            <div>
              <Link to={'/login'} className="btn btn-secondary mr-3">
                Login
              </Link>
              <button type="submit" className="btn btn-primary">
                Registrasi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
