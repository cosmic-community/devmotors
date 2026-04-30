import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - DevMotors',
  description: 'Meet the talented team behind DevMotors.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our <span className="gradient-text">Team</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">Talented professionals dedicated to your success.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {team.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No team members to display.</p>
        )}
      </div>
    </div>
  )
}