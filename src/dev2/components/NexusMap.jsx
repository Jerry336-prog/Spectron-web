import NetworkGraph from './NetworkGraph'
import ConnectionLines from './ConnectionLines'
import ParticleField from './ParticleField'

export default function NexusMap() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nexus Map</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NetworkGraph />
          <ConnectionLines />
          <ParticleField />
        </div>
      </div>
    </section>
  )
}
