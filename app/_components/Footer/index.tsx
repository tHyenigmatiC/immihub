/* eslint-disable react/display-name */
import Image from "next/image"

import { Logo } from "@app/_components"
import ChevronUpIcon from '@app/_assets/icons/chevronup-white.svg'
import Link from "next/link"

type FooterProps = {
    children: React.ReactNode | React.ReactNode[]
}

type FooterLinkProps = {
    href: string,
    text: string
}

export const Footer = () => {
    return (
        <div className="border-t border-black bg-gray-100">
            <Footer.Content>
                <Footer.Row>
                    {/* Footer column with Logo */}
                    <Footer.Col>
                        <Logo />
                        <div className="mt-12">
                            <p className="uppercase text-sm text-gray-700">*subscribe to our newsletter*</p>
                            <div className="flex items-center relative mt-2">
                                <input
                                    type='text'
                                    placeholder="Enter your e-mail"
                                    className="rounded-full w-[14rem] bg-gray-200 py-2 px-4"
                                />
                                <button className="w-9 h-9 rounded-full -ml-5 bg-gray-800 hover:bg-gray-600 flex items-center justify-center">
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        style={{objectFit:"cover"}}
                                        className='rotate-90 transform h-[1.1rem] w-[1.1rem] abolute'
                                    />
                                </button>
                            </div>
                        </div>
                    </Footer.Col>

                    {/* Footer Links */}
                    {
                        footerLinks.map(footerLink => (
                            <Footer.Col key={footerLink.title}>
                                <Footer.Title>
                                    {footerLink.title}
                                </Footer.Title>
                                {
                                    footerLink.links.map(link => (
                                        <Footer.Link key={link.text} href={link.herf} text={link.text} />
                                    ))
                                }
                            </Footer.Col>
                        ))
                    }
                </Footer.Row>
            </Footer.Content>
            <Footer.Tail>
                <p>Copyright&#12539;©&#12539;2020 Immihub</p>
                <div className="flex items-center gap-4">
                    <Link href='#'>
                        Privacy Policy
                    </Link>
                    <Link href='#'>
                        Terms & Conditions
                    </Link>
                </div>
            </Footer.Tail>
        </div>
    )
}


Footer.Content = ({ children } : FooterProps) => (
    <div className="px-0 md:px-40 py-16">
        {children}
    </div>
)


Footer.Row = ({ children }: FooterProps) => (
    <div className="grid grid-cols-2 md:grid-cols-6  grid-flow-row gap-y-12 gap-x-4 md:gap-y-0">
        {children}
    </div>
)

Footer.Col = ({ children} : FooterProps) => (
<div className="flex col-span-1 first:col-span-2 flex-col items-center md:items-start justify-start gap-4">
        {children}
    </div>
)

Footer.Title = ( { children }: FooterProps ) => (
    <p className='uppercase text-gray-800 text-sm'>{children}</p>
)


Footer.Link = ( { text, href }: FooterLinkProps ) => (
    <Link href={href} className="text-xs text-gray-600">
        {text}
    </Link>
)


Footer.Tail = ({ children }:FooterProps) => (
    <div className="bg-gray-800 text-white flex items-center justify-between px-4 md:px-40 py-3 text-xs">
        {children}
    </div>
)


const footerLinks = [
    {
        title: 'overview',
        links: [
            {
                text: 'Homepage',
                herf: './'
            },
            {
                text: 'Pricing',
                herf: '#'
            },
            {
                text: 'Features',
                herf: './#features'
            },
            {
                text: 'About us',
                herf: '#'
            },
            {
                text: 'Contact',
                herf: '#'
            },
        ]
    },
    {
        title: 'Product',
        links: [
            {
                text: 'Integration',
                herf: '#'
            },
            {
                text: 'Download',
                herf: '#'
            },
            {
                text: 'Login',
                herf: '#'
            }
        ]
    },
    {
        title: 'pages',
        links: [
            {
                text: 'Blog',
                herf: '#'
            },
            {
                text: 'Blog Post',
                herf: '#'
            },
            {
                text: 'Resources',
                herf: '#'
            },
            {
                text: 'Case Study',
                herf: '#'
            }
        ]
    },
    {
        title: 'utilities',
        links: [
            {
                text: 'Style guide',
                herf: '#'
            },
            {
                text: 'Licesnse',
                herf: '#'
            },
            {
                text: 'Changelog',
                herf: '#'
            }
        ]
    }
]