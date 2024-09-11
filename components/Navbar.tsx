"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#23707A] text-white py-5 px-[5%] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Doodle Digital</div>
        <div className="hidden md:flex items-center justify-center flex-grow ">
          <div className="bg-[#11AE60] rounded-full px-6 py-2 flex items-center justify-around w-[90%]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
        <button className="bg-white text-[#1b4d4d] px-4 py-2 rounded-full hidden md:block">Contact Sales</button>
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
  )
}
