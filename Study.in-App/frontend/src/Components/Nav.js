import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div className="w-full h-16 bg-[rgb(155,33,231)]  text-white flex items-center">
        <ul className="flex justify-evenly w-full gap-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

    </>
  )
}
