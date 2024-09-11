"use client"

import Image from 'next/image'

export default function AboutSection() {
  return (
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
<h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1b4d4d]">Sky&apos;s the limit, we aim for the moon!</h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="bg-[#1b4d4d] text-white px-6 py-2 rounded-full">Learn More</button>
      </div>
    </section>
  )
}
