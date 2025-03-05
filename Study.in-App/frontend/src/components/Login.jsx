import React from 'react'
import loginImg from '../assets/login-bg.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <div className='img-box'>
      <h1>Welcome Black to study.in</h1>
      <img src={loginImg} alt="Login Background" />
      </div>

      <div className='from-container'>
        <div className='close-icon'></div>
        <form>
        <h3>Login</h3>
        <input type="text" placeholder="Enter your email" required />
        <input type="password" placeholder="Password" required />
        <p><Link to='' style={{ color: 'rgb(133, 4, 4)',}}>Forget Password?</Link></p>
        <button type="submit">Log in</button>

        <p>
          Create an account if not yet please{' '}
          <Link to = "/">Sign up</Link>
        </p>
        </form>
      </div>
    </div>
  )
}
