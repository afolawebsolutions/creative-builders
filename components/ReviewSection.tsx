import Image from 'next/image'
import reviews from '@/constants/Reviews'

export default function ReviewsSection() {
  return (
    <section className=" py-12 px-3 md:px-[5%] lg:px-[8%]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What our <span className='text-green-500'>client</span> have to say about us!</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[60%] mb-8 md:mb-0">
            <Image src="/Assets/image 4.svg" alt="Client Illustration" width={600} height={500} layout="responsive" 
            className='mix-blend-multiply w-full'
            />
          </div>
          <div className="w-full md:w-[40%] bg-gray-200 rounded-3xl p-6">
            <h3 className="text-3xl font-bold text-green-500 mb-6">Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div 
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-200 ${
                        review.status === 'green' ? 'bg-green-500' :
                        review.status === 'yellow' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px] md:text-[16px]">{review.name}</h4>
                    <p className="text-gray-700 text-[12px] md:text-[14px]">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
