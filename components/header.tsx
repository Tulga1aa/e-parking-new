import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/ " >
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <div>
                <div className="text-green-500 font-bold text-xl">EASY</div>
                <div className="text-gray-700 font-bold text-xl -mt-1">PARKING</div>
              </div>
            </div>
          </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#hero" className="text-gray-700 hover:text-green-500 font-medium">
              НҮҮР
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-500 font-medium">
              БИДНИЙ ТУХАЙ
            </Link>
            <Link href="#locations" className="text-gray-700 hover:text-green-500 font-medium">
              БАЙРШИЛУУД
            </Link>
            <Link href="./contact" className="text-gray-700 hover:text-green-500 font-medium">
              ХОЛБОО БАРИХ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
