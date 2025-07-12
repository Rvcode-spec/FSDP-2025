"use client"

import React from 'react'
import {PanelsTopLeft, BookAIcon, Info, CircleUser} from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function SideNav() {
  const path = usePathname()

  const  MenuOption = [

        { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeft },
        { id: 2, name: 'Course', path: '/dashboard/course', icon: BookAIcon },
        { id: 3, name: 'About', path: '/upgrade', icon: Info },
        { id: 4, name: 'Client', path: '/account', icon: CircleUser }
  ]

  return (
 <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {MenuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-7 p-5 
                          rounded-md cursor-pointer 
                          bg-purple-100 
                          hover:bg-purple-600 hover:text-white
                          transition-colors duration-200
                          ${path === item.path ? 'bg-purple-600 text-white' : ''}`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>

  )
}
