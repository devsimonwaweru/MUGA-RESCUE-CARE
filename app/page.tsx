import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <section className="py-24 bg-[#1d3557] text-white border-t-8 border-brand-red">
        <div className="container mx-auto px-6 text-center">
          {/* Updated Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Global Humanitarian Support
          </h2>
          
          {/* Updated Text */}
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-200 leading-relaxed">
            Founded by Hon Fred Muga, we are dedicated to providing immediate assistance to individuals and families facing emergencies globally. We operate with compassion, transparency, and empowerment, ensuring that no one is left behind when disaster strikes.
          </p>
          
          <Link href="/about" className="inline-block bg-[#e63946] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
            Read Our Full Story
          </Link>
        </div>
      </section>
    </>
  )
}