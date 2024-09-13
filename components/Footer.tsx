"use client"

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#143939] text-white p-8 h-[1000px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Doodle Digital. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500">Facebook</a>
          <a href="#" className="hover:text-green-500">Twitter</a>
          <a href="#" className="hover:text-green-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
