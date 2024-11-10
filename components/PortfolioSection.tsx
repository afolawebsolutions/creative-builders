

'use client'

import { useState } from 'react'
import ProjectShowcase from './ProjectShowcase'
import TabSelector from './TabSelector'

const categories = ['All', 'Graphics Design', 'Visual Identity', 'Websites', 'Video Productions', 'Web Design']

type Project = {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  category: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Website Redesign",
    description: "A complete overhaul of an outdated e-commerce platform, focusing on user experience and mobile responsiveness. The new design increased conversion rates by 25% and reduced cart abandonment.",
    imagePosition: "left",
    category: "Websites"
  },
  {
    title: "Brand Identity for Tech Startup",
    description: "Created a cohesive brand identity for a promising tech startup, including logo design, color palette, and brand guidelines. The new branding helped secure additional funding and attract top talent.",
    imagePosition: "right",
    category: "Visual Identity"
  },
  {
    title: "Mobile App UI/UX Design",
    description: "Designed an intuitive and visually appealing user interface for a fitness tracking mobile app. The app saw a 40% increase in daily active users after the redesign and received positive user feedback.",
    imagePosition: "left",
    category: "Web Design"
  },
  {
    title: "Corporate Video Production",
    description: "Produced a high-quality corporate video showcasing the company's values, culture, and achievements. The video was used in marketing campaigns and internal communications, boosting brand awareness and employee morale.",
    imagePosition: "right",
    category: "Video Productions"
  },
  {
    title: "Infographic Design Series",
    description: "Created a series of visually striking infographics to simplify complex data for a financial services company. The infographics were widely shared on social media, increasing engagement and establishing the company as a thought leader.",
    imagePosition: "left",
    category: "Graphics Design"
  },
  {
    title: "Restaurant Menu Redesign",
    description: "Redesigned the menu for a popular local restaurant, improving readability and highlighting key dishes. The new menu design led to an increase in sales of featured items and positive customer feedback.",
    imagePosition: "right",
    category: "Graphics Design"
  },
  {
    title: "Social Media Marketing Campaign",
    description: "Developed and executed a comprehensive social media marketing campaign for a new product launch. The campaign resulted in a 50% increase in social media followers and a 30% boost in product sales.",
    imagePosition: "left",
    category: "Graphics Design"
  },
  {
    title: "Corporate Website Overhaul",
    description: "Completely redesigned and developed a new corporate website for a multinational company. The new site improved user engagement, reduced bounce rates, and increased lead generation by 40%.",
    imagePosition: "right",
    category: "Websites"
  },
  {
    title: "Product Explainer Video",
    description: "Created an engaging animated explainer video for a complex software product. The video simplified the product's features and benefits, resulting in a 35% increase in demo requests.",
    imagePosition: "left",
    category: "Video Productions"
  },
  {
    title: "Mobile-First Web Application",
    description: "Designed and developed a mobile-first web application for a healthcare provider. The app improved patient engagement and streamlined appointment scheduling, resulting in a 20% reduction in no-shows.",
    imagePosition: "right",
    category: "Web Design"
  }
]
export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-[#2D2D2D]">Our Portfolio</h1>
      <p className="text-center mb-12 text-[#666666] text-lg">
        See through our screens! Get <span className="text-[#7209B7] font-semibold">Inspired</span>, Get{' '}
        <span className="text-[#7209B7] font-semibold">Creative</span>!
      </p>
      
      <div className="flex justify-center items-center mb-16">
        <TabSelector categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      <div className="space-y-24 mt-16">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <ProjectShowcase {...project} />
            {index < filteredProjects.length - 1 && (
              <hr className="my-12 border-t border-gray-200" />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16">
        <button className="w-full sm:w-auto px-8 py-3 border-2 border-[#6BBD00] text-[#6BBD00] rounded-full hover:bg-[#6BBD00] hover:text-white transition-colors text-lg font-medium">
          Show More
        </button>
        <button className="w-full sm:w-auto px-8 py-3 bg-[#6BBD00] text-white rounded-full hover:bg-[#5ca600] transition-colors text-lg font-medium">
          Book with us!
        </button>
      </div>
    </section>
  )
}