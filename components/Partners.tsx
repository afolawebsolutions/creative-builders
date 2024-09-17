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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollAmount = 0;
    
    const scroll = () => {
      scrollAmount += 1; // Adjust speed here
      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(scroll, 20); // Adjust smoothness here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16 bg-[#FDF9D1] overflow-hidden relative" aria-labelledby="partners-heading">
      {/* The absolute heading overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* <h2 id="partners-heading" className="bg-[#FDF9D1] px-2 py-2 text-4xl font-bold text-[#2A9D8F]">
          Partners
        </h2> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling container */}
        <div
          ref={scrollRef}
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
