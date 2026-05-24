import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="py-12 px-4 md:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}
