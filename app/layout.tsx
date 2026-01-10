import './globals.css'
import { Inter, Merriweather } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather' 
})

export const metadata = {
  metadataBase: new URL('https://mugarescuecare.org'),
  title: {
    default: 'Muga Rescue Care – Tigania West',
    template: '%s | Muga Rescue Care'
  },
  description: 'Muga Rescue Care provides urgent help, medical aid, food, and shelter support to residents of Tigania West, Meru County.',
  openGraph: {
    title: 'Muga Rescue Care – Tigania West',
    description: 'Helping people in urgent need across Tigania West, Meru County.',
    url: 'https://mugarescuecare.org',
    siteName: 'Muga Rescue Care',
    locale: 'en_KE',
    type: 'website',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* JSON-LD Schema for Local SEO (Helps Google find you in Tigania West) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Muga Rescue Care",
              "url": "https://mugarescuecare.org",
              "logo": "https://mugarescuecare.org/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tigania West",
                "addressRegion": "Meru County",
                "addressCountry": "Kenya"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254700000000",
                "contactType": "customer support"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-brand-blue`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}