import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon) || '✨'
  const featuredImage = service.metadata?.featured_image

  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full transform hover:-translate-y-1">
        {featuredImage?.imgix_url && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">{name}</h3>
          {shortDesc && <p className="text-gray-600 text-sm leading-relaxed">{shortDesc}</p>}
          <div className="mt-4 text-brand-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}