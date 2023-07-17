import Image from 'next/image'

import { Navbar } from './_components/Navbar'
import { LandingSection } from './_components/Landing-Section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-2 px-24 bg-white">
      <Navbar />
      <LandingSection />
    </main>
  )
}
