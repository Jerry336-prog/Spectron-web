import Navbar from '../dev1/components/Navbar'
import Footer from '../dev4/components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
