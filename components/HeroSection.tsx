"use client"

import Image from 'next/image'

export default function HeroSection() {
  return (
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
  )
}
