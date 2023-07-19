import { 
  LandingSection, 
  Theory, 
  Metrics, 
  AppDemoScreen, 
  Features, 
  FAQS, 
  RequestDemo 
} from '@app/_sections'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-2 px-4 md:px-40 bg-gray-100">      
      <LandingSection/>
      <Theory />
      <Metrics/>
      <AppDemoScreen />
      <Features/>
      <FAQS />
      <RequestDemo />
    </main>
  )
}
