"use client"
import { Archivo  , Fira_Code} from 'next/font/google';
import Image from 'next/image'


const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700', '900']

})

const services = [
  { title: 'Brand Identity Design', image: '/Assets/Mask group.png', color: 'text-green-500' },
  { title: 'Web & Graphics Design', image: '/Assets/image.png', color: 'text-green-500' },
  { title: 'Video Production', image: '/Assets/image (1).png', color: 'text-green-500' },
  { title: 'Product Photography', image: '/Assets/image (2).png', color: 'text-green-500' },
  { title: 'Web Development', image: '/Assets/Group 8.png', color: 'text-green-500' },
  { title: 'App Development', image: '/Assets/image (3).png', color: 'text-green-500' },
  { title: 'Sales Funnel Development', image: '/Assets/image (4).png', color: 'text-green-500' },
  { title: 'Technical Consulting', image: '/Assets/image (5).png', color: 'text-green-500' },
]

export default function ServicesSection() {
  return (
    <section className="bg-white p-8 md:p-16">
      <h2 className={` ${archivo.className} text-10xl md:text-5xl font-extrabold mb-4 text-center text-[#545c58]`}>Our Services</h2>
      <p className={`${firaCode.className} text-center mb-12 text-{#000000} text-xl`}>
        Your all-in-one powerhouse to launch and scale simple and extensive projects.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-11">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="w-full aspect-square relative mb-4">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-[40px]"
              />
            </div>
            <h3 className={`font-semibold text-center hover:underline ${service.color}`}>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
