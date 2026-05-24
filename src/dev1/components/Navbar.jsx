export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-xl">Spectron</span>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
        </div>
      </div>
    </nav>
  )
}
