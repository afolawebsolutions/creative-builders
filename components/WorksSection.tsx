"use client";

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { works } from '@/constants/Works'; // Adjust path according to your project structure
import { Fira_Code } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import and initialize Fira Code font
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Custom types for slider arrow props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Next Arrow component
const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className="bg-[#1b4d4d] text-white p-2 rounded-full absolute right-0 z-10" onClick={onClick}>
    <ChevronRight className="w-6 h-6" />
  </button>
);

// Custom Prev Arrow component
const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className="bg-[#1b4d4d] text-white p-2 rounded-full absolute left-0 z-10" onClick={onClick}>
    <ChevronLeft className="w-6 h-6" />
  </button>
);

export default function WorksSection() {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Slick slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    speed: 500,
    dots: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#23707A] text-white p-8 lg:p-16">
      <div className="mb-12 text-center flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-green-500">Work </span>Speaks for Itself!
        </h2>
        <p className={`${firaCode.className} md:text-xl text-lg text-[#FFFFFF]`}>
          Explore our diverse range of projects, each crafted with creativity and precision.
        </p>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {works.map((work, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={index}
                className={`p-2 transition-transform duration-300 ease-in-out ${
                  isActive ? 'scale-105 opacity-100' : 'scale-90 opacity-50'
                }`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="responsive"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <h3 className="text-center mt-4 font-semibold">{work.title}</h3>
              </div>
            );
          })}
        </Slider>
        
        <div className="flex justify-center mt-4 space-x-6">
          {/* Left arrow button */}
          <button
            className="bg-[#1b4d4d] text-white p-2 rounded-full"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <p className="text-center m-2">
            {activeSlide + 1} of {works.length}
          </p>
          {/* Right arrow button */}
          <button
            className="bg-[#1b4d4d] text-white p-2 rounded-full"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <p className="font-mono md:px-[10%] mt-8">
        We have a vast range of services across our creative and building arms. Our goal is to be your all-in-one
        powerhouse to elevate your brand, complete projects seamlessly, and stand out even without an in-house team!
      </p>
    </section>
  );
}
