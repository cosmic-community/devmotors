import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl mb-4">🚀</div>
        <h1 className="text-5xl font-extrabold mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">The page you're looking for has driven off the road.</p>
        <Link href="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}