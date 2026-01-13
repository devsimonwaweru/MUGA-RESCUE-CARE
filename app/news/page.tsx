"use client"

import { useState } from 'react'
import Image from 'next/image'
import NewsModal from '@/components/NewsModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

// Mock Data
const NEWS_DATA = [
  {
    id: 1,
    title: 'Emergency Medical Evacuation in Remote Village',
    date: 'October 12, 2024',
    author: 'Muga Rescue Team',
    image: '/about-mission.jpg', 
    content: 'Our rapid response team successfully evacuated a critically ill patient from a remote village in Meru. The patient required urgent specialized care which was unavailable locally. Thanks to our donors, we arranged transport and facilitated admission to a regional hospital. This mission highlights the critical need for accessible emergency medical transport in rural areas.'
  },
  {
    id: 2,
    title: 'Food Distribution Drive Reaches 200 Families',
    date: 'September 28, 2024',
    author: 'Volunteer Coordinator',
    image: '/hero.jpg',
    content: 'We concluded a successful food drive in the northern region, supporting over 200 families affected by recent drought. Our volunteers distributed maize, beans, and cooking oil. We also provided nutritional supplements to children under five years old. We extend our gratitude to our partners who made this possible.'
  },
  {
    id: 3,
    title: 'Launch of Muga Rescue App',
    date: 'September 15, 2024',
    author: 'Tech Team',
    image: '/about-founder.jpg',
    content: 'We are excited to announce the launch of the Muga Rescue Care digital platform. This platform allows users to request help instantly via their phones. The app is currently in a pilot phase and will be fully rolled out by the end of the year. Download now to stay updated.'
  }
]

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState(NEWS_DATA[0]) 
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (news: typeof NEWS_DATA[0]) => {
    setSelectedNews(news)
    setIsModalOpen(true)
  }

  return (
    <div className="pt-20 min-h-screen bg-blue-50">
      <div className="container mx-auto px-6 py-16">
        
        <div className="text-center mb-12">
          {/* Fixed typo from <h1 className...> to <h1 className...> */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">News & Updates</h1>
          <p className="text-lg text-[#1d3557] max-w-2xl mx-auto">
            Latest rescue stories, community impact updates, and announcements from the field.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((news) => (
            <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition border border-blue-100 flex flex-col">
              <div className="relative h-48">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-[#e63946] font-bold mb-3">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{news.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1d3557] mb-3 font-serif">
                  {news.title}
                </h3>
                
                <p className="text-[#1d3557] opacity-80 mb-6 line-clamp-2">
                  {news.content}
                </p>

                <button 
                  onClick={() => openModal(news)}
                  className="mt-auto w-full bg-[#e63946] text-white py-2 rounded font-bold hover:bg-red-700 transition"
                >
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pop Up Component */}
      <NewsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        news={selectedNews}
      />
    </div>
  )
}