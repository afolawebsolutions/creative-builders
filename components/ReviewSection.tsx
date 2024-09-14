import Image from 'next/image'

const reviews = [
  {
    name: 'Alice',
    image: '/placeholder.svg?height=48&width=48',
    comment: 'Team approved the designs! Love it 💕.',
    status: 'green'
  },
  {
    name: 'Joshua',
    image: '/placeholder.svg?height=48&width=48',
    comment: 'Very responsive, when can we start the app?',
    status: 'yellow'
  },
  {
    name: 'Emmanuel',
    image: '/placeholder.svg?height=48&width=48',
    comment: 'Thanks mate, the video campaign just hit 1M!',
    status: 'green'
  },
  {
    name: 'Christine',
    image: '/placeholder.svg?height=48&width=48',
    comment: 'Never knew I could launch a product that fast...',
    status: 'gray'
  },
  {
    name: 'Joy',
    image: '/placeholder.svg?height=48&width=48',
    comment: 'My husband loves the logo! Thanks a bunch🙏',
    status: 'green'
  }
]

export default function ReviewsSection() {
  return (
    <section className="bg-[#e6f3fa] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What our client have to say about us!</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image src="/Assets/image 4.svg" alt="Client Illustration" width={400} height={300} layout="responsive" />
          </div>
          <div className="w-full md:w-5/12 bg-gray-200 rounded-3xl p-6">
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
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <p className="text-gray-700">{review.comment}</p>
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