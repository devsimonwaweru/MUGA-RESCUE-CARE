"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHandHoldingHeart, 
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
 
    <nav className="fixed top-0 w-full z-9999 bg-[#e63946] text-white shadow-2xl h-20 flex items-center border-b border-red-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - White Text */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 z-50">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white" />
          <span className="hidden sm:inline">Muga Rescue Care</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold">
          <Link 
            href="/" 
            className={`transition hover:text-gray-200 ${isActive('/') ? 'underline' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition hover:text-gray-200 ${isActive('/about') ? 'underline' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`transition hover:text-gray-200 ${isActive('/services') ? 'underline' : ''}`}
          >
            Get Help
          </Link>
          <Link 
            href="/volunteer" 
            className={`transition hover:text-gray-200 ${isActive('/volunteer') ? 'underline' : ''}`}
          >
            Volunteer
          </Link>
          <Link 
            href="/contact" 
            className={`transition hover:text-gray-200 ${isActive('/contact') ? 'underline' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Donate Button - White Background */}
        <div className="hidden md:block">
          <Link href="/volunteer#donate" className="bg-white text-[#e63946] px-8 py-3 rounded-full font-extrabold shadow-xl hover:bg-gray-100 transition">
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-3xl text-white focus:outline-none z-50"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl flex flex-col items-center py-6 gap-6 md:hidden border-t-4 border-[#e63946]">
          <Link 
            href="/" 
            onClick={toggleMenu} 
            className="text-xl font-bold text-[#e63946] w-full text-center"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={toggleMenu} 
            className="text-xl font-bold text-[#e63946] w-full text-center"
          >
            About
          </Link>
          <Link 
            href="/services" 
            onClick={toggleMenu} 
            className="text-xl font-bold text-[#e63946] w-full text-center"
          >
            Get Help
          </Link>
          <Link 
            href="/volunteer" 
            onClick={toggleMenu} 
            className="text-xl font-bold text-[#e63946] w-full text-center"
          >
            Volunteer
          </Link>
          <Link 
            href="/contact" 
            onClick={toggleMenu} 
            className="text-xl font-bold text-[#e63946] w-full text-center"
          >
            Contact
          </Link>
          
          {/* Mobile Donate Button */}
          <Link 
            href="/volunteer#donate" 
            onClick={toggleMenu} 
            className="bg-[#e63946] text-white px-8 py-4 rounded-full font-extrabold shadow-xl w-3/4 text-center"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  )
}