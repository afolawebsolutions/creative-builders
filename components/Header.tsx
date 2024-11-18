import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 transition-colors duration-500 pt-5 md:pt-0 mx-auto  bg-white text-gray-800">
      <div className="mx-auto flex md:justify-around justify-between items-center p-2 px-2 md:px-[5%]">
        {/* Logo */}
        <Image
          src="/Assets/Asset 9 1.svg"
          alt="Logo"
          width={100}
          height={40}
          className="dynamic-logo dynamic-logo-lg"
        />

        <div className="hidden md:flex items-center justify-center flex-grow">
          <div
            className=" px-6 py-3 flex items-center justify-around lg:w-[70%] md:w-fit space-x-2"
          >
            <a href="#about" className="hover:underline text-[14px]">
              About <span className="md:hidden">us</span>
            </a>
            <div className="relative">
              <button
                className="hover:underline flex items-center text-[14px]"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Our Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full items-center mt-2 w-30 bg-[#4A2D4E] shadow-lg py-2 z-10 border-[1px]">
                  <a
                    href="#service1"
                    className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30] text-[14px]"
                  >
                    Creative
                  </a>
                  <a
                    href="#service2"
                    className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30] text-[14px]"
                  >
                    Development
                  </a>
                  <a
                    href="#service3"
                    className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30] text-[14px]"
                  >
                    Consulting
                  </a>
                </div>
              )}
            </div>
            <a href="#careers" className="hover:underline text-[14px]">
              Careers
            </a>
            <a href="#portfolio" className="hover:underline text-[14px]">
              Portfolio
            </a>
            <a href="#blog" className="hover:underline text-[14px]">
              Blog
            </a>
          </div>
        </div>

        <button
          className="bg-white text-[#6BBD00] text-[18px] px-4 py-2 rounded-xl hidden md:flex items-center space-x-2 border-[#6BBD00] border-2 hover:bg-[#4cbd00e6] hover:text-white"
        >
          <span className="hidden lg:flex pr-2 color-[#6BBD00] "><Phone/></span>
          Book a call
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-12 h-12" />
          ) : (
            <Menu className="w-12 h-12" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#2E1F30] rounded-lg p-4 max-h-[90vh] overflow-y-auto">
          <a href="#about" className="block py-2 text-gray-100 hover:bg-[#2E1F30] px-2">
            About us
          </a>
          <div>
            <button
              className="flex items-center justify-between w-full py-2 px-2 text-gray-100"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div className="w-30 bg-[#2E1F30] shadow-lg py-2 z-10">
                <a
                  href="#service1"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30]"
                >
                  Creative
                </a>
                <a
                  href="#service2"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30]"
                >
                  Development
                </a>
                <a
                  href="#service3"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#2E1F30]"
                >
                  Consulting
                </a>
              </div>
            )}
          </div>
          <a href="#portfolio" className="block py-2 text-gray-100 hover:bg-[#2E1F30] px-2">
            Portfolio
          </a>
          <a href="#testimonial" className="block py-2 text-gray-100 hover:bg-[#2E1F30] px-2">
            Testimonial
          </a>
          <a href="#partners" className="block py-2 text-gray-100 hover:bg-[#2E1F30] px-2">
            Partners
          </a>
          <button
            className="bg-[#6BBD00] text-white text-[18px] px-20 py-2 rounded-full flex items-center space-x-2 mt-4"
          >
            📞
            <span>Book a call</span>
          </button>
        </div>
      )}
    </header>
  )
}