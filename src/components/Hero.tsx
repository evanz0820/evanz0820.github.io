import Image from 'next/image'
import RequestFlow from '@/components/RequestFlow'

const step = (i: number) => ({ '--i': i }) as React.CSSProperties

export default function Hero() {
  return (
    <section id="top" className="grid min-h-[92svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <div className="hero-in mb-8 flex items-center gap-4" style={step(0)}>
          <Image
            src="/headshot.webp"
            alt=""
            width={56}
            height={56}
            priority
            className="h-14 w-14 rounded-full object-cover ring-1 ring-rule"
          />
          <p className="text-sm leading-snug text-muted">
            <span className="block text-base font-semibold text-ink">Evan Zhang</span>
            Business Analyst / Product Manager / Consulting
          </p>
        </div>

        <h1
          className="hero-in text-balance font-display text-[2.75rem] leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.5rem]"
          style={step(1)}
        >
          I turn what banks ask for into what engineers ship.
        </h1>

        <p className="hero-in prose-body mt-7" style={step(2)}>
          At FIS I worked between banking clients like Barclays and the engineers behind their core
          platform: gathering requirements, writing specifications, and getting fixes into production.
          I&apos;m now studying for an MS in Management at Georgia Tech&apos;s Scheller College of Business.
        </p>

        <div className="hero-in mt-9 flex flex-wrap gap-3" style={step(3)}>
          <a href="#experience" className="btn btn-primary">
            Read my experience
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-quiet">
            Open resume
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <RequestFlow />
      </div>
    </section>
  )
}
