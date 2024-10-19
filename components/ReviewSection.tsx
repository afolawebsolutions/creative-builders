import { forwardRef } from 'react';
import Image from 'next/image';
import reviews from '@/constants/Reviews';

// Use forwardRef to pass the ref from the parent component
const ReviewsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-12 px-3 md:px-[5%] lg:px-[10%]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What our <span className="text-[#6BBD00]">client</span> have to say about us!
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[60%] mb-8 md:mb-0">
            <Image
              src="/Assets/image 4.svg"
              alt="Client Illustration"
              width={600}
              height={500}
              layout="responsive"
              className="mix-blend-multiply w-full"
            />
          </div>
          <div className="w-full md:w-[30%] bg-[#2E1F30]  rounded-[40px] p-6 pb-14 " >
            <h3 className="text-[3rem] font-bold text-[#6BBD00] mb-6 ml-5">Reviews </h3>
            <div className="space-y-8 pl-5">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full "
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[14px] md:text-[22px]">{review.name}</h4>
                    <p className="text-white text-[11px] md:text-[12px]">
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
  );
});

ReviewsSection.displayName = 'ReviewsSection'; // Necessary for forwardRef components

export default ReviewsSection;
