import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/placeholder.svg" alt="Creative Builders Logo" width={40} height={40} />
        <span className="text-xl font-bold text-[#7209B7]">Creative Builders</span>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/about" className="text-gray-600 hover:text-gray-900">About us</Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">Our Services</Link>
        <Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link>
        <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
      </nav>
      <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-full hover:bg-[#45a049] transition-colors">
        Book a call
      </button>
    </header>
  )
}