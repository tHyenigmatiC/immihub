
import Link from "next/link"
import { MobileMenu } from "../Mobile/Menu"

export const Navbar = () => {
    return (
        <div className="w-full border-b border-black py-2 flex items-center justify-between px-4 md:px-0">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-black rounded-full text-white flex items-center justify-center">
                    <h1 className="text-3xl font-black -tracking-widest p-0 m-0">P</h1>
                </div>
                <p className="text-2xl font-extrabold text-black tracking-wide">Payfast</p>
            </div>
            <MobileMenu navlinks={navLinks}/>
            <div className="hidden md:flex items-center gap-16 ">
                {
                    navLinks.map(link => (
                        <Link href={link.href} key={link.href} className="uppercase font-sans text-sm text-black">
                            {link.text}
                        </Link>
                    ))
                }
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded shadow drop-shadow hidden md:block">
                Download
            </button>
        </div>
    )
}


export const navLinks = [
    {
        text: 'Home',
        href: '#'
    },
    {
        text: 'Why Immihub?',
        href: './#why-immihub'
    },
    {
        text: 'Features',
        href: '#'
    },
    {
        text: 'Faqs',
        href: '#'
    },
    {
        text: 'Contact',
        href: '#'
    }
]