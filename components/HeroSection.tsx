'use client'

import Image from "next/image"
import { forwardRef, useState } from "react"
import emailjs from "emailjs-com"
import { Toaster, toast } from "sonner"

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState("")


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    try {
      await emailjs.send(
        serviceID!,
        templateID!,
        {
          email,
        },
        userID
      )
      toast.success("Email submitted successfully!")
      setEmail("")
    } catch (error) {
      console.error("Failed to send the email:", error)
      toast.error("Failed to send the email. Please try again later.")
    }
  }

  return (
    <section
      ref={ref}
      className="bg-[#2E1F30] text-white md:pl-[5%]  px-4 pt-16 md:py-14 lg:py-24 overflow-hidden"
    >
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 xl:w-[55%] space-y-8 pt-12 md:pt-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <div className="flex items-baseline gap-4">
                <span className="font-bold text-white">Your</span>
                <span className="font-mono">Vision!</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-bold text-white">we</span>
                <span className="font-mono">design;</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-bold text-white">we</span>
                <span className="font-mono">build</span>
                <span className="font-mono">&lt;/&gt;</span>
              </div>
            </h1>
          </div>
          <p className="text-lg text-gray-200 max-w-[600px] leading-relaxed">
            Experience exponential growth in your business through creative & software solutions tailored to your business needs.
          </p>
          <form
              onSubmit={handleSubmit}
              className="flex items-center bg-[#D8D8D8]  rounded-xl p-2 max-w-xl hero-form "
            >
              <input
                type="email"
                placeholder="Tell us about your project"
                className="flex-grow px-4 small-style py-2 sm:py-3 bg-transparent rounded-full text-[#636262] placeholder-[#636262] focus:outline-none text-xs sm:text-sm hero-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#4A2D4E] hover:bg-[#5d395f] transition-colors text-white px-4 small-style py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2 hero-button"
              >
                Begin project <span className="font-bold bg-[#332434] rounded-full w-[10px] lg:w-6">→</span>
              </button>
            </form>
        </div>
     
          <div className="relative w-full h-full max-w-[800px] max-h-[800px] min-w-[360px] min-h-[350px] md:min-h-[600px] md:min-w-[500px] md:pt-9">
            <Image
              src="/Assets/Frame.svg"
              alt="Quarterly revenue chart and person with IDEA sign"
              fill
              className="object-contain"
              priority
            />
          
        </div>
      </div>
      <Toaster closeButton />
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection