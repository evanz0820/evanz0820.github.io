import { ArrowDownCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <span className="text-blue-600 font-medium mb-2 block animate-fadeIn">Hello, my name is</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
          <span className="text-black dark:text-white">Evan </span>
          <span className="text-blue-600">Zhang</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300 animate-slideUp animation-delay-100">
          Full Stack Developer
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