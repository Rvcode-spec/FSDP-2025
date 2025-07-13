"use client"

import React from 'react'
import {PanelsTopLeft, BookAIcon, Info, CircleUser, Video, Notebook} from 'lucide-react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { Button } from '@radix-ui/themes'


export default function SideNav() {
  const path = usePathname()

  const  MenuOption = [

        { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeft },
        { id: 2, name: 'Course', path: '/dashboard/course', icon: BookAIcon },
        { id: 3, name: 'About', path: '/about', icon: Info },
        { id: 4, name: 'Client', path: '/client', icon: CircleUser },
        { id: 5, name: 'Live Class', path: '/live', icon: Video },
        { id: 6, name: 'Notebook', path: '/notebook', icon: Notebook },

        
  ]

  return (
 <div className="w-full md:w-74 md::h-screen shadow-lg p-3 md:p-9">
  <div className="grid gap-2 md:gap-3 w-52  ">
    {MenuOption.map((item, index) => (
      <Link href={item.path} key={index}>
        <div
          className={`flex items-center text-2xl gap-3 md:gap-7 p-3 md:p-5
                       rounded-md cursor-pointer
                       bg-purple-100
                       hover:bg-purple-600 hover:text-white
                       transition-colors duration-200
                       ${path === item.path ? 'bg-purple-600 text-white' : ''}`}
        >
          <item.icon className="w-5 h-5 md:w-6 md:h-6" />
          <h2 className="text-sm md:text-base">{item.name}</h2>
        </div>
      </Link>
    ))}
  </div>
</div>

  )
}
