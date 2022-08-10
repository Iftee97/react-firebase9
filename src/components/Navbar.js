import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li><strong>{user.email}</strong></li>
            <li onClick={logout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
