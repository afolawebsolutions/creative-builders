import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="bg-white py-12 px-8 md:px-[5%] lg:px-[8%] flex flex-col md:flex-row">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in touch with our <span className="text-green-500">team</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          The all-in-one powerhouse team to help you launch & scale faster
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/Assets/map.png"
              alt="Dotted World Map"
              width={1000}
              height={1000}
              className="w-full h-auto"
              layout='responsive'
            />
          </div>
          <div className="w-full lg:w-1/2 bg-gray-200 rounded-3xl p-6 md:py-8 md:px-[15%] lg:px-[5%] relative">
            <h3 className="md:text-2xl text-lg font-semibold mb-6 text-center font-cascadia">
              Let&apos;s get to know <span className="text-teal-600">you</span>
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="w-full p-3 rounded-full bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full p-3 rounded-full bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="email address"
                  className="w-full p-3 rounded-full bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-full bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                />
              </div>
              <input
                type="text"
                placeholder="Name of Organization"
                className="w-full p-3 rounded-full bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
              />
              <textarea
                placeholder="Tell us more about your organization"
                rows={4}
                className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
              ></textarea>
              <textarea
                placeholder="What value do you aim to achieve with us?"
                rows={4}
                className="w-full p-3 rounded-2xl bg-white border-2 border-teal-600 placeholder-gray-400 focus:outline-none focus:border-teal-700"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </form>
            <div className=" absolute -bottom-[-75px] -left-36 w-56 h-56 lg:w-48 lg:h-48">
              <Image
                src="/Assets/Contact Us 1.png"
                alt="Person carrying envelope"
                width={400}
                height={500}
                className="w-full h-auto hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}