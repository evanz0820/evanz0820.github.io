import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Section from '@/components/Section'

interface Job {
  title: string
  company: string
  dates: string
  location: string
  summary: string
  logo: string
  url: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    title: "Professional Services Engineer I",
    company: "FIS",
    dates: "Jun 2025 to Aug 2026",
    location: "Atlanta, GA",
    summary: "Requirements, client demos, and production support on core banking for clients like Barclays.",
    logo: "/fis-logo.png",
    url: "https://www.fisglobal.com",
    bullets: [
      "Designed a reusable Model Bank framework that replaced custom build work with standardized product configurations, cutting time to demo and giving presales a repeatable path to onboard prospective clients.",
      "Supported requirements gathering for 2 prospective client demos: wrote 5 specification documents and built a Power Apps intake tool that exported client data for system import, aligning BAs, developers, and sales on scope and timeline.",
      "Ran root cause analysis on 20 recurring core banking incidents for Barclays and shipped 5 MUMPS and PSL fixes to production, cutting the typical fix cycle from 3 days to 1.5.",
      "Triaged and resolved 50+ client-reported defects over 6 months with a 2 to 3 day average turnaround, coordinating status, priorities, and trade-offs between client stakeholders and FIS engineering.",
      "Documented recurring issue patterns and resolution playbooks in an internal knowledge base, cutting response time for known incidents by an estimated 30%.",
    ],
  },
  {
    title: "Teller",
    company: "Wells Fargo",
    dates: "Feb 2024 to May 2025",
    location: "Tucker, GA",
    summary: "Front-line banking: transactions, digital enrollment, and product referrals.",
    logo: "/wells-fargo-logo.png",
    url: "https://www.wellsfargo.com",
    bullets: [
      "Processed 100+ transactions and about $30K in cash daily, passing every audit with 98% all-time drawer accuracy.",
      "Led the branch in digital enrollment, moving 10+ customers a week to mobile and online banking by coaching elderly and tech-hesitant customers on ATMs, mobile deposit, and the app.",
      "Referred 10 to 15 customers a day to bankers for new accounts and products, and completed 80%+ of system-prompted product conversations, well above branch expectations.",
      "Resolved account issues at the counter and became a trusted point of contact for repeat customers.",
    ],
  },
]

const activities = [
  {
    role: "Founder, Tennis by Evan",
    detail: "Launched a racquet stringing business that reached 20+ customers and 35+ racquets in its first two months with a 24-hour turnaround. About 90% of customers came through Facebook Marketplace and groups, and 25% came back. I built the booking platform in React, FastAPI, and PostgreSQL.",
  },
  {
    role: "Lead and organizer, FIS University Social Committee",
    detail: "Planned and ran 10+ events for a 20-person cohort on a $250 monthly budget with a two-person team, in partnership with the campus manager.",
  },
  {
    role: "Member, Technology Club, Georgia Tech Scheller College of Business",
  },
  {
    role: "Family restaurant",
    detail: "I help operate my family's Chinese buffet in Athens, TN, handling customer service and day-to-day operations.",
  },
]

export default function Experience() {
  return (
    <Section id="experience" title="Each role has moved me closer to the client’s actual problem.">
      <div className="border-b border-rule">
        {jobs.map((job, index) => (
          <details
            key={job.company}
            open={index === 0}
            className="reveal group border-t border-rule first:border-t-0"
            style={{ '--i': index } as React.CSSProperties}
          >
            <summary className="flex cursor-pointer items-start gap-4 py-6 sm:gap-5">
              <span className="relative mt-0.5 h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg border border-rule bg-white">
                <Image src={job.logo} alt="" fill className="object-contain p-1.5" sizes="44px" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-display text-xl leading-snug text-ink sm:text-2xl">
                    {job.title}, {job.company}
                  </span>
                  <span className="flex-shrink-0 text-sm tabular-nums text-muted">{job.dates}</span>
                </span>
                <span className="mt-1 block text-[0.9375rem] text-muted">{job.summary}</span>
              </span>
              <ChevronDown aria-hidden size={20} className="chevron mt-1.5 flex-shrink-0 text-muted" />
            </summary>

            <div className="pb-7 sm:pl-16">
              <ul className="space-y-3">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex max-w-[64ch] gap-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                    <span aria-hidden className="mt-[0.7em] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted">
                {job.location}.{' '}
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
                  Visit {job.company}
                </a>
              </p>
            </div>
          </details>
        ))}
      </div>

      <h3 className="reveal mt-14 text-sm font-semibold text-ink">Leadership and activities</h3>
      <ul className="mt-4 space-y-5">
        {activities.map((activity, index) => (
          <li key={activity.role} className="reveal max-w-[64ch]" style={{ '--i': index } as React.CSSProperties}>
            <p className="font-display text-xl leading-snug text-ink">{activity.role}</p>
            {activity.detail && (
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{activity.detail}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
