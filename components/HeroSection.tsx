"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#23707A] text-white flex flex-col md:flex-row items-center justify-around pt-5 md:px-[5%] lg:px-[10%]">
      <div className="md:w-1/2">
      <div className="flex flex-col gap-[22px] lg:gap-[50px] mb-8">
        <h2 className="text-3xl lg:text-[4rem]  font-archivo">
          Your <span className="font-cascadia ">Vision!</span>
        </h2>
        <h2 className="text-4xl lg:text-[4rem]  font-archivo">
          We <span className="font-cascadia lg:text-[6rem]">design;</span>
        </h2>
        <h2 className="text-4xl lg:text-[4rem]  font-archivo">
          We <span className="font-cascadia lg:text-[6rem]">build</span> &lt;/&gt;
        </h2>
        <p className="text-[16px] lg:text-[22px]">From ideas to life, we build brands with a unique identity, to be recognizable from the moon🚀</p>
        </div>
        <div className="flex md:flex-row bg-[#D8D8D8] rounded-full w-[90%] lg:w-[80%] h-[50px] items-center justify-between px-2 py-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-2 lg:px-4 py-2 bg-transparent rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
          />
          <button className="bg-[#4caf50] h-[40px] text-white px-2 py-1  lg:px-4 rounded-full text-[14px] lg:text-[18px]">
            Start a project -&gt;
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/Assets/Idea Img 1.png"
          alt="Person holding IDEA sign"
          width={500}
          height={500}
          className="object-contain" // Ensures the image covers the area while maintaining its aspect ratio
        />
      </div>
    </section>
  );
}
