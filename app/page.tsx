import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* 
         CHANGES:
         1. bg-[#1d3557] -> Enforced Solid Trust Blue Background (No white).
         2. text-white -> Changed text to White so it's readable on the blue background.
         3. border-brand-red -> Kept the red border to connect it to the stats bar.
         4. Button bg-[#e63946] -> Kept the button Red to maintain the Red/Blue branding theme.
      */}
      <section className="py-24 bg-[#1d3557] text-white border-t-8 border-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Supporting Lives in Tigania West
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-200 leading-relaxed">
            Founded by Hon Fred Muga, we are dedicated to ensuring that no resident of Tigania West is left behind during emergencies. We operate with compassion, transparency, and community empowerment.
          </p>
          
          <Link href="/about" className="inline-block bg-[#e63946] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
            Read Our Full Story
          </Link>
        </div>
      </section>
    </>
  )
}