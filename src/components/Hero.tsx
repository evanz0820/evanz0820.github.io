'use client'

import { ArrowDownCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Data Analyst",
    "Business Analyst",
    "Software Engineer"
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayTitle, setDisplayTitle] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      // Deleting speed - faster (40ms per character)
      timeout = setTimeout(() => {
        setDisplayTitle(prev => prev.slice(0, -1))
        
        // When fully deleted, move to next title
        if (displayTitle.length === 1) {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }, 40)
    } else {
      // If we haven't completed the current word yet
      if (displayTitle !== titles[currentTitleIndex]) {
        // Typing speed - faster (50ms per character)
        timeout = setTimeout(() => {
          setDisplayTitle(titles[currentTitleIndex].slice(0, displayTitle.length + 1))
        }, 50)
      } else {
        // Display the complete word for 1 second before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1000)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [displayTitle, isDeleting, currentTitleIndex, titles])
  
  return (
    <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center relative">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1 max-w-3xl">
          <span className="text-sm sm:text-base text-blue-600 font-medium mb-2 block animate-fadeIn">Hello, my name is</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slideUp">
            <span className="text-black dark:text-white">Evan </span>
            <span className="text-blue-600">Zhang</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 animate-slideUp animation-delay-100 h-8 sm:h-10 md:h-14 flex items-center">
            <span>{displayTitle}</span>
            <span className="inline-block w-0.5 sm:w-1 h-5 sm:h-6 md:h-8 bg-blue-600 ml-1 animate-pulse"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl animate-slideUp animation-delay-200">
            I build modern web applications with a focus on user experience, performance, and clean code.
            Specializing in React, Next.js, and TypeScript to create elegant solutions for complex problems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slideUp animation-delay-300">
            <Link
              href="#projects"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-md font-medium
                       hover:bg-blue-700 transition-colors flex items-center justify-center
                       text-sm sm:text-base"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-blue-600 border border-blue-600
                       rounded-md font-medium hover:bg-blue-50 dark:hover:bg-gray-800
                       transition-colors text-sm sm:text-base text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 animate-fadeIn animation-delay-200">
          <div className="absolute inset-0 rounded-full bg-blue-600/10 dark:bg-blue-400/10 scale-110"></div>
          <Image
            src="/headshot.jpg"
            alt="Evan Zhang"
            fill
            className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
        </Link>
      </div>
    </section>
  )
}