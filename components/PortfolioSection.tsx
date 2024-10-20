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
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center my-4 text-[#333333]">Our Portfolio</h1>
      <p className="text-center mb-8 text-[#666666]">
        See through our screens! Get <span className="text-[#7209B7]">Inspired</span>, Get{' '}
        <span className="text-[#7209B7]">Creative</span>!
      </p>
      
      <TabSelector categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <div className="space-y-24 mt-12">
        {filteredProjects.map((project, index) => (
          <ProjectShowcase key={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-12">
        <button className="px-6 py-2 border border-[#4CAF50] text-[#4CAF50] rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors">
          Show More
        </button>
        <button className="px-6 py-2 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors">
          Book with us!
        </button>
      </div>
    </section>
  )
}