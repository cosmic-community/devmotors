import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials - DevMotors',
  description: 'Read what our clients have to say about working with us.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4"><span className="gradient-text">Testimonials</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">Hear directly from the clients we've had the pleasure of working with.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No testimonials available.</p>
        )}
      </div>
    </div>
  )
}