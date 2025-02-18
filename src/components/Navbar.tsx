'use client'

import { useTheme } from "@/providers/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">EZ</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
            <a href="#about" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
            <a href="#contact" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 
                       rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                       hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}