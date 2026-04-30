import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const clientName = getMetafieldValue(testimonial.metadata?.client_name)
  const clientRole = getMetafieldValue(testimonial.metadata?.client_role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.photo

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-full flex flex-col">
      <div className="text-5xl text-brand-500 mb-4 font-serif leading-none">"</div>
      {quote && (
        <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
          {quote}
        </blockquote>
      )}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
        {photo?.imgix_url && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            width={60}
            height={60}
            className="w-14 h-14 rounded-full object-cover"
          />
        )}
        <div>
          {clientName && <div className="font-bold text-gray-900">{clientName}</div>}
          {(clientRole || company) && (
            <div className="text-sm text-gray-600">
              {clientRole}{clientRole && company && ', '}{company}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}