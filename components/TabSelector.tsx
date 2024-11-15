'use client'

import React, { useEffect, useRef, useState } from 'react'

interface TabSelectorProps {
  categories: string[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function TabSelector({ categories, activeCategory, setActiveCategory }: TabSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      if (scrollWidth > clientWidth) {
        setIsAutoScrolling(true)
        let scrollPosition = 0

        scrollInterval = setInterval(() => {
          scrollPosition += 1
          if (scrollPosition >= scrollWidth - clientWidth) {
            scrollPosition = 0
          }
          container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
        }, 50)
      }
    }

    const stopAutoScroll = () => {
      setIsAutoScrolling(false)
      if (scrollInterval) {
        clearInterval(scrollInterval)
      }
    }

    startAutoScroll()

    return () => {
      stopAutoScroll()
    }
  }, [isMobile])

  const handleTouchStart = () => {
    if (isAutoScrolling) {
      setIsAutoScrolling(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="max-w-full overflow-x-auto scrollbar-hide"
      onTouchStart={handleTouchStart}
      onTouchEnd={() => setIsAutoScrolling(true)}
    >
      <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-200 min-w-max mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-xl text-base lg:text-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === category
                ? 'bg-[#6BBD00] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}