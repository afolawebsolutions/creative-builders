"use client";

import Image from "next/image";
import { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    try {
      await emailjs.send(
        serviceID!,
        templateID!,
        {
          email,
        },
        userID
      );
      toast.success("Email submitted successfully!");
      setEmail("");
    } catch (error) {
      console.error("Failed to send the email:", error);
      toast.error("Failed to send the email. Please try again later.");
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className=" bg-[#2E1F30] text-white flex flex-col justify-between  px-2 sm:px-4 lg:px-8 overflow-hidden relative"
    >
      <div className="max-w-[92%] mx-auto mt-32 lg:mt-16 w-full flex-grow flex flex-col justify-center  items-center md:items-stretch md:relative lg:pt-0 pb-8 sm:pb-10 md:pb-12 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div className="space-y-8 lg:space-y-12 z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="font-archivo font-extrabold">Your</span>{" "}
              <span className="font-cascadia">vision!</span>
              <br/>
              <span className="font-archivo font-extrabold">we</span>{" "}
              <span className="font-cascadia">design;</span>
              <br />
              <span className="font-archivo font-extrabold">we</span>{" "}
              <span className="font-cascadia">build</span>{" "}
              <span className="font-cascadia">&lt;/&gt;</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-xl opacity-90">
              Experience exponential growth in your business through creative & software solutions tailored to your business needs.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-[#D8D8D8] rounded-xl p-2 max-w-xl hero-form"
            >
              <input
                type="email"
                placeholder="Tell us about your project"
                className="flex-grow px-4 py-2 sm:py-3 bg-transparent rounded-full text-[#636262] placeholder-[#636262] focus:outline-none text-xs sm:text-sm hero-input"
                value={email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-[#4A2D4E] hover:bg-[#5d395f] transition-colors text-white px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2 hero-button"
              >
                Begin a project <span className="font-bold bg-[#332434] rounded-full w-6">→</span>
              </button>
            </form>
          </div>
          <div className="relative w-[110%] lg:w-[120%] h-[600px] md:h-[600px] lg:h-[800px] xl:h-[800px] flex flex-col">
            <div className="flex-grow relative scale-125 md:scale-90 lg:scale-90">
              <Image
                src="/Assets/homepage shot 1.svg"
                alt="Person with IDEA sign"
                layout="fill"
                priority
                className="object-contain object-right w-full h-full"
              />
              <div className="absolute top-[10%] left-12 w-[32%] h-[50%]">
                <Image
                  src="/Assets/Group 147.svg"
                  alt="Quarterly Revenue"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-text">
          <div className="flex justify-end space-x-6 sm:space-x-10 lg:space-x-16 text-sm sm:text-base lg:text-lg pr-4 sm:pr-8 lg:pr-0">
            <span className="text-[#96519F] hover:text-[#a65caf] transition-colors cursor-pointer ">Design</span>
            <span className="text-[#96519F] hover:text-[#a65caf] transition-colors cursor-pointer">Video</span>
            <span className="text-[#96519F] hover:text-[#a65caf] transition-colors cursor-pointer">Tech</span>
          </div>
        </div>
      </div>
      <Toaster closeButton />
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;