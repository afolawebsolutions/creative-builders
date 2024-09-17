'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const partners = [
  { image: '/Assets/Asset 9 1.svg', name: 'Partner 1' },
  { image: '/Assets/Asset 9 1.svg', name: 'Partner 2' },
  { image: '/Assets/Asset 9 1.svg', name: 'Partner 3' },
  { image: '/Assets/Asset 9 1.svg', name: 'Partner 4' },
  { image: '/Assets/Asset 9 1.svg', name: 'Partner 5' },
];

export default function Partners() {
  // const scrollRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scrollContainer = scrollRef.current;
  //   if (!scrollContainer) return;

  //   let scrollPosition = 0;

  //   const scroll = () => {
  //     scrollPosition += 1; // Adjust speed here for smoothness

  //     // Reset position to create infinite scroll illusion
  //     if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
  //       scrollPosition = 0; // Reset to start when halfway done
  //     }

  //     scrollContainer.scrollLeft = scrollPosition;
  //   };

  //   const scrollInterval = setInterval(scroll, 20); // Speed and smoothness

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <section className="py-16 bg-[#FDF9D1] overflow-hidden relative" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling container */}
        <div
          // ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {/* Create a seamless loop by duplicating the array */}
          <div className="flex">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={200}
                  height={50}
                  className="w-auto h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
