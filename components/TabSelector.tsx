interface TabSelectorProps {
  categories: string[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function TabSelector({ categories, activeCategory, setActiveCategory }: TabSelectorProps) {
  return (
    <div className="w-full max-w-full overflow-x-auto " >
      <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-200 min-w-max mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-xl text-base lg:text-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === category
                ? 'bg-[#6BBD00] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}