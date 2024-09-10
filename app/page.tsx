"use client"

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
  
    const services = [
      { title: 'Brand Identity Design', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'Web & Graphics Design', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'Video Production', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'Product Photography', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'Web Development', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'App Development', image: '/placeholder.svg?height=200&width=200', color: 'text-blue-500' },
      { title: 'Sales Funnel Development', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
      { title: 'Technical Consulting', image: '/placeholder.svg?height=200&width=200', color: 'text-green-500' },
    ]
  
    const works = [
      { title: 'Project 1', image: '/placeholder.svg?height=300&width=400' },
      { title: 'Project 2', image: '/placeholder.svg?height=300&width=400' },
      { title: 'Project 3', image: '/placeholder.svg?height=300&width=400' },
      { title: 'Project 4', image: '/placeholder.svg?height=300&width=400' },
      { title: 'Project 5', image: '/placeholder.svg?height=300&width=400' },
    ]
  
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
    <main className="min-h-screen bg-[#e6f3f3]">
      {/* Navbar */}
      <nav className="bg-[#1b4d4d] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Doodle Digital</div>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="bg-[#143939] rounded-full px-6 py-2 flex items-center space-x-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
          <button className="bg-white text-[#1b4d4d] px-4 py-2 rounded-full hidden md:block">Sign Up</button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#143939] rounded-lg p-4">
            <a href="#" className="block py-2">Home</a>
            <a href="#" className="block py-2">About</a>
            <a href="#" className="block py-2">Services</a>
            <a href="#" className="block py-2">Contact</a>
            <button className="bg-white text-[#1b4d4d] px-4 py-2 rounded-full mt-4 w-full">Sign Up</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#1b4d4d] text-white p-8 md:p-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your vision</h1>
          <h2 className="text-2xl md:text-4xl mb-4">we design,</h2>
          <h2 className="text-2xl md:text-4xl mb-8">we build&gt;</h2>
          <button className="bg-[#4caf50] text-white px-6 py-2 rounded-full">Contact Us</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image 
            src="/placeholder.svg?height=300&width=300" 
            alt="Person holding IDEA sign" 
            width={300} 
            height={300}
            className="rounded-full"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white p-8 md:p-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image 
            src="/placeholder.svg?height=300&width=300" 
            alt="Person with raised arms" 
            width={300} 
            height={300}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1b4d4d]">Sky's the limit, we aim for the moon!</h2>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-[#1b4d4d] text-white px-6 py-2 rounded-full">Learn More</button>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-white p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-700">Our Services</h2>
        <p className="text-center mb-12 text-gray-600">Your all-in-one powerhouse to launch and scale simple and extensive projects.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square relative mb-4">
                <Image 
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className={`font-semibold text-center ${service.color}`}>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1b4d4d] text-center">Our Works</h2>
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ width: `${works.length * 25}%` }}
          >
            {works.map((work, index) => (
              <div 
                key={index} 
                className="w-1/4 flex-shrink-0 px-2 transition-all duration-300"
                style={{ 
                  transform: `scale(${index === activeSlide ? 1 : 0.9})`,
                  opacity: index === activeSlide ? 1 : 0.7,
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={work.image}
                    alt={work.title}
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-[#1b4d4d] font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-600 text-sm">Brief description of the project goes here.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button 
            onClick={prevSlide} 
            className="bg-[#1b4d4d] text-white rounded-full p-2 mx-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-[#1b4d4d] text-white rounded-full p-2 mx-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>
      
      

      {/* Footer */}
      <footer className="bg-[#1b4d4d] text-white p-8 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-[#143939] h-32 rounded"></div>
          ))}
        </div>
        <div className="text-center text-sm">
          © 2023 Your Company Name. All rights reserved.
        </div>
      </footer>
    </main>
  )
}