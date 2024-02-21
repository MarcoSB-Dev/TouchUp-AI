"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathName = usePathname()
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4 border-1'>
        <Link href='/' className='sidebar-logo'>
          <Image src='/assets/images/logo-text.svg' alt='img' width={180} height={28} />
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((currentNavLink) => {
                const isActive = currentNavLink.route == pathName
                return (
                  <li
                    key={currentNavLink.route}
                    className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'hover:text-blue-900 text-black-100'}`}>

                    <Link href={currentNavLink.route} className='sidebar-link'>
                      <Image
                        src={currentNavLink.icon}
                        alt='logo'
                        height={25}
                        width={25}
                        style={{ filter: isActive ? 'sepia(200%) saturate(500%) hue-rotate(1deg)' : 'none' }}
                      />
                      {currentNavLink.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6, navLinks.length).map((currentNavLink) => {
                const isActive = currentNavLink.route == pathName

                return (
                  <li key={currentNavLink.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'hover:text-blue-900 text-black-100'}`}>
                    <Link href={currentNavLink.route} className='sidebar-link'>
                      <Image
                        src={currentNavLink.icon}
                        alt='logo'
                        height={25}
                        width={25}
                        style={{ filter: isActive ? 'sepia(200%) saturate(500%) hue-rotate(1deg)' : 'none' }}
                      />
                      {currentNavLink.label}
                    </Link>
                  </li>
                )
              })}

              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
              
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradiaent bg-cover'>
              <Link href={`/sign-in`}></Link>
            </Button>
          </SignedOut>

        </nav >
      </div >
    </aside >
  )
}

export default Sidebar