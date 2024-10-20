interface TabSelectorProps {
  categories: string[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function TabSelector({ categories, activeCategory, setActiveCategory }: TabSelectorProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-white rounded-full p-1 border border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-8 py-4 rounded-lg text-base font-medium transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-[#7BBB00] text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
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