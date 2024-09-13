"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#23707A] text-white flex flex-col-reverse md:flex-row items-center md:justify-around pt-[120px] md:px-[7%] px-5">
      <div className="md:w-1/2 sm:text-center pb-11">
      <div className="flex flex-col gap-[22px] lg:gap-[50px] mb-8 md:items-start items-center">
        <h2 className="text-3xl lg:text-[4rem]  font-archivo">
          Your <span className="font-cascadia ">Vision!</span>
        </h2>
        <h2 className="text-4xl lg:text-[4rem]  font-archivo">
          We <span className="font-cascadia lg:text-[6rem]">design;</span>
        </h2>
        <h2 className="text-4xl lg:text-[4rem]  font-archivo">
          We <span className="font-cascadia lg:text-[6rem]">build</span> &lt;/&gt;
        </h2>
        <p className="text-[16px] lg:text-[22px] md:text-start text-center">From ideas to life, we build brands with a unique identity, to be recognizable from the moon🚀</p>
        </div>
        <div className="flex bg-[#D8D8D8] rounded-full md:w-[90%] lg:w-[80%] h-[50px] md:h-[60px] items-center justify-between px-2 py-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-2 lg:px-4 py-2 bg-transparent rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
          />
          <button className="bg-[#00A85A] md:h-[50px] h-[40px] text-white px-2 py-1  lg:px-4 rounded-full text-[12px] lg:text-[18px]">
            Start project <span className="font-bold">-&gt;</span>
          </button>
        </div>
      </div>
      <div className="md:w-[50%] mb-8 md:mt-0 flex justify-end  ">
        <Image
          src="/Assets/Idea Img 1.png"
          alt="Person holding IDEA sign"
          width={500}
          height={500}
          className="object-contain fill-transparent md:w-[80%]" 
        />
      </div>
    </section>
  );
}
