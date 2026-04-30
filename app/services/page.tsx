import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Services - DevMotors',
  description: 'Explore our comprehensive range of professional services.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our <span className="gradient-text">Services</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">Comprehensive solutions to accelerate your business growth.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No services available at the moment.</p>
        )}
      </div>
    </div>
  )
}