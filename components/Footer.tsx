import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHandHoldingHeart, 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import { 
  faXTwitter,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* --- COLUMN 1: BRAND & MISSION --- */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Muga Rescue Care</h3>
            <p className="text-sm mb-4">
              Building a Tigania West where everyone has access to help when it matters most.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-brand-red transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Get Help</Link></li>
              <li><Link href="/volunteer" className="hover:text-white transition">Volunteer</Link></li>
              <li><Link href="/news" className="hover:text-white transition">News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* --- COLUMN 3: SUPPORT --- */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
            <div className="bg-brand-red p-4 rounded text-center hover:bg-red-700 transition shadow-md cursor-pointer">
              <Link href="/volunteer#donate" className="text-white font-bold text-lg flex items-center gap-2 w-full md:w-auto">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
                Donate Now
                <FontAwesomeIcon icon={faPaperPlane} />
              </Link>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-gray-400">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h5 className="font-bold text-white">Address</h5>
                  <p className="text-xs text-gray-400">Muga Rescue Care HQ</p>
                  <p className="text-sm text-gray-300">Tigania West, Meru County</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h5 className="font-bold text-white">Email</h5>
                  <p className="text-xs text-gray-400">info@mugarescue.or.ke</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-gray-400">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h5 className="font-bold text-white">Phone</h5>
                  <p className="text-sm text-gray-300">+254 700 000 000</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/254..." target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-bold mt-4 text-center transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} />
              Chat on WhatsApp
            </a>
          </div>

          {/* --- COLUMN 4: NEWSLETTER --- */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest rescue stories.</p>
            
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full md:w-auto bg-gray-800 px-3 py-2 rounded text-gray-900 border border-gray-700 focus:outline-none focus:border-brand-red text-sm"
              />
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-bold transition">
                Go
              </button>
            </form>
          </div>

          {/* --- COLUMN 5: LEGAL --- */}
          <div className="space-y-6 lg:col-span-2 lg:col-span-4">
             {/* Note: lg:col-span-2 in container usually means spanning 2 columns if grid is 4. 
                  But here we have nested structure, so we treat top divs as children and try to make footer width match. */}
            <div className="bg-gray-800 p-6 rounded text-center">
              <p className="font-bold text-white mb-2">Transparency & Accountability</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Muga Rescue Care is a registered NGO. We operate with full financial transparency and accountability.
              </p>
            </div>
            
            <div className="text-right md:text-left">
              <p className="font-bold text-white mb-2">Contact & Support</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                For media inquiries or partnership opportunities, please contact us directly.
              </p>
            </div>
          </div>
        </div>
        
        {/* --- BOTTOM BAR: COPYRIGHT --- */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Muga Rescue Care. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}