import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-[#E8C547] tracking-tight">
          PopcornClub
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-[#A0A0A0] hover:text-[#F5F5F5] text-sm transition-colors">
            Discover
          </Link>
          <Link to="/" className="text-[#A0A0A0] hover:text-[#F5F5F5] text-sm transition-colors">
            Sign In
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
