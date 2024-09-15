"use client";

import { useState, useEffect, RefObject } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  section1Ref: RefObject<HTMLDivElement>;
  section2Ref: RefObject<HTMLDivElement>;
  section3Ref: RefObject<HTMLDivElement>;
  section4Ref: RefObject<HTMLDivElement>;
  reviewsSectionRef: RefObject<HTMLDivElement>;
  contactSectionRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
}
const ArrowInBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
  
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" fill="black"/>
  
  <path d="M6 10H10M10 10L8 12M10 10L8 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  
</svg>

);


export default function Navbar({
  section2Ref,
  section3Ref,
  section4Ref,
  reviewsSectionRef,
  contactSectionRef,
  footerRef,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("#23707A");
  const [barBackground, setBarBackground] = useState("#11ae6070");
  const [logoSrc, setLogoSrc] = useState("/Assets/Asset 10 2.svg");
  const [logoWidth, setLogoWidth] = useState(200);
  const [logoHeight, setLogoHeight] = useState(10);
  const [buttonText, setButtonText] = useState("Work with us");
  const [buttonColor, setButtonColor] = useState("bg-[#FDF9D1]");
  const [buttonIcon, setButtonIcon] = useState(<ArrowInBagIcon/>);

  const handleScroll = () => {
    const section2Top = (section2Ref.current?.offsetTop ?? 0) - 80;
    const section3Top = (section3Ref.current?.offsetTop ?? 0) - 80;
    const section4Top = (section4Ref.current?.offsetTop ?? 0) - 90;
    const reviewsSectionTop = (reviewsSectionRef.current?.offsetTop ?? 0) - 80;
    const contactSectionTop = (contactSectionRef.current?.offsetTop ?? 0) - 90;
    const footerTop = (footerRef.current?.offsetTop ?? 0) - 90;
    const scrollPosition = window.scrollY;

    if (scrollPosition < section2Top) {
      // Section 1
      setNavbarBackground("#23707A");
      setBarBackground("#11ae6070");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#FDF9D1] text-black");
      setButtonText("Work with us");
      setLogoWidth(200);
      setLogoHeight(10);
      setButtonIcon(<ArrowInBagIcon/>)
    } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
      // Section 2
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
    } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
      // Section 3
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
    } else if (
      scrollPosition >= section4Top &&
      scrollPosition < reviewsSectionTop
    ) {
      setNavbarBackground("#23707A");
      setBarBackground("#23707A");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
    } else if (
      scrollPosition >= reviewsSectionTop &&
      scrollPosition < contactSectionTop
    ) {
      // Contact Section
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
    } else if (
      scrollPosition >= contactSectionTop &&
      scrollPosition < footerTop
    ) {
      // Contact Section
      setNavbarBackground("#7EACB5");
      setBarBackground("#7EACB5");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
    } else {
      setNavbarBackground("#23707A");
      setBarBackground("#23707A");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#00A85A] text-white");
      setButtonText("Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
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
          <Image
            src={logoSrc}
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
          />

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
              <div className="relative">
                <button
                  className="hover:underline text-[18px] flex items-center"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full items-center mt-2 w-30 bg-[#59868b] shadow-lg py-2 z-10 border-[1px]">
                    <a
                      href="#service1"
                      className="block px-4 py-2 text-sm text-white font-light hover:bg-[#3e8892]"
                    >
                      Creative
                    </a>
                    <a
                      href="#service2"
                      className="block px-4 py-2 text-sm text-white font-light hover:bg-[#3e8892]"
                    >
                      Development
                    </a>
                    <a
                      href="#service3"
                      className="block px-4 py-2 text-sm text-white font-light hover:bg-[#3e8892]"
                    >
                      Consulting
                    </a>
                  </div>
                )}
              </div>
              <a href="#section4" className="hover:underline text-[18px]">
                Contact
              </a>
              <a href="#section4" className="hover:underline text-[18px]">
                Contact
              </a>
            </div>
          </div>

          <button
            className={`${buttonColor} text-gray-950 text-[18px] px-4 py-2 rounded-full hidden md:flex items-center space-x-2`}
          >
            <span className="hidden lg:flex">{buttonIcon}</span>
            {buttonText}
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
          <div className="md:hidden mt-4 bg-[#59868b] rounded-lg p-4 max-h-[90vh] overflow-y-auto">
            <a href="#section1" className="block py-2 hover:bg-[#23707A] px-2">
              Home
            </a>
            <a href="#section2" className="block py-2 hover:bg-[#23707A] px-2">
              About
            </a>
            <div>
              <button
                className="flex items-center justify-between w-full py-2 px-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className=" w-30 bg-[#59868b] shadow-lg py-2 z-10 ">
                <a
                  href="#service1"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#23707A]"
                >
                  Creative
                </a>
                <a
                  href="#service2"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#23707A]"
                >
                  Development
                </a>
                <a
                  href="#service3"
                  className="block px-4 py-2 text-sm text-white font-light hover:bg-[#23707A]"
                >
                  Consulting
                </a>
              </div>
              )}
            </div>
            <a href="#section4" className="block py-2 hover:bg-[#23707A] px-2">
              Contact
            </a>
            <button
            className={`${buttonColor} text-gray-950 text-[14px] px-20 py-2 rounded-full  flex items-center space-x-2`}
          >
            {buttonIcon}
            <span>{buttonText}</span>
          </button>

          </div>
        )}
      </nav>
    </>
  );
}
