// app/services/[slug]/page.tsx
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const icon = getMetafieldValue(service.metadata?.icon) || '✨'
  const featuredImage = service.metadata?.featured_image

  return (
    <article className="bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-brand-500 hover:text-brand-100 text-sm font-medium mb-4 inline-block">← All Services</Link>
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{name}</h1>
          {shortDesc && <p className="text-xl text-gray-300">{shortDesc}</p>}
        </div>
      </div>

      {featuredImage?.imgix_url && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12 relative z-10">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={1200}
            height={675}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {fullDesc && (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {fullDesc.split('\n').map((para, idx) => (
              <p key={idx} className="mb-4">{para}</p>
            ))}
          </div>
        )}
        <div className="mt-12 p-8 bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-3">Interested in this service?</h3>
          <p className="text-gray-600 mb-6">Let's discuss how we can help you succeed.</p>
          <Link href="/case-studies" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            See Our Work
          </Link>
        </div>
      </div>
    </article>
  )
}