import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-purple-900 to-pink-900 opacity-90"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)'
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            🚀 Driving Innovation Forward
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Build Better with{' '}
            <span className="gradient-text">DevMotors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Expert services, exceptional team, and proven results. We help businesses accelerate growth through innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Explore Services
            </Link>
            <Link href="/case-studies" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}