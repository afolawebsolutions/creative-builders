"use client"


import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorksSection from '@/components/WorksSection';
import ReviewsSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection'; // Import the ContactSection
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null); // Ref for ContactSection

  return (
    <>
      <Navbar
      section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
        reviewsSectionRef={reviewsSectionRef}
        contactSectionRef={contactSectionRef}
        footerRef={footerRef} // Pass the ref to the Navbar
      />
      <div ref={section1Ref}>
        <HeroSection />
      </div>
      <div ref={section2Ref}>
        <AboutSection 
        section3Ref={section3Ref} />
      </div>
      {/* <div>
        <Partners/>
      </div> */}
      <div ref={section3Ref}>
        <ServicesSection />
      </div>
      <div ref={section4Ref}>
        <WorksSection />
      </div>
      <div ref={reviewsSectionRef}>
        <ReviewsSection />
      </div>
      <div ref={contactSectionRef}> {/* Wrap ContactSection with ref */}
        <ContactSection />
      </div>
      <div ref={footerRef}> {/* Wrap ContactSection with ref */}
        <Footer
        contactSectionRef={contactSectionRef}
        />
      </div>
    </>
  );
}

