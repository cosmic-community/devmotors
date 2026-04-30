export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && (
        <div className="text-sm font-bold uppercase tracking-wider text-brand-600 mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  )
}