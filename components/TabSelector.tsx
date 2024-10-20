interface TabSelectorProps {
    categories: string[]
    activeCategory: string
    setActiveCategory: (category: string) => void
  }
  
  export default function TabSelector({ categories, activeCategory, setActiveCategory }: TabSelectorProps) {
    return (
      <div className="flex justify-center mb-12 overflow-x-auto">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-[#4CAF50] text-white'
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