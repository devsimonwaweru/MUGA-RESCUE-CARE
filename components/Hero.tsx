import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center text-white pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-brand-blue/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Headline Updated to Worldwide */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Muga Rescue Care <br/>
          <span className="text-brand-accent">Supporting Lives Worldwide</span>
        </h1>
        
        {/* Subheadline Updated to Global */}
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
    </section>
  )
}