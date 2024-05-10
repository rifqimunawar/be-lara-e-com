import { useEffect, useState } from 'react'
import axios from 'axios'
import { loginUrl } from '../api'
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [isLogin, setIsLogin] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    // Check jika user sudah login
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      setIsLogin(true)
    }
  }, [])

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
      email: data.email,
      password: data.password,
    }

    axios
      .post(loginUrl, userData)
      .then((response) => {
        const accessToken = response.data.data.access_token
        localStorage.setItem('accessToken', accessToken)
        setIsLogin(true) // Setelah berhasil login, ubah nilai isLogin menjadi true
      })
      .catch((error) => {
        console.error('Gagal login:', error.response.data.message)
        // Handle kesalahan lainnya jika diperlukan
        setError(error.response.data.message) // Set pesan kesalahan dalam variabel error
      })
  }

  // Jika user sudah login, redirect ke halaman utama
  if (isLogin) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="card-body items-center text-center"
          >
            <h1 className="text-4xl font-bold">Login Akun</h1>
            <label htmlFor="email" className="my-5">
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
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
