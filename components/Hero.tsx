import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white pt-20 overflow-hidden">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-brand-blue/80"></div>
      </div>

      {/* 2. Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Muga Rescue Care <br/>
          <span className="text-brand-accent">Supporting Lives Worldwide</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
          Providing urgent humanitarian aid, medical support, and relief to communities in crisis around the globe. Together, we save lives.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/services" className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
            Get Help
          </Link>
          
          <Link href="/volunteer#donate" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-lg transform hover:-translate-y-1">
            Donate Now
          </Link>
        </div>
      </div>

      {/* 3. Floating CTA Badge */}
      <Link 
        href="/news" 
        // Note: Using 'animate-float' from Tailwind Config now
        className="absolute bottom-10 right-10 md:right-20 z-40 flex items-center gap-4 bg-white text-[#1d3557] px-5 py-3 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all transform hover:scale-105 animate-float group cursor-pointer"
      >
        {/* Pulsing Red Dot */}
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63946] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e63946]"></span>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-bold text-[#e63946] tracking-wider group-hover:text-red-700 transition-colors">LATEST UPDATE</span>
          <span className="font-bold text-sm md:text-base leading-none">Read Rescue Stories</span>
        </div>

        {/* News Icon */}
        <div className="bg-[#1d3557] text-white p-2 rounded-full">
          <FontAwesomeIcon icon={faNewspaper} size="sm" />
        </div>
      </Link>

    </section>
  )
}