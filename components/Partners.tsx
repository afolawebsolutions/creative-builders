"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const partners = [
  { image: "/Assets/Asset 9 1.svg", name: "Partner 1" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 2" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 3" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 4" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 5" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 1" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 2" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 3" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 4" },
  { image: "/Assets/Asset 9 1.svg", name: "Partner 5" },
]

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  return (
    <section className="py-5 bg-white overflow-hidden relative   mb-3">
      <h2 className={`${firaCode.className} text-center mb-[20px] text-2xl sm:text-3xl font-extralight text-[#6BBD00]`}>
        Partners
      </h2>
      <div className="mainContainer">
        <Slider {...settings}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="container">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .mainContainer {
          overflow: hidden;
        }
        .mainContainer .container img {
          height: 30px;
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .mainContainer .container img {
            height: 35px;
          }
        }
        @media (min-width: 1024px) {
          .mainContainer .container img {
            height: 40px;
          }
        }
        .slick-track {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}