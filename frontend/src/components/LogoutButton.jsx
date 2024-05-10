import axios from 'axios'
import { logoutUrl } from '../api'

export default function LogoutButton() {
  const handleLogout = (e) => {
    e.preventDefault()
    const accessToken = localStorage.getItem('accessToken')
    // Mengatur authorization header dengan token yang tersimpan
    axios.post(
      logoutUrl,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } },
      localStorage.removeItem('accessToken')
    )
  }

  return (
    <div>
      <button onClick={handleLogout} type="submit" className="btn btn-warning">
        Logout
      </button>
    </div>
  )
}
