'use client'

import { Menu } from '@headlessui/react'
import Image from 'next/image'

import HamburgerIcon from '@app/_assets/icons/hamburger.svg'
import Link from 'next/link'

type NavLink = {
    text: string
    href: string
}

type MobileMenuProps = {
    navlinks: NavLink[]
}

export const MobileMenu = ( {navlinks}: MobileMenuProps) => {
    return (
        <Menu as='div' className='block md:hidden'>
            <Menu.Button as='div' className={'border-none'}>
                <Image
                    alt='menu'
                    src={HamburgerIcon}
                    height={24}
                    width={24}
                />
            </Menu.Button>
            <Menu.Items className='flex flex-col p-4 bg-gray-900 rounded focus-visible:outline-none absolute right-1 top-[4.75rem]'>
                {
                    navlinks.map(link => (
                        <Menu.Item key={link.text}>
                            {({ active }) => (
                                <Link
                                    className={`${active && 'bg-white'} px-1 py-2 rounded text-white text-xl`}
                                    href={link.href}
                                >
                                    {link.text}
                                </Link>
                            )}
                        </Menu.Item>
                    ))
                }
            </Menu.Items>

        </Menu>
    )
}