"use client";

import Image from "next/image";

const partners = [
  { image: "/Assets/Asset 9 1.svg", name: "Partner 1" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 2" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 3" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 4" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 5" },
];

export default function Partners() {
  return (
    <section className="py-8  overflow-hidden relative">
      <h2 className="text-center mb-8 text-4xl font-bold text-[#2A9D8F] py-6">
        Partners
      </h2>
      <div className="wrapper w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden ">
        {/* Scrolling container */}
        <div className="flex animate-scrollLeft ">
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
    </section>
  );
}
