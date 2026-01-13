"use client"

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  news: {
    title: string
    date: string
    image: string
    content: string
    author: string
  } | null
}

export default function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  if (!isOpen || !news) return null

  return (
    <>
      {/* 
         Backdrop: 
         z-[10000] -> Ensures it sits ABOVE the Navbar (z-[9999]) and Footer
      */}
      <div className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4 animate-in fade-in duration-200">
        
        {/* 
           Modal Container: 
           flex-col (Mobile) -> Stacked
           md:flex-row (Desktop) -> Side-by-Side (Horizontal)
        */}
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative">
          
          {/* Left Side: Image (40% width on Desktop) */}
          <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-100">
            <Image 
              src={news.image} 
              alt={news.title} 
              fill 
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Right Side: Content (60% width on Desktop, Scrollable) */}
          <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto relative">
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-[#1d3557] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition z-20"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="flex items-center justify-between mb-4 mt-8">
              <span className="text-xs font-bold text-[#1d3557] bg-blue-100 px-3 py-1 rounded-full">
                {news.date}
              </span>
              <span className="text-xs text-gray-500">By {news.author}</span>
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-6 leading-tight">
              {news.title}
            </h2>
            
            <div className="prose prose-blue max-w-none text-[#1d3557] leading-relaxed">
              <p>{news.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}