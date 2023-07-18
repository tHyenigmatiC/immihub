import { Navbar } from '@app/_components'
import { LandingSection, Theory, Metrics, DemoScreen, Features, FAQS } from '@app/_sections'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-2 px-0 md:px-36 bg-gray-100">
      <Navbar />
      <LandingSection/>
      <Theory />
      <Metrics/>
      <DemoScreen />
      <Features/>
      <FAQS />
    </main>
  )
}
