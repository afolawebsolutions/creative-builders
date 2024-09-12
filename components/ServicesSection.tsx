"use client"

import Image from 'next/image'

const services = [
  { title: 'Brand Identity Design', image: '/Assets/Mask group.png', color: 'text-green-500' },
  { title: 'Web & Graphics Design', image: '/Assets/image.png', color: 'text-green-500' },
  { title: 'Video Production', image: '/Assets/image (1).png', color: 'text-green-500' },
  { title: 'Product Photography', image: '/Assets/image (2).png', color: 'text-green-500' },
  { title: 'Web Development', image: '/Assets/Group 8.png', color: 'text-green-500' },
  { title: 'App Development', image: '/Assets/image (3).png', color: 'text-blue-500' },
  { title: 'Sales Funnel Development', image: '/Assets/image (4).png', color: 'text-green-500' },
  { title: 'Technical Consulting', image: '/Assets/image (5).png', color: 'text-green-500' },
]

export default function ServicesSection() {
  return (
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
  )
}
