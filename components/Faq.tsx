"use client";

import { useState } from "react";
import { Poppins, Fira_Code } from 'next/font/google';
import faqs from "@/constants/Faqs";

// Load fonts with proper class names
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="my-8 md:px-[5%] px-7 py-8">
      <div className="flex flex-col md:flex-row md:justify-around">
        {/* Left Column: Heading */}
        <div className="md:w-[40%] flex flex-col items-center justify-center">
          <h2 className={`${firaCode.className} text-4xl font-medium text-gray-900 mb-7 text-start`}>
            Frequently Asked Questions
          </h2>
          <p className={`${poppins.className} mb-6 text-start text-gray-700 text-[14px] leading-6 tracking-widest`}>
            Whether you’re confused on next steps to grow your business or you’re building on a budget, we have just the right fix. These FAQs are designed to provide clarity to our service offerings, and how we wish to help you grow!
          </p>
        </div>

        {/* Right Column: FAQ */}
        <div className="md:w-[55%]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className={`${firaCode.className} w-full text-left text-lg  flex justify-between`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openQuestionIndex === index ? "-" : "+"}</span>
              </button>
              {/* Add transition effect for the FAQ answer */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openQuestionIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className={`${poppins.className} mt-4 text-gray-700 leading-4 tracking-wider text-sm`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
