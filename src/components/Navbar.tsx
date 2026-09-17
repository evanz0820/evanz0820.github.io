'use client'

import { useTheme } from "@/components/theme-provider"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = () => mq.matches && setIsMenuOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: the section crossing the middle of the viewport is the active one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    const hero = document.getElementById('top')
    if (hero) observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Slide the underline to the active link
  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null
      setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === 'light' ? 'dark' : 'light'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next)
      return
    }
    // Wipe the new theme in from the button that was pressed
    const rect = event.currentTarget.getBoundingClientRect()
    const root = document.documentElement
    root.style.setProperty('--wipe-x', `${rect.left + rect.width / 2}px`)
    root.style.setProperty('--wipe-y', `${rect.top + rect.height / 2}px`)
    document.startViewTransition(() => flushSync(() => setTheme(next)))
  }

  const themeButton = (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-rule p-2 text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-[background-color,border-color] duration-500 ${
        scrolled || isMenuOpen ? 'border-rule bg-paper/85' : 'border-transparent bg-paper/0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-ink">
          Evan Zhang
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="relative flex items-center gap-6">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => { linkRefs.current[id] = el }}
                aria-current={active === id ? 'location' : undefined}
                className={`py-1 text-sm transition-colors duration-300 hover:text-ink ${
                  active === id ? 'text-ink' : 'text-muted'
                }`}
              >
                {label}
              </a>
            ))}
            <span
              aria-hidden
              className="absolute -bottom-0.5 left-0 h-px bg-accent transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: indicator?.width ?? 0,
                transform: `translateX(${indicator?.left ?? 0}px)`,
                opacity: indicator ? 1 : 0,
              }}
            />
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2">
            Resume
          </a>
          {themeButton}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {themeButton}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-ink"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden" inert={!isMenuOpen}>
          <div className="flex flex-col gap-1 px-5 pb-5 sm:px-8">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-rule py-3 font-display text-xl text-ink"
              >
                {label}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
              Resume
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-accent" />
    </nav>
  )
}
