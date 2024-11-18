"use client";

import { useState, useEffect } from "react";
import { User, Phone, Users } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    organization: "",
    description: "",
    aim: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);
    localStorage.setItem("contactFormData", JSON.stringify(updatedFormData));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      organization: "",
      description: "",
      aim: "",
    });
    localStorage.removeItem("contactFormData");
  };
  return (
    <section className="bg-white py-16 m-4 md:m-10">
      <div className=" mx-auto px-4 md:px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in touch with our <span className="text-[#6BBD00]">team</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          The all-in-one powerhouse team to help you launch & scale faster
        </p>
        <div className="flex flex-col xl:flex-row justify-between relative">
          <div className="w-full xl:w-[40%] mb-8 xl:mb-0">
            <div className="relative mb-8">
              <Image
                src="/Assets/map.png"
                alt="World Map"
                width={600}
                height={200}
                className="w-full h-auto"
              />
              <div className="absolute top-[90%] left-[90%] transform -translate-x-[5%] -translate-y-[10%]">
                <Image
                  src="/Assets/Group 188.svg"
                  alt="Location Marker"
                  width={100}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col h-72">
                <div className="h-24 flex items-start">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">Chat to Sales</h3>
                  <p className="text-gray-600 text-xs flex-1">
                    Speak with our innovative team
                  </p>
                  <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm mt-auto">
                    Sales
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col h-72">
                <div className="h-24 flex items-start">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">Chat to Support</h3>
                  <p className="text-gray-600 text-xs flex-1">
                    We&apos;re here to help 24/7
                  </p>
                  <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm mt-auto">
                    Support
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col h-72">
                <div className="h-24 flex items-start">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2">
                    Join our growing community
                  </h3>
                  <p className="text-gray-600 text-xs flex-1">
                    Impacting 1000+ Creatives
                  </p>
                  <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm mt-auto">
                    Community
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[35%] bg-white rounded-3xl shadow-lg ">
            <div className="p-4 md:p-8 lg:px-16 py-8 ">
              <div className="flex items-center mb-[11%]">
                <Image
                  src="/Assets/Avatar 1.svg"
                  alt="Avatar 1"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <Image
                  src="/Assets/Avatar 2.svg"
                  alt="Avatar 2"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <h3 className="text-gray-700 text-xl font-semibold">
                  Let&apos;s build the next decade!
                </h3>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    className="w-full p-5 bg-white border rounded-lg border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="w-full p-5 bg-white border rounded-lg border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="email address"
                    className="w-full p-5 bg-white border rounded-xl border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-5 rounded-xl bg-white border border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Name of Organization"
                  className="w-full p-5 rounded-xl bg-white border border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Tell us more details about your business, and the scope the project in mind."
                  rows={4}
                  className="w-full p-10 rounded-xl resize-none bg-white border border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <input
                  type="text"
                  name="aim"
                  placeholder="What value do you aim to achieve with us?"
                  className="w-full p-5 rounded-xl bg-white border border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                  value={formData.aim}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#6BBD00] text-white font-semibold text-lg py-4 rounded-xl hover:bg-[#5aa500] transition duration-300 flex justify-center items-center"
                >
                  Submit
                  <svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="absolute left-[59%] top-[65%] transform -translate-x-[48%] positioning  -translate-y-1/2 hidden xl:block">
            <Image
              src="/Assets/Contact Us 1.png"
              alt="Person carrying envelope"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
