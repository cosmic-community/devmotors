import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const featuredImage = caseStudy.metadata?.featured_image

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full transform hover:-translate-y-1">
        {featuredImage?.imgix_url && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=900&h=506&fit=crop&auto=format,compress`}
              alt={projectTitle}
              width={450}
              height={253}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          {clientName && (
            <div className="text-xs uppercase tracking-wider text-brand-600 font-bold mb-2">{clientName}</div>
          )}
          <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors">{projectTitle}</h3>
          {summary && <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{summary}</p>}
          <div className="mt-4 text-brand-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Read case study <span>→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}