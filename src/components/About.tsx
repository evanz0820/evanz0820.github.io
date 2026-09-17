import Image from 'next/image'
import Section from '@/components/Section'

const toolkit = [
  {
    area: "Analysis",
    items: ["Advanced Excel", "SQL", "Python", "Tableau", "Root cause analysis"],
  },
  {
    area: "Product and delivery",
    items: ["Requirements gathering", "Business process documentation", "Stakeholder communication", "Agile and Scrum", "SDLC"],
  },
  {
    area: "Automation and tools",
    items: ["Microsoft Power Apps", "AI-assisted analysis and workflow automation (Anthropic API)", "React, FastAPI, and PostgreSQL"],
  },
]

export default function About() {
  return (
    <Section
      id="about"
      title="I’ve worked both sides of the counter: serving bank customers, then building the systems behind them."
    >
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_15rem] sm:gap-12">
        <div className="reveal space-y-5">
          <p className="prose-body">
            I started at a Wells Fargo teller window, handling more than a hundred transactions a day
            and learning how much a bank&apos;s rules shape what a customer experiences. Then at FIS
            I worked on core banking for clients like Barclays, where those same rules live in code.
          </p>
          <p className="prose-body">
            Most of that job was translation and triage. I gathered requirements for prospective
            client demos and wrote the specifications that kept BAs, developers, and sales agreed on
            scope. For Barclays, I traced recurring incidents to their root cause and cut the typical
            fix cycle from three days to a day and a half.
          </p>
          <p className="prose-body">
            I studied computer science at Georgia State and I&apos;m now adding the business side
            through Georgia Tech&apos;s MS in Management. On the side I run Tennis by Evan, a racquet
            stringing business, and play tournament tennis and competitive Valorant. I speak English
            and Mandarin natively.
          </p>
        </div>

        <div className="reveal order-first sm:order-none" style={{ '--i': 1 } as React.CSSProperties}>
          <Image
            src="/evan-tokyo.webp"
            alt="Evan Zhang in front of Tokyo Tower at night"
            width={920}
            height={1227}
            sizes="(max-width: 640px) 60vw, 240px"
            className="w-3/5 rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
        {toolkit.map((group, index) => (
          <div key={group.area} className="reveal" style={{ '--i': index } as React.CSSProperties}>
            <h3 className="mb-3 text-sm font-semibold text-ink">{group.area}</h3>
            <ul className="space-y-1.5 text-[0.9375rem] text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
