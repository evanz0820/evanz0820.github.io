'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            // Optional: Unobserve after revealing to improve performance
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly earlier than viewport
      }
    )
    
    revealElements.forEach((element) => {
      observer.observe(element)
    })
    
    return () => {
      observer.disconnect()
    }
  }, [])
  
  return null
}