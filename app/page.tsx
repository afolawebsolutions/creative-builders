"use client";

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorksSection from '@/components/WorksSection';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  // Define refs for each section
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
      />
      <div ref={section1Ref}>
        <HeroSection />
      </div>
      <div ref={section2Ref}>
        <AboutSection />
      </div>
      <div ref={section3Ref}>
        <ServicesSection />
      </div>
      <div ref={section4Ref}>
        <WorksSection />
      </div>
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
