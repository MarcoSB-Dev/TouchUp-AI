"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'



const MobileNav = () => {
    const pathName = usePathname()

    return (
        <header className='header'>
            <Link href={'/'} className='flex items-center gap-2 md:py-2'>
                <Image
                    src={'/assets/images/logo-text.svg'}
                    alt='logo'
                    height={28}
                    width={180}
                />
            </Link>

            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />

                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src={'/assets/icons/menu.svg'}
                                alt='logo'
                                height={25}
                                width={25}
                                className='cursor-pointer'
                            />
                        </SheetTrigger>

                        <SheetContent className='sheet-content sm:w-64'>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                    <>
                                        <Image
                                            src={'/assets/images/logo-text.svg'}
                                            alt='logo'
                                            height={28}
                                            width={180}
                                        />

                                        <ul className='header-nav_elements'>
                                            {navLinks.map((currentNavLink) => {
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
                                    </>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button-bg-purple-gradient bg-cover'>
                        <Link href='/sign-in'>Log In</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav