"use client";

import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { works } from "@/constants/Works"; // Adjust path according to your project structure
import { Poppins, Fira_Code } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import and initialize fonts
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Define the type for the slider ref
interface SliderHandle {
  slickPrev: () => void;
  slickNext: () => void;
}

// Define the component with a forwardRef and custom slider ref
const WorksSection = forwardRef<SliderHandle>((_, ref) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Slick slider settings without arrows
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    dots: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    arrows: false, // Disable the built-in arrows completely
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

  // Expose the slider methods to the parent component via the ref
  useImperativeHandle(ref, () => ({
    slickPrev: () => sliderRef.current?.slickPrev(),
    slickNext: () => sliderRef.current?.slickNext(),
  }));

  return (
    <section id="works" className="bg-[#23707A] text-white p-8 lg:p-16">
      <div className="mb-12 text-center flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-green-500">Work </span>Speaks for Itself!
        </h2>
        <p
          className={`${firaCode.className} md:text-xl text-lg text-[#FFFFFF] lg:ml-80 lg:mr-80`}
        >
          Explore our diverse range of projects, each crafted with creativity
          and precision.
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
                  isActive ? "scale-105 opacity-100" : "scale-90 opacity-50"
                }`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="responsive"
                  width={500}
                  height={400}
                  className="rounded-[40px]"
                />
                <h3 className="text-center mt-4 font-semibold ">
                  {work.title}
                </h3>
              </div>
            );
          })}
        </Slider>

        <div className="flex justify-center mt-4 space-x-6">
          {/* Left arrow button */}
          <button
            className="text-white"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <p className="text-center m-2">
            {activeSlide + 1} of {works.length}
          </p>
          {/* Right arrow button */}
          <button
            className="text-white"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="max-w-[38rem] mx-auto md:text-left text-center">
        <p
          className={`${poppins.className} text-white text-[16px] md:text-xl leading-relaxed mb-4 md:mb-0 inline text-left`}
        >
          We have a vast range of services across our creative and building
          arms. Our goal is to be your all-in-one powerhouse to elevate your
          brand, complete projects seamlessly, and stand out even without an
          in-house team!
          <button
            className={`${poppins.className} bg-[#00A85A] text-white text-lg font-normal py-1 px-3 ml-4 rounded-full hover:bg-[#008c4a] transition duration-300 inline-block align-middle mt-1`}
          >
            View More
            <ArrowUpRight className="inline-block ml-2 align-middle" />
          </button>
        </p>
      </div>
    </section>
  );
});

WorksSection.displayName = "WorksSection";

export default WorksSection;
