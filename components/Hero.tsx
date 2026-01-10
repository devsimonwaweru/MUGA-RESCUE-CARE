import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center text-white pt-20">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
      
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>
        
        {/* 2. Dark Overlay (for text readability) */}
        <div className="absolute inset-0 bg-brand-blue/80"></div>
      </div>

      {/* 3. Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Muga Rescue Care <br/>
          <span className="text-brand-accent">Supporting Lives in Tigania West</span>
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
          Helping residents of Tigania West, Meru County, in urgent need. Together, we can make a difference.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/services" className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
            Get Help
          </Link>
          <Link href="/volunteer#donate" className="border-2 border-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-blue transition shadow-lg transform hover:-translate-y-1">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  )
}