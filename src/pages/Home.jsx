import Hero from '../dev1/components/Hero'
import NexusMap from '../dev2/components/NexusMap'
import Features from '../dev3/components/Features'
import Vision from '../dev4/components/Vision'

export default function Home() {
  return (
    <div className="bg-[#030712]">
      <Hero />
      <NexusMap />
      <div id="features">
        <Features />
      </div>
      <div id="vision">
        <Vision />
      </div>
    </div>
  )
}
