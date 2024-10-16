"use client";

import Image from "next/image";
import { Fira_Code } from 'next/font/google';

const partners = [
  { image: "/Assets/Asset 9 1.svg", name: "Partner 1" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 2" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 3" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 4" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 5" },
];

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export default function Partners() {
  return (
    <section className="py-5 bg-white overflow-hidden relative mb-2">
      <h2 className={`${firaCode.className} text-center mb-[20px] text-3xl font-extralight text-[#23707A] `}>
        Partners
      </h2>
      <div className="wrapper w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden pb-6 ">
        {/* Scrolling container */}
        <div className="flex animate-scrollLeft ">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <Image
                src={partner.image}
                alt={partner.name}
                width={150}
                height={50}
                className="w-auto h-9 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
