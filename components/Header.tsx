import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-3xl">🚀</span>
            <span className="gradient-text">DevMotors</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="hover:text-brand-500 transition-colors font-medium">Services</Link>
            <Link href="/team" className="hover:text-brand-500 transition-colors font-medium">Team</Link>
            <Link href="/case-studies" className="hover:text-brand-500 transition-colors font-medium">Case Studies</Link>
            <Link href="/testimonials" className="hover:text-brand-500 transition-colors font-medium">Testimonials</Link>
          </nav>
          <Link href="/services" className="hidden md:inline-block bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 px-5 py-2 rounded-lg font-semibold transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}