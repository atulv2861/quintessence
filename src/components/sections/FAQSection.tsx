import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { FAQS } from '../../data/constants'

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(FAQS.map(faq => faq.category)))]

  const filteredFAQs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you don't see an answer to your question, you can send us an email from our contact form.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
              <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div key={faq.id} className="faq-item bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(index)}
                    className="faq-question w-full flex items-center justify-between p-6"
                  >
                    <span className="text-left pr-4">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-primary-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6">
                Our team is here to help. Contact us for personalized assistance with your healthcare infrastructure needs.
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
