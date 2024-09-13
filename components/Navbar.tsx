"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("#23707A"); // default color
  const [BarBackground, setBarBackground] = useState("#11ae6070");
  const [logoSrc, setLogoSrc] = useState("/Assets/Asset 10 2.svg"); // default logo
  const navbarRef = useRef<HTMLDivElement>(null);

  // Function to handle background color and logo change based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Detecting different sections (change based on your sections' heights)
    if (scrollPosition < 650) {
      // Section 1
      setNavbarBackground("#23707A");
      setBarBackground("#11ae6070")
      setLogoSrc("/Assets/Asset 10 2.svg");
    } else if (scrollPosition >= 650 && scrollPosition < 1100) {
      // Section 2
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5")
      setLogoSrc("/Assets/Asset 9 1.svg");
    } else if (scrollPosition >= 1100 && scrollPosition < 2300) {
      // Section 3
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5")
      setLogoSrc("/Assets/Asset 9 1.svg");
    } else {
      // Section 4 or other sections
      setNavbarBackground("#23707A");
      setBarBackground("#11ae6070")
      setLogoSrc("/Assets/Asset 10 2.svg");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed w-full text-white z-50 transition-colors duration-500 "
      style={{ backgroundColor: navbarBackground }}
    >
      <div className=" mx-auto flex md:justify-around justify-between items-center p-2 md:p-4 md:px-[5%]">
        {/* Logo */}
        <Image src={logoSrc} alt="Logo" width={190} height={80} />

        <div className="hidden md:flex items-center justify-center flex-grow ">
          <div className="bg-[#11ae6070] rounded-full px-6 py-3 flex items-center justify-around lg:w-[70%] md:w-fit space-x-2"
          style={{ backgroundColor: BarBackground }}
          >
            <a href="#section1" className="hover:underline text-[18px]">
              Home
            </a>
            <a href="#section1" className="hover:underline text-[18px]">
              Home
            </a>
            <a href="#section2" className="hover:underline text-[18px]">
              About
            </a>
            <a href="#section3" className="hover:underline text-[18px]">
              Services
            </a>
            <a href="#section4" className="hover:underline text-[18px]">
              Contact
            </a>
          </div>
        </div>

        <button className="bg-white text-gray-950 text-[18px] px-4 py-2 rounded-full hidden md:block">
          Contact Sales
        </button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#143939] rounded-lg p-4">
          <a href="#section1" className="block py-2">
            Home
          </a>
          <a href="#section2" className="block py-2">
            About
          </a>
          <a href="#section3" className="block py-2">
            Services
          </a>
          <a href="#section4" className="block py-2">
            Contact
          </a>
          <button className="bg-white text-[#1b4d4d] px-4 py-2 rounded-full mt-4 w-full">
          Contact Sales
          </button>
        </div>
      )}
    </nav>
  );
}
