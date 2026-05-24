import About from './About'
import Stats from './Stats'
import FutureVision from './FutureVision'

export default function Vision() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <About />
          <Stats />
          <FutureVision />
        </div>
      </div>
    </section>
  )
}
