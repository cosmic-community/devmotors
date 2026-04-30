import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <div>
      <Hero />

      {services.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="What We Do"
              title="Our Services"
              description="Comprehensive solutions designed to drive your business forward"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            {services.length > 6 && (
              <div className="text-center mt-12">
                <Link href="/services" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  View All Services
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {caseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Work"
              title="Featured Case Studies"
              description="Real results for real clients"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
            {caseStudies.length > 3 && (
              <div className="text-center mt-12">
                <Link href="/case-studies" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  See All Case Studies
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {team.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="The People"
              title="Meet Our Team"
              description="Talented professionals dedicated to your success"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            {team.length > 4 && (
              <div className="text-center mt-12">
                <Link href="/team" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Meet the Whole Team
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to drive your project forward?</h2>
          <p className="text-xl mb-8 text-white/90">Let's build something amazing together.</p>
          <Link href="/services" className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}