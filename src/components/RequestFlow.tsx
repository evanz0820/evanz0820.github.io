import { Check } from 'lucide-react'

const criteria = [
  "Scope and timeline agreed by BAs, developers, and sales",
  "Client data collected through a Power Apps intake tool",
  "Products configured from the Model Bank framework, not custom built",
]

// The hero's one animated moment: a client request becoming shipped software.
// Timing lives in globals.css (.flow-step / .flow-line / .flow-check) and is CSS-only.
export default function RequestFlow() {
  return (
    <figure className="hero-in rounded-2xl border border-rule bg-surface p-5 shadow-[0_24px_60px_-32px_rgb(var(--ink)/0.35)] sm:p-7" style={{ '--i': 3 } as React.CSSProperties}>
      <figcaption className="mb-5 text-sm text-muted">
        How a request moves through my hands
      </figcaption>

      <ol className="space-y-0">
        <li className="flow-step" style={{ '--step': 0 } as React.CSSProperties}>
          <p className="text-sm font-semibold text-ink">The client asks</p>
          <p className="mt-1.5 font-display text-xl leading-snug text-ink sm:text-[1.375rem]">
            &ldquo;Show us our products running in your system before we sign.&rdquo;
          </p>
        </li>

        <li aria-hidden className="flow-line ml-3 h-8 w-px bg-accent" style={{ '--step': 0 } as React.CSSProperties} />

        <li className="flow-step" style={{ '--step': 1 } as React.CSSProperties}>
          <p className="text-sm font-semibold text-ink">I write what &ldquo;done&rdquo; means</p>
          <ul className="mt-2 space-y-1.5">
            {criteria.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-[0.55em] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </li>

        <li aria-hidden className="flow-line ml-3 h-8 w-px bg-accent" style={{ '--step': 1 } as React.CSSProperties} />

        <li className="flow-step flex items-center gap-3" style={{ '--step': 2 } as React.CSSProperties}>
          <span className="flow-check flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
            <Check size={14} strokeWidth={3} />
          </span>
          <p className="text-sm text-ink">
            <span className="font-semibold">The team delivers the demo,</span>{' '}
            <span className="text-muted">and presales gets a repeatable path for the next client.</span>
          </p>
        </li>
      </ol>
    </figure>
  )
}
