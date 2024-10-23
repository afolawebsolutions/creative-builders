"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Component() {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    organization: "",
    description: "",
    aim: "",
  })

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(updatedFormData)
    localStorage.setItem("contactFormData", JSON.stringify(updatedFormData))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      organization: "",
      description: "",
      aim: "",
    })
    localStorage.removeItem("contactFormData")
  }

  return (
    <section className="bg-white py-16">
      <div className="container max-w-none px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in touch with our <span className="text-[#6BBD00]">team</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          The all-in-one powerhouse team to help you launch & scale faster
        </p>
        <div className="flex flex-col lg:flex-row justify-between lg:px-16 relative">
          <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
            <div className="relative">
              <Image
                src="/Assets/map.png"
                alt="World Map"
                width={600}
                height={200}
                className="w-full h-auto"
              />
              <div className="absolute top-[68%] left-[88%] transform -translate-x-[60%]-translate-y-1/2">
              <Image
                src="/Assets/Group 188.svg"
                alt="World Map"
                width={50}
                height={50}
                className="w-full h-auto"
              />
              </div>
            </div>
            <div className="flex-wrap flex justify-center md:grid-cols-3 gap-4  lg:absolute lg:left-36 lg:-bottom-[0rem]">
              <div className="bg-gray-50 p-4 h-[20rem] w-[15rem] rounded-lg">
                <svg className="w-6 h-6 text-gray-600 mb-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Chat to Sales</h3>
                <p className="text-gray-600 text-xs mb-12">Speak with our innovative team</p>
                <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm">
                  Sales
                </button>
              </div>
              <div className="bg-gray-50 p-4 h-[20rem] w-[15rem] rounded-lg">
                <svg className="w-6 h-6 text-gray-600 mb-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Chat to Support</h3>
                <p className="text-gray-600 text-xs mb-12">We&apos;re here to help 24/7</p>
                <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm">
                  Support
                </button>
              </div>
              <div className="bg-gray-50 p-4 h-[20rem] w-[15rem] rounded-lg">
                <svg className="w-6 h-6 text-gray-600 mb-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Join our growing community</h3>
                <p className="text-gray-600 text-xs mb-6">Impacting 1000+ Creatives</p>
                <button className="w-full py-2 px-4 rounded-sm border border-[#6BBD00] text-[#6BBD00] hover:bg-[#6BBD00] hover:text-white transition-colors duration-300 text-sm">
                  Community
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[35%] lg:h-[10%] bg-white rounded-3xl lg:rounded-l-3xl shadow-lg lg:-mr-4">
            <div className="p-16 pb-8">
              <div className="flex items-center mb-6">
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
              <form className="space-y-4 " onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    className="w-full p-5 l bg-white border rounded-lg border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="w-full p-5  bg-white border rounded-lg border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
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
                    className="w-full lg:w-[120%] p-5  bg-white border rounded-xl border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className=" w-full lg:w-[80%] lg:ml-[3.28rem] p-5 rounded-xl bg-white border border-[#6BBD00] placeholder-gray-300 focus:outline-none focus:border-[#6BBD00] text-center text-lg"
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
        </div>
        <div className="relative">
          <Image
            src="/Assets/Contact Us 1.png"
            alt="Person carrying envelope"
            width={350}
            height={350}
            className="absolute bottom-[0.5rem] left-[51.2%] hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}