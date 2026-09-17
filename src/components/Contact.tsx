import { Github, Linkedin, Mail } from 'lucide-react'
import Section from '@/components/Section'

const channels = [
  { label: "evanzhang3826@gmail.com", href: "mailto:evanzhang3826@gmail.com", icon: Mail, external: false },
  { label: "LinkedIn", href: "https://linkedin.com/in/evanz0820", icon: Linkedin, external: true },
  { label: "GitHub", href: "https://github.com/evanz0820", icon: Github, external: true },
]

export default function Contact() {
  return (
    <Section id="contact" title="If you need someone between the client and the code, write to me.">
      <p className="prose-body reveal">
        I&apos;m always open to conversations about business analysis, product, and consulting
        work. Email is the fastest way to reach me.
      </p>
      <ul className="reveal mt-8 space-y-1" style={{ '--i': 1 } as React.CSSProperties}>
        {channels.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group inline-flex items-center gap-3 py-2 font-display text-2xl text-ink sm:text-3xl"
            >
              <Icon aria-hidden size={20} className="text-accent" />
              <span className="link-underline">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
