interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

// Deck-style layout: the takeaway sentence stays pinned on the left while its evidence scrolls on the right.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 id={`${id}-title`} className="action-title reveal lg:sticky lg:top-28">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}
