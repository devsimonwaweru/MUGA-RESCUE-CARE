import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Muga Rescue Care</h3>
            <p className="text-sm mb-4">
              Building a Tigania West where everyone has access to help when it matters most.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Get Help</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/volunteer#donate" className="hover:text-white">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded text-gray-900 text-sm" />
              <button className="bg-brand-red text-white px-4 py-2 rounded font-bold text-sm hover:bg-red-700">Go</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Muga Rescue Care. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}