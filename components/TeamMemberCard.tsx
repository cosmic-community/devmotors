import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const photo = member.metadata?.photo
  const email = getMetafieldValue(member.metadata?.email)
  const linkedin = getMetafieldValue(member.metadata?.linkedin)
  const bio = getMetafieldValue(member.metadata?.bio)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {photo?.imgix_url && (
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        {role && <p className="text-brand-600 font-medium text-sm mb-3">{role}</p>}
        {bio && <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{bio}</p>}
        <div className="flex gap-3 text-sm">
          {email && (
            <a href={`mailto:${email}`} className="text-gray-500 hover:text-brand-600 transition-colors">
              ✉️ Email
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-600 transition-colors">
              🔗 LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  )
}