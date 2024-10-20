"use client";

import { useState } from 'react';
import Image from 'next/image';
import { forwardRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { services } from '@/constants/Services'; // Update the path according to your directory structure
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
  
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      id='service'
      ref={ref}
      className="bg-white px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16"
    >
      <h2 className={`${firaCode.className} text-3xl font-semibold mb-2 text-center text-[#FF00A1]`}>
        Our Services
      </h2>
      <p className="text-center mb-8 text-[#000000] text-lg max-w-3xl mx-auto">
        All the services your business needs in one place to elevate your presence & increase revenue
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center  py-10  px-[1.5rem] ${
              hoveredIndex === index ? 'bg-[#6BBD00]' : 'bg-[#B5DE80]'
            } transition-all duration-300 ${
              hoveredIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className={` ${firaCode.className} text-2xl font-semibold mb-6  text-start ${
              hoveredIndex === index ? 'text-black' : 'text-black'
            }`}>
              {service.title}
            </h3>
            <p className={`text-sm  text-start mb-6 mx-9 ${
              hoveredIndex === index ? 'text-black' : 'text-black'
            }`}>
              {service.description}
            </p>
            <div className="mt-auto w-[90%] mx-4">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {services.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center text-[#FF00A1] text-lg font-semibold"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;