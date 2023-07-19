import './globals.css'
import type { Metadata } from 'next'
import { Inter, Saira_Condensed } from 'next/font/google'

import { Navbar, Footer } from '@app/_components'

const inter = Inter({ 
    subsets: ['latin'], 
    display: 'swap',
    variable: '--font-inter'
})

const saira_condensed = Saira_Condensed({ 
    weight: ['400','500','600','700'], 
    subsets: ['latin'], 
    display: 'swap',
    variable: '--font-saira-condensed'
})

export const metadata: Metadata = {
  title: 'Immihub',
  description: 'Learning UI Developement - Project 1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${saira_condensed.variable}`}>
        <nav><Navbar/></nav>
        {children}
        <footer><Footer/></footer>
      </body>
    </html>
  )
}
