import React from 'react'
// import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div className="w-full h-16 bg-[rgb(155,33,231)]  text-white flex items-center">
      <div className="
  drop-shadow-[1px_1px_2px_black,0_0_1em_rgb(209,237,67),0_0_0.2em_rgb(255,247,0)]">
  Study.In
</div>

        <ul className="flex justify-evenly w-full gap-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>

    </>
  )
}
