import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div className="w-full h-16 bg-[rgb(143,52,199)]  text-white flex items-center">
        <ul className="flex justify-evenly w-full gap-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to = "/Login">Login</Link></li>
          <li><Link to = "/SignUp">SignUp</Link></li>
        </ul>
      </div>

    </>
  )
}
