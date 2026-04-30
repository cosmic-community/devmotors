// app/case-studies/[slug]/page.tsx
import { getCaseStudy } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const featuredImage = caseStudy.metadata?.featured_image
  const relatedServices = caseStudy.metadata?.related_services || []
  const teamInvolved = caseStudy.metadata?.team_involved || []

  return (
    <article className="bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-brand-500 hover:text-brand-100 text-sm font-medium mb-4 inline-block">← All Case Studies</Link>
          {clientName && <div className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">{clientName}</div>}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{projectTitle}</h1>
          {summary && <p className="text-xl text-gray-300">{summary}</p>}
        </div>
      </div>

      {featuredImage?.imgix_url && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12 relative z-10">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={projectTitle}
            width={1200}
            height={675}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {challenge && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">🎯</div>
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-lg">
              {challenge.split('\n').map((para, idx) => (
                <p key={idx} className="mb-4">{para}</p>
              ))}
            </div>
          </section>
        )}

        {solution && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">💡</div>
              <h2 className="text-3xl font-bold">The Solution</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-lg">
              {solution.split('\n').map((para, idx) => (
                <p key={idx} className="mb-4">{para}</p>
              ))}
            </div>
          </section>
        )}

        {results && (
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">📈</div>
              <h2 className="text-3xl font-bold">The Results</h2>
            </div>
            <div className="text-gray-700 leading-relaxed text-lg">
              {results.split('\n').map((para, idx) => (
                <p key={idx} className="mb-4">{para}</p>
              ))}
            </div>
          </section>
        )}
      </div>

      {relatedServices.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Services Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => {
                const serviceName = getMetafieldValue(service.metadata?.name) || service.title
                const serviceIcon = getMetafieldValue(service.metadata?.icon) || '✨'
                return (
                  <Link key={service.id} href={`/services/${service.slug}`} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="text-3xl mb-2">{serviceIcon}</div>
                    <h3 className="font-bold text-lg">{serviceName}</h3>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {teamInvolved.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Team Involved</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamInvolved.map((member) => {
                const memberName = getMetafieldValue(member.metadata?.name) || member.title
                const memberRole = getMetafieldValue(member.metadata?.role)
                const memberPhoto = member.metadata?.photo
                return (
                  <div key={member.id} className="text-center">
                    {memberPhoto?.imgix_url && (
                      <img
                        src={`${memberPhoto.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                        alt={memberName}
                        width={120}
                        height={120}
                        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                      />
                    )}
                    <div className="font-bold">{memberName}</div>
                    {memberRole && <div className="text-sm text-gray-600">{memberRole}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}