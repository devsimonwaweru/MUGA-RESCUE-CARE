import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHandHoldingHeart, 
  faUsers,
  faEarthAfrica
} from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'About Us – Global Humanitarian Aid | Muga Rescue Care',
  description: 'Learn about Muga Rescue Care, a global humanitarian initiative founded by Hon Fred Muga. We provide emergency relief, medical aid, and community empowerment to those in need.',
  keywords: [
    'Muga Rescue Care',
    'Hon Fred Muga',
    'Global Humanitarian Aid',
    'Emergency Relief NGO',
    'Community Empowerment',
    'Disaster Response',
    'Humanitarian Organization'
  ],
  openGraph: {
    title: 'About Muga Rescue Care - Global Humanitarian Support',
    description: 'Founded by Hon Fred Muga, we are dedicated to saving lives and restoring hope worldwide.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header - Deep Blue */}
      <section className="bg-[#1d3557] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Muga Rescue Care</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">Driven by Compassion, Powered by Action. Global Humanitarian Support.</p>
      </section>

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image 
              src="/about-mission.jpg" 
              alt="Humanitarian workers providing emergency relief aid to community" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-[#e63946] mb-6">Our Mission</h2>
            <p className="text-brand-blue mb-4 leading-relaxed font-medium">
              Muga Rescue Care is a humanitarian initiative founded by <strong>Hon. Fredrick Mugambi (Muga)</strong>, committed to saving lives and restoring hope for people facing urgent and critical situations.
            </p>
            <p className="text-brand-blue mb-4 leading-relaxed font-medium">
              Our mission is to provide immediate, compassionate, and reliable assistance to individuals and families affected by emergencies—locally and globally. While our roots are in Tigania West, Meru County, our reach extends beyond borders to ensure that no one in need is left behind.
            </p>
            <p className="text-brand-blue leading-relaxed font-medium">
              We operate with integrity, transparency, and community empowerment, working tirelessly to support most vulnerable and respond swiftly when help is needed most.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 py-16 border-l-8 border-[#e63946]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 text-center">Our Vision</h2>
          <p className="text-xl md:text-2xl text-center text-[#1d3557] max-w-3xl mx-auto font-medium italic">
            &quot;To create a world where every person has access to timely support, dignity, and hope, regardless of their location, circumstances, or background.&quot;
          </p>
        </div>
      </section>

      {/* Core Values Grid - 3 Columns */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-12 text-center">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-lg transition">
            <div className="text-4xl text-[#e63946] mb-4"><FontAwesomeIcon icon={faHandHoldingHeart} /></div>
            <h3 className="text-xl font-bold mb-2">Compassion and Empathy</h3>
            <p className="text-brand-blue">We respond to every situation with empathy, respect, and genuine care for human life.</p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-lg transition">
            <div className="text-4xl text-[#e63946] mb-4"><FontAwesomeIcon icon={faUsers} /></div>
            <h3 className="text-xl font-bold mb-2">Community Empowerment</h3>
            <p className="text-brand-blue">We believe lasting impact comes from working with communities and strengthening local capacity.</p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-lg transition">
            <div className="text-4xl text-[#e63946] mb-4"><FontAwesomeIcon icon={faEarthAfrica} /></div>
            <h3 className="text-xl font-bold mb-2">Inclusivity and Collaboration</h3>
            <p className="text-brand-blue">We serve all people without discrimination, ensuring fairness and equal access to support. We partner with individuals, organizations, and institutions to maximize impact and reach.</p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="bg-[#1d3557] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image 
                  src="/about-founder.jpg" 
                  alt="Hon Fred Muga - Founder of Muga Rescue Care" 
                  fill 
                  className="object-cover rounded-full border-4 border-[#e63946] shadow-2xl"
                />
              </div>
              <p className="text-center mt-4 text-xl font-bold">Hon. Fredrick Mugambi (Muga)</p>
              <p className="text-center text-sm opacity-80">Founder</p>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-[#e63946] mb-6">Founder’s Message</h2>
              <p className="mb-4 opacity-90 leading-relaxed">
                Muga Rescue Care was born from a deep commitment to serve humanity and respond to the urgent needs I witnessed within our communities. Too often, people suffer not because solutions do not exist, but because help does not arrive in time.
              </p>
              <p className="mb-4 opacity-90 leading-relaxed">
                This initiative is founded on the belief that every life matters and that compassion must be matched with action. While Tigania West remains close to my heart, Muga Rescue Care is driven by a global vision—to reach those in distress wherever they may be.
              </p>
              <p className="opacity-90 leading-relaxed">
                I invite partners, volunteers, and supporters to join us in this mission. Together, we can save lives, restore dignity, and build a future where help is never out of reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <Link href="/volunteer" className="inline-block bg-[#e63946] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
          Join Our Mission
        </Link>
      </section>
    </div>
  )
}