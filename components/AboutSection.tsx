import Image from 'next/image';
import { Poppins, Fira_Code } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-18 lg:py-24 flex flex-col md:flex-row items-center md:px-[5%]">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image 
          src="/Assets/image 3.png" 
          alt="Person with raised arm" 
          width={500} 
          height={500}
          className="w-full min-h-[400px] "
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className={`${firaCode.className} text-[#545c58] mb-4`} style={{ fontSize: '15px' }}>
          About Us
        </h2>
        <h1 
          className={`${firaCode.className} text-[#545c58] leading-tight mb-6`} 
          style={{ fontSize: 'clamp(2.5rem, 5vw, 70px)' }}
        >
          Sky&apos;s the limit, we aim for the moon!
        </h1>
        <p className={`${poppins.className} text-[#000000] mb-8 leading-relaxed`} style={{ fontSize: 'clamp(1rem, 2vw, 15px)' }}>
          At Creative Builders, we believe in the power of creativity to transform ideas into impactful brands. Our mission is to craft unique, innovative solutions that elevate your brand, provide unique identities, and solution-oriented platforms to drive success.
        </p>
        <div className='flex justify-center md:justify-start'>
        <button className={`${poppins.className} bg-[#00A85A] flex  text-white text-lg font-normal py-3 px-5 rounded-full hover:bg-[#008c4a] transition duration-300`}>
          Know more
        </button>
        </div>
      </div>
    </section>
  );
}
