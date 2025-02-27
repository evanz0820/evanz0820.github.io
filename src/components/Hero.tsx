'use client'

import { ArrowDownCircle } from 'lucide-react'
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
    <section className="pt-32 pb-16 min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <span className="text-blue-600 font-medium mb-2 block animate-fadeIn">Hello, my name is</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
          <span className="text-black dark:text-white">Evan </span>
          <span className="text-blue-600">Zhang</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300 animate-slideUp animation-delay-100 h-14 flex items-center">
          <span>{displayTitle}</span>
          <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-pulse"></span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl animate-slideUp animation-delay-200">
          I build modern web applications with a focus on user experience, performance, and clean code.
          Specializing in React, Next.js, and TypeScript to create elegant solutions for complex problems.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-300">
          <Link 
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium
                     hover:bg-blue-700 transition-colors flex items-center"
          >
            View My Work
          </Link>
          <Link 
            href="#contact"
            className="px-6 py-3 bg-transparent text-blue-600 border border-blue-600
                     rounded-md font-medium hover:bg-blue-50 dark:hover:bg-gray-800
                     transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="w-10 h-10 text-blue-600" />
        </Link>
      </div>
    </section>
  )
}