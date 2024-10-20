"use client"

import Header from '../../components/Header'
import PortfolioSection from '../../components/PortfolioSection'
import Footer from '@/components/Footer';
import { useRef } from 'react';

export default function Home() {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null); // Ref for 
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PortfolioSection />
      <div ref={footerRef}>
        <Footer
        contactSectionRef={contactSectionRef}
        />
      </div>
    </main>
  )
}