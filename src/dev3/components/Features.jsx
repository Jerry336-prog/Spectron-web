import FeatureCard from './FeatureCard'
import CompanionApp from './CompanionApp'
import MobileMockup from './MobileMockup'
import NotificationCard from './NotificationCard'

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Features & Companion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard />
          <CompanionApp />
          <MobileMockup />
          <NotificationCard />
        </div>
      </div>
    </section>
  )
}
