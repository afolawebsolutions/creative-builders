"use client";

import { Fira_Code } from 'next/font/google';
import Image from 'next/image';
import { forwardRef } from 'react';
import { services } from '@/constants/Services'; // Update the path according to your directory structure

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Using forwardRef to accept and forward a ref
const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id='service'
      ref={ref}
      className="bg-white p-8 md:p-16 lg:px-[10%] lg:mb-12"
    >
      <h2 className={`${firaCode.className} text-lg md:text-xl font-normal mb-4 text-center text-[#FF00A1]`}>
        Our Services
      </h2>
      <p className={`${firaCode.className} text-center mb-12 text-[#000000] text-base`}>
        Your all-in-one powerhouse to launch and scale simple and extensive projects.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-[40px]"
              />
            </div>
            <h3 className={`font-semibold text-center hover:underline text-[18px] ${service.color}`}>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
});

// Setting a display name for better debugging
ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
