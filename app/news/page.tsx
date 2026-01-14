"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import NewsModal from '@/components/NewsModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { client, urlFor } from '@/lib/sanity'

// 1. Interface for Sanity Data
interface NewsItem {
  _id: string;
  title: string;
  publishedAt: string;
  author: string;
  mainImage: any; 
  content: any;   
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]) 
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // 2. Fetch data from Sanity
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = `*[_type == "news"] | order(publishedAt desc) {
          _id,
          title,
          publishedAt,
          author,
          mainImage,
          content
        }`
        
        const data = await client.fetch(query)
        setNewsData(data)
      } catch (error) {
        console.error("Failed to fetch news:", error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchNews()
  }, [])

  const openModal = (news: NewsItem) => {
    setSelectedNews(news)
    setIsModalOpen(true)
  }

  if (loading) return <div className="pt-20 text-center text-xl">Loading updates...</div>

  return (
    <div className="pt-20 min-h-screen bg-blue-50">
      <div className="container mx-auto px-6 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">News & Updates</h1>
          <p className="text-lg text-[#1d3557] max-w-2xl mx-auto">
            Latest rescue stories, community impact updates, and announcements from the field.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => {
            const imageUrl = news.mainImage ? urlFor(news.mainImage).url() : '/placeholder.jpg'
            const dateStr = new Date(news.publishedAt).toLocaleDateString()

            return (
              <div key={news._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition border border-blue-100 flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src={imageUrl} 
                    alt={news.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-[#e63946] font-bold mb-3">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{dateStr}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1d3557] mb-3 font-serif">
                    {news.title}
                  </h3>
                  
                  <p className="text-[#1d3557] opacity-80 mb-6 text-sm">
                    By {news.author || 'Muga Team'}
                  </p>

                  <button 
                    onClick={() => openModal(news)}
                    className="mt-auto w-full bg-[#e63946] text-white py-2 rounded font-bold hover:bg-red-700 transition"
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Pop Up Component */}
      {selectedNews && (
        <NewsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          news={selectedNews}
        />
      )}
    </div>
  )
}