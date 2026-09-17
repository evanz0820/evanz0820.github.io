import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Section from '@/components/Section'

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Amortly",
    description: "A fintech web app for simulating loans, making Stripe payments, and tracking a mock credit score with interactive charts.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Stripe"],
    link: "https://amortly.vercel.app/",
    image: "/projects/amortly.webp",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "A PyTorch neural network that flags fraudulent transactions, with a dashboard showing live results and model metrics.",
    tech: ["PyTorch", "Flask", "Angular", "Chart.js"],
    link: "https://fraud-detection-model-roan.vercel.app/",
    image: "/projects/fraud.webp",
  },
  {
    title: "Smart Workforce Scheduler",
    description: "A hospital staffing scheduler designed to cut overtime while keeping shifts compliant.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://smart-workforce-scheduler.vercel.app/",
    image: "/projects/scheduler.webp",
  },
  {
    title: "Rankify",
    description: "A review site where Georgia State students rate the businesses and restaurants around the downtown campus.",
    tech: ["Vue.js", "Firebase", "Google Maps API"],
    link: "https://rankify-xi.vercel.app/",
    image: "/projects/rankify.webp",
  },
  {
    title: "Hospital Management System",
    description: "A web app for running hospital operations: patient records, doctor schedules, and appointments.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/Ipelcaztreortega/fsh",
  },
  {
    title: "University Course Scheduler",
    description: "A course planning tool built with a team for Georgia State students.",
    tech: ["React", "TypeScript"],
    link: "https://github.com/GSU-Scheduler/website2",
  },
]

const featured = projects.filter((project) => project.image)
const rest = projects.filter((project) => !project.image)

export default function Projects() {
  return (
    <Section id="work" title="On my own time, I build products around money, risk, and scheduling.">
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {featured.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group block"
            style={{ '--i': index % 2 } as React.CSSProperties}
          >
            <div className="overflow-hidden rounded-xl border border-rule bg-surface">
              <Image
                src={project.image!}
                alt={`Screenshot of ${project.title}`}
                width={960}
                height={600}
                sizes="(max-width: 640px) 100vw, 380px"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-4 flex items-start justify-between gap-3 font-display text-2xl leading-snug text-ink">
              {project.title}
              <ArrowUpRight
                aria-hidden
                size={20}
                className="mt-1.5 flex-shrink-0 text-muted transition-[transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{project.description}</p>
            <p className="mt-3 text-sm text-muted/80">{project.tech.join(', ')}</p>
          </a>
        ))}
      </div>

      <ul className="mt-14 border-b border-rule">
        {rest.map((project) => (
          <li key={project.title} className="reveal border-t border-rule">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 py-5"
            >
              <span>
                <span className="block font-display text-xl text-ink">{project.title}</span>
                <span className="mt-1 block text-[0.9375rem] text-muted">{project.description}</span>
                <span className="mt-2 block text-sm text-muted/80">{project.tech.join(', ')}</span>
              </span>
              <ArrowUpRight
                aria-hidden
                size={20}
                className="mt-1 flex-shrink-0 text-muted transition-[transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
