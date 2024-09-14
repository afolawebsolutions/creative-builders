"use client";

import { useState, useEffect, RefObject } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  section1Ref: RefObject<HTMLDivElement>;
  section2Ref: RefObject<HTMLDivElement>;
  section3Ref: RefObject<HTMLDivElement>;
  section4Ref: RefObject<HTMLDivElement>;
}

export default function Navbar({
  section2Ref,
  section3Ref,
  section4Ref,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("#23707A");
  const [barBackground, setBarBackground] = useState("#11ae6070");
  const [logoSrc, setLogoSrc] = useState("/Assets/Asset 10 2.svg");
  const [logoWidth, setLogoWidth] = useState(200);
  const [logoHeight, setLogoHeight] = useState(10);
  const [buttonText, setButtonText] = useState("Work with us");
  const [buttonColor, setButtonColor] = useState("bg-white");

  const handleScroll = () => {
    const section2Top = (section2Ref.current?.offsetTop ?? 0) - 80;
    const section3Top = (section3Ref.current?.offsetTop ?? 0) - 80;
    const section4Top = (section4Ref.current?.offsetTop ?? 0) - 90;
    const scrollPosition = window.scrollY;

    if (scrollPosition < section2Top) {
      // Section 1
      setNavbarBackground("#23707A");
      setBarBackground("#11ae6070");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-white text-black")
      setButtonText("Work with us")
      setLogoWidth(200);
      setLogoHeight(10);
    } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
      // Section 2
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white")
      setButtonText("Book a Call")
      setLogoWidth(120);
      setLogoHeight(10);
    } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
      // Section 3
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white")
      setButtonText("Book a Call")
      setLogoWidth(120);
      setLogoHeight(10)
    } else {
      // Section 4
      setNavbarBackground("#23707A");
      setBarBackground("#23707A");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#00A85A] text-white")
      setButtonText("Book a Call")
      setLogoWidth(120);
      setLogoHeight(10)
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed w-full text-white z-50 transition-colors duration-500 pt-5 md:pt-0"
        style={{ backgroundColor: navbarBackground }}
      >
        <div className="mx-auto flex md:justify-around justify-between items-center p-2 md:p-4 md:px-[5%]">
          {/* Logo */}
          <Image src={logoSrc} alt="Logo" width={logoWidth} height={logoHeight} />

          <div className="hidden md:flex items-center justify-center flex-grow">
            <div
              className="bg-[#11ae6070] rounded-full px-6 py-3 flex items-center justify-around lg:w-[70%] md:w-fit space-x-2"
              style={{ backgroundColor: barBackground }}
            >
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

          <button className={`${buttonColor} text-gray-950 text-[18px] px-4 py-2 rounded-full hidden md:block`}>
              {buttonText}
            </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#143939] rounded-lg p-4 max-h-[90vh] overflow-y-auto">
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
    </>
  );
}
