import Section from '@/components/Section'

interface Degree {
  school: string
  degree: string
  dates: string
  detail?: string
}

const degrees: Degree[] = [
  {
    school: "Georgia Institute of Technology, Scheller College of Business",
    degree: "MS in Management",
    dates: "Expected May 2027",
    detail: "Coursework in operations strategy and project management. Member of the Technology Club.",
  },
  {
    school: "Georgia State University",
    degree: "BS in Computer Science, concentration in Data Science",
    dates: "May 2025",
    detail: "Coursework in machine learning, big data programming, database systems, and algorithms.",
  },
]

const certificates = [
  { name: "Business Analytics Certificate", issuer: "Harvard Business School Online" },
  { name: "McKinsey Forward Certificate", issuer: "McKinsey & Company" },
]

export default function Education() {
  return (
    <Section id="education" title="I’m adding a business toolkit on top of the engineering one.">
      <div className="border-b border-rule">
        {degrees.map((item, index) => (
          <div
            key={item.school}
            className="reveal border-t border-rule py-6 first:border-t-0 first:pt-0"
            style={{ '--i': index } as React.CSSProperties}
          >
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl leading-snug text-ink sm:text-2xl">{item.degree}</h3>
              <span className="flex-shrink-0 text-sm tabular-nums text-muted">{item.dates}</span>
            </div>
            <p className="mt-1 text-[0.9375rem] text-ink">{item.school}</p>
            {item.detail && (
              <p className="mt-2 max-w-[64ch] text-[0.9375rem] leading-relaxed text-muted">{item.detail}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {certificates.map((item, index) => (
          <div
            key={item.name}
            className="reveal rounded-xl bg-accent-soft p-5"
            style={{ '--i': index } as React.CSSProperties}
          >
            <h3 className="font-semibold text-ink">{item.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted">{item.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
