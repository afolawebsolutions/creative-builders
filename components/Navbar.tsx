"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#23707A] text-white p-5 md:px-[5%] lg:px-[10%] p">
      <div className=" mx-auto flex md:justify-around justify-between items-center">
        <Image 
            src="/Assets/Asset 10 2.svg" 
            alt="Logo"
            width={190}  
            height={80} 
          />
        <div className="hidden md:flex items-center justify-center flex-grow ">
          <div className="bg-[#11AE60] rounded-full px-6 py-2 flex items-center justify-between lg:w-[80%] md:w-fit space-x-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
        <button className="bg-white text-[#1b4d4d] font-bold px-4 py-2 rounded-full hidden md:block">Contact Sales</button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className='w-10 h-10 '/> : <Menu className='w-10 h-10 ' />}
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
  )
}
