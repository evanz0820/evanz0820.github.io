export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Evan Zhang</p>
        <a href="#top" className="link-underline self-start text-ink">
          Back to top
        </a>
      </div>
    </footer>
  )
}
