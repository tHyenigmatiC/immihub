import './index.scss'

import Link from "next/link"
import { MobileMenu } from "../Mobile/Menu"
import { Logo } from "@app/_components"

export const Navbar = () => {
    return (
        <div className="w-full border-b border-black py-2 flex items-center justify-between h-[4rem] px-4 md:px-12 lg:px-[8rem] bg-gray-100">
            <Logo />
            <MobileMenu navlinks={navLinks}/>
            <div className="hidden md:flex items-center gap-16 ">
                {
                    navLinks.map(link => (
                        <Link href={link.href} key={link.text} className="uppercase font-sans text-sm text-gray-800 hover:text-gray-500">
                            {link.text}
                        </Link>
                    ))
                }
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded shadow drop-shadow hidden md:block download-button">
                Download
            </button>
        </div>
    )
}


export const navLinks = [
    {
        text: 'Home',
        href: './'
    },
    {
        text: 'Why Immihub?',
        href: './#why-immihub'
    },
    {
        text: 'Features',
        href: './#features'
    },
    {
        text: 'Faqs',
        href: './#faqs'
    },
    {
        text: 'Contact',
        href: './#footer'
    }
]