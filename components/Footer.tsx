import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span>🚀</span>
              <span className="gradient-text">DevMotors</span>
            </h3>
            <p className="text-sm">Driving innovation through expert services and proven results.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Work</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm">Ready to drive your project forward? Let's connect.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DevMotors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}