
interface ProjectShowcaseProps {
  title: string
  description: string
  imagePosition: 'left' | 'right'
  category: string
}

export default function ProjectShowcase({ title, description, imagePosition, category }: ProjectShowcaseProps) {
  const content = (
    <div className="w-full lg:w-1/2 space-y-4">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2D2D]">{title}</h2>
      <p className="text-[#666666] text-base sm:text-lg leading-relaxed">{description}</p>
      <span className="inline-block text-sm font-medium text-[#6BBD00]">{category}</span>
    </div>
  )

  const image = (
    <div className="w-full lg:w-1/2">
      <div className="border-2 border-[#6BBD00] rounded-2xl overflow-hidden aspect-[4/3]">
        <img
          src="https://source.unsplash.com/random/800x600" 
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )

  return (
    <div className={`flex flex-col gap-8 lg:gap-16 items-center ${
      imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}>
      {image}
      {content}
    </div>
  )
}