"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const works = [
  { title: 'Project 1', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Project 2', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Project 3', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Project 4', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Project 5', image: '/placeholder.svg?height=300&width=400' },
]

export default function WorksSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % works.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + works.length) % works.length)
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeSlide * 25}%)`
    }
  }, [activeSlide])

  return (
    <section className="bg-gray-100 p-8 md:p-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1b4d4d] text-center">Our Works</h2>
      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ width: `${works.length * 25}%` }}
        >
          {works.map((work, index) => (
            <div key={index} className="min-w-[25%] p-2">
              <Image 
                src={work.image}
                alt={work.title}
                layout="responsive"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <h3 className="text-center mt-4 font-semibold">{work.title}</h3>
            </div>
          ))}
        </div>
        <button 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1b4d4d] text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1b4d4d] text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}
