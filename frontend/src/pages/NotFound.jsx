import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-8xl font-bold text-[#2A2A2A]">404</h1>
        <p className="text-[#A0A0A0] text-xl mt-4 mb-8">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="text-[#E8C547] hover:text-[#F0D060] underline transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
