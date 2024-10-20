import Image from 'next/image'

interface ProjectShowcaseProps {
  title: string
  description: string
  imagePosition: 'left' | 'right'
  category: string
}

export default function ProjectShowcase({ title, description, imagePosition, category }: ProjectShowcaseProps) {
  const content = (
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold mb-4 text-[#333333]">{title}</h2>
      <p className="text-[#666666] mb-2">{description}</p>
      <span className="text-sm text-[#4CAF50]">{category}</span>
    </div>
  )

  const image = (
    <div className="w-full md:w-1/2">
      <div className="border border-[#4CAF50] rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Project Image" width={600} height={400} className="w-full h-full object-cover" />
      </div>
    </div>
  )

  return (
    <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      {image}
      {content}
    </div>
  )
}