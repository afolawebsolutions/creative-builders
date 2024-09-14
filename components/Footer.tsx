"use client";

import React, { forwardRef } from 'react';

// Define the type for the ref
interface FooterHandle {
  scrollToTop: () => void;
}

// Convert the component to use forwardRef
const Footer = forwardRef<FooterHandle>((_, ref) => {
  // Optional: Implement scrollToTop method if needed
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Expose methods to the parent component via ref
  React.useImperativeHandle(ref, () => ({
    scrollToTop,
  }));

  return (
    <footer id="footer" className="bg-[#23707A] text-white p-8 h-[1000px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Doodle Digital. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500">Facebook</a>
          <a href="#" className="hover:text-green-500">Twitter</a>
          <a href="#" className="hover:text-green-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
