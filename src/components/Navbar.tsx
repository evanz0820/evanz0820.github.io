'use client'

import { useTheme } from "@/components/theme-provider"
import { Menu, Moon, Sun, X } from "lucide-react"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' 
      : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
    } border-b dark:border-gray-700`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">EZ</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-black dark:text-white hover:text-blue-600 transition-colors">About</Link>
            <Link href="#projects" className="text-black dark:text-white hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="#contact" className="text-black dark:text-white hover:text-blue-600 transition-colors">Contact</Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 
                       rounded-md hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                       hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#about" 
              onClick={handleLinkClick}
              className="text-black dark:text-white hover:text-blue-600 py-2 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#projects" 
              onClick={handleLinkClick}
              className="text-black dark:text-white hover:text-blue-600 py-2 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              onClick={handleLinkClick}
              className="text-black dark:text-white hover:text-blue-600 py-2 transition-colors"
            >
              Contact
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 
                      rounded-md hover:bg-blue-700 transition-colors inline-block w-full text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}