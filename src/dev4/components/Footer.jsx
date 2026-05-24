export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 mt-12 bg-white">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Spectron. All rights reserved.</p>
      </div>
    </footer>
  )
}
