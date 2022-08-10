import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useHistory } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    history.push('/') // redirect to home page
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>log in</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login
