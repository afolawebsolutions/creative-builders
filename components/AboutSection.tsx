"use client";

import Image from 'next/image';
import { Poppins, Fira_Code } from 'next/font/google';
import { forwardRef, RefObject } from 'react';
import { ArrowDown } from 'lucide-react';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});
interface AboutProps {

  section3Ref: RefObject<HTMLDivElement>;

}

// Using forwardRef to accept and forward a ref
const AboutSection = forwardRef<HTMLDivElement, AboutProps>(({ section3Ref }, ref)=>{
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <section
      id='aboutme'
      ref={ref}
      className=" mx-auto px-6 py-16 md:py-18 lg:py-24 flex flex-col md:flex-row  justify-center md:px-[5%]"
    >
      <div className="md:w-[50%] mb-8 md:mb-0">
        <Image 
          src="/Assets/image 3.png" 
          alt="Person with raised arm" 
          width={500} 
          height={500}
          className="w-full min-h-[230px] md:min-h-[300px] lg:min-h-[400px]  rounded-xl"
        />
      </div>
      <div className="md:w-1/2 md:pl-[4rem] md:pr-[12rem]">
        <h2 className={`${firaCode.className} text-[#FF00A1] mb-4`}  style={{ fontSize: '15px' }}>
          About Us
        </h2>
        <h1 
          className={`${firaCode.className} text-black font-semi-bold leading-tight mb-6  `} 
          style={{ fontSize: 'clamp(2.5rem, 5vw, 84px)' }}
        >
          Sky&apos;s the limit, we aim for the <span className="text-[#6BBD00]">moon! </span>
        </h1>
        <p className={`${poppins.className} text-[#000000] mb-8 leading-relaxed`} style={{ fontSize: 'clamp(1rem, 2vw, 18px)' }}>
          At Creative Builders, we believe in the power of creativity to transform ideas into impactful brands. Our mission is to craft unique, innovative solutions that elevate your brand, provide unique identities, and solution-oriented platforms to drive success.
        </p>
        <div className='flex justify-center md:justify-start'>
        <button onClick={() => scrollToSection(section3Ref)} className={`${poppins.className} text-[#6BBD00] flex items-center bg-white text-sm font-normal py-3 px-5 rounded-xl border-2 border-[#6BBD00] hover:bg-slate-100 transition duration-300`}>
  Our Services
  <ArrowDown/>
</button>

        </div>
      </div>
    
    </section>
    </>
  );
});

// Setting a display name for better debugging
AboutSection.displayName = 'AboutSection';

export default AboutSection;
