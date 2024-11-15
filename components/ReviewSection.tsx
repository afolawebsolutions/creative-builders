import { forwardRef } from 'react'
import Image from 'next/image'
import reviews from '@/constants/Reviews'

const ReviewsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 md:px-8 lg:px-[5%]">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          What our <span className="text-[#6BBD00]">client</span> have to say about us!
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="w-full lg:w-[60%]">
            <Image
              src="/Assets/image 4.svg"
              alt="Client Illustration"
              width={600}
              height={500}
              layout="responsive"
              className="mix-blend-multiply w-full"
            />
          </div>
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[35%] bg-[#2E1F30] rounded-[40px] p-6 pb-10">
            <h3 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-[#6BBD00] mb-4 sm:mb-6 ml-4">Reviews</h3>
            <div className="space-y-6 sm:space-y-8 pl-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg md:text-xl">{review.name}</h4>
                    <p className="text-white text-xs sm:text-sm md:text-base">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ReviewsSection.displayName = 'ReviewsSection'

export default ReviewsSection