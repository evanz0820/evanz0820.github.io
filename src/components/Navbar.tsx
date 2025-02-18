// src/components/navbar.tsx
'use client'

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-blue-600">EZ</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-black dark:text-white hover:text-blue-600">Projects</a>
            <a href="#about" className="text-black dark:text-white hover:text-blue-600">About</a>
            <a href="#contact" className="text-black dark:text-white hover:text-blue-600">Contact</a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 
                       rounded-md hover:bg-blue-700"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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