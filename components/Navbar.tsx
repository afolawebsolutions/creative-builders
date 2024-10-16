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
  
  <path d="M6 10H10M10 10L8 12M10 10L8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  
</svg>

);


export default function Navbar({
  section1Ref,
  section2Ref,
 
  section4Ref,
  reviewsSectionRef,
  contactSectionRef,

}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("#2E1F30");
  const [barBackground, setBarBackground] = useState("#4A2D4E");
  const [logoSrc, setLogoSrc] = useState("/Assets/Asset 10 1.svg");
  const [logoWidth, setLogoWidth] = useState(200);
  const [logoHeight, setLogoHeight] = useState(10);
  const [buttonText, setButtonText] = useState(" Work with us");
  const [buttonColor, setButtonColor] = useState("bg-[#6BBD00] text-black");
  const [fontColor, setfontColor] = useState("#FFFFFF");
  const [buttonIcon, setButtonIcon] = useState(<ArrowInBagIcon/>);
  const [paddingValue, setPaddingValue] = useState(20);

  const handleScroll = () => {
    const section1Top = (section1Ref.current?.offsetTop ?? 0)
    const section2Top = (section2Ref.current?.offsetTop ?? 0) - 72;
    // const section3Top = (section3Ref.current?.offsetTop ?? 0) - 72;
    // const section4Top = (section4Ref.current?.offsetTop ?? 0) - 70;
    // const reviewsSectionTop = (reviewsSectionRef.current?.offsetTop ?? 0) - 80;
    // const contactSectionTop = (contactSectionRef.current?.offsetTop ?? 0) - 80;
    // const footerTop = (footerRef.current?.offsetTop ?? 0) - 75;
    const scrollPosition = window.scrollY;

    if (scrollPosition === section1Top) {
      // Section 1
      setNavbarBackground("#2E1F30");
      setBarBackground("#4A2D4E");
      setfontColor("#FFFFFF")
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#6BBD00] text-black");
      setButtonText(" Work with us");
      setLogoWidth(200);
      setLogoHeight(10);
      setButtonIcon(<ArrowInBagIcon/>)
      setPaddingValue(20)
    }else if (scrollPosition < section2Top) {
      // Section 1
      setNavbarBackground("#2E1F30");
      setBarBackground("#4A2D4E");
      setLogoSrc("/Assets/Asset 10 2.svg");
      setButtonColor("bg-[#6BBD00] text-black");
      setfontColor("#FFFFFF")
      setButtonText(" Work with us");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<ArrowInBagIcon/>)
      setPaddingValue(6)
    } 
 else {
      setNavbarBackground("#FFFFFF");
      setBarBackground("#FFFFFF");
      setLogoSrc("/Assets/Asset 9 1.svg");
      setButtonColor("bg-[#FFFFFF] text-[#6BBD00]");
      setfontColor("#374151")
      setButtonText(" Book a call");
      setLogoWidth(120);
      setLogoHeight(10);
      setButtonIcon(<Phone/>)
      setPaddingValue(6)
    }
  };

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        className="fixed w-full  z-50 transition-colors duration-500 pt-5 md:pt-0 mx-auto "
        style={{ backgroundColor: navbarBackground, color: fontColor }}
      >
        <div className=" mx-auto flex md:justify-around justify-between items-center p-2 px-2 md:px-[5%]" style={{ '--md-lg-padding': `${paddingValue}px`} as React.CSSProperties}  >
          {/* Logo */}
          <Image
            src={logoSrc}
            alt="Logo"
            width={logoWidth}
            height={logoHeight}
            className="dynamic-logo dynamic-logo-lg"
            style={{ '--logo-width': `${logoWidth}px` } as React.CSSProperties}
            
          />

          <div className="hidden md:flex items-center justify-center flex-grow">
            <div
              className="rounded-full px-6 py-3 flex items-center justify-around lg:w-[70%] md:w-fit space-x-2"
              style={{ backgroundColor: barBackground }}
            >
              <a onClick={() => scrollToSection(section2Ref)} className="hover:underline text-[14px]">
                About <span className="md:hidden ">us</span>
              </a>
              <div className="relative">
                <button
                  className="hover:underline flex items-center text-[14px]"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Our Services <ChevronDown className="ml-1 h-4 w-4 " />
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
              <a onClick={() => scrollToSection(section4Ref)} className="hover:underline text-[14px]">
                Careers
              </a>
              <a onClick={() => scrollToSection(reviewsSectionRef)} className="hover:underline text-[14px]">
                Portfolio
              </a>
              <a onClick={() => scrollToSection(reviewsSectionRef)} className="hover:underline text-[14px]">
                Blog
              </a>
            </div>
          </div>

          <button
          onClick={() => scrollToSection(contactSectionRef)}
            className={`${buttonColor}  text-[18px] px-4 py-2 rounded-full hidden md:flex items-center space-x-2 border-[#6BBD00] border-2 hover:bg-[#4cbd00e6] hover:text-white`}
          >
            <span className="hidden lg:flex pr-2">{buttonIcon}</span>
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
          <div className="md:hidden mt-4 bg-[#2E1F30] rounded-lg p-4 max-h-[90vh] overflow-y-auto">
            <a onClick={() => scrollToSection(section2Ref)} className="block py-2 text-gray-100 hover:bg-[#2E1F30] px-2">
              About us
            </a>
            <div>
              <button
                className="flex items-center justify-between w-full py-2 px-2 "
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className=" w-30 bg-[#2E1F30] shadow-lg py-2 z-10 ">
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
            <a onClick={() => scrollToSection(section4Ref)} className="block py-2 hover:bg-[#2E1F30] px-2">
              Portfolio
            </a>
            <a onClick={() => scrollToSection(reviewsSectionRef)} className="block py-2 hover:bg-[#2E1F30] px-2">
              Testimonial
            </a>
            <a onClick={() => scrollToSection(reviewsSectionRef)} className="block py-2 hover:bg-[#2E1F30] px-2">
              Partners
            </a>
            <button
            onClick={() => scrollToSection(contactSectionRef)}
            className={`${buttonColor} text-gray-50 text-[18px] px-20 py-2 rounded-full  flex items-center space-x-2`}
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
