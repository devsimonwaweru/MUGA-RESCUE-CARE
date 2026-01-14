"use client"

import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react' // <--- REQUIRED

interface NewsItem {
  title: string;
  publishedAt: string;
  author: string;
  mainImage: any;
  content: any;
}

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  news: NewsItem
}

const NewsModal = ({ isOpen, onClose, news }: NewsModalProps) => {
  if (!isOpen) return null

  const imageUrl = news.mainImage ? urlFor(news.mainImage).url() : '/placeholder.jpg'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 z-10"
        >
          ✕
        </button>

        <div className="relative h-64 md:h-80 w-full">
          <Image 
            src={imageUrl} 
            alt={news.title} 
            fill 
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 text-gray-500 mb-4 text-sm">
             <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
             <span>•</span>
             <span>By {news.author}</span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-6">
            {news.title}
          </h2>

          <div className="prose max-w-none text-gray-800">
            <PortableText 
              value={news.content}
              components={{
                block: {
                  normal: ({children}) => <p className="mb-4">{children}</p>,
                }
              }}
            />
          </div>

          <div className="mt-8">
            <button 
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsModal