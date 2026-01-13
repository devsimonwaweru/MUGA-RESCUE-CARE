"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faEnvelope,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
// Added TikTok and YouTube to imports
import { 
  faFacebook, 
  faXTwitter, 
  faInstagram,
  faWhatsapp,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'

export default function ContactPage() {
  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      
      {/* Page Header - Deep Blue */}
      <section className="bg-[#1d3557] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          We are here to help. Reach out to us for support, donations, or general inquiries.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- LEFT COLUMN: CONTACT INFO --- */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-8 border-[#e63946]">
            <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">Our team is ready to answer your questions and provide support.</p>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-[#e63946]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d3557]">Emergency Hotline</h3>
                  <p className="text-sm text-gray-500">+254-XXX-XXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#e63946]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d3557]">General Email</h3>
                  <p className="text-sm text-gray-500">info@mugarescue.or.ke</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#e63946]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d3557]">Main Office</h3>
                  <p className="text-sm text-gray-500">Muga Rescue Care HQ, Tigania West</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: CONTACT FORM --- */}
        <div className="bg-white rounded-lg shadow-xl p-8 border-t-8 border-[#e63946]">
            <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 pb-6 border-b border-gray-100">
              Send a Message
            </h2>

            {/* 
               IMPORTANT: 
               We use "action" instead of "onSubmit" to send data directly to Formspree (or similar).
               This is standard way to handle forms without a backend API.
            */}
            <form action="https://formspree.io/f/yourid" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-2">Subject</label>
                <select name="subject" className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]">
                  <option>General Inquiry</option>
                  <option>Volunteer Opportunity</option>
                  <option>Donation Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1d3557] mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#e63946] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2"
              >
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
        </div>
      </div>

      {/* --- SOCIAL MEDIA SECTION --- */}
      <div className="max-w-6xl mx-auto pt-8 pb-20 px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-4">Connect With Us</h2>
          <p className="text-gray-600">Follow our updates and join the conversation on social media.</p>
        </div>

        {/* Updated to 4 Columns for TikTok and YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-[#1877F2] transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" style={{ color: '#1877F2' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-[#1877F2] transition-colors">Facebook</span>
          </a>

          {/* Twitter / X */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-[#1DA1F2] transition-colors">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl" style={{ color: '#1DA1F2' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-[#1DA1F2] transition-colors">X</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-[#E1306C] transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" style={{ color: '#E1306C' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-[#E1306C] transition-colors">Instagram</span>
          </a>

          {/* YouTube - Updated Layout */}
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="text-xl" style={{ color: '#FF0000' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-black transition-colors">YouTube</span>
          </a>

          {/* TikTok - New Requested Platform */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <FontAwesomeIcon icon={faTiktok} className="text-xl" style={{ color: '#FFFFFF' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-black transition-colors">TikTok</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/254XXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg hover:shadow-lg transition border border-gray-100 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" style={{ color: '#25D366' }} />
            </div>
            <span className="font-bold text-gray-700 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
          </a>

        </div>
      </div>
    </div>
  )
}