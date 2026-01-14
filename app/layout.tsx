'use client' // <--- 1. Add this at the very top

import './globals.css'
import { Inter, Merriweather } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation' // <--- 2. Import this to detect current page

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather' 
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname() // <--- 3. Get current URL
  const isStudio = pathname?.startsWith('/studio') // <--- 4. Check if we are in Studio

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        {/* 5. Manual SEO Tags (Converted from 'metadata' export to work with 'use client') */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muga Rescue Care – Global Humanitarian Support</title>
        <meta name="description" content="Muga Rescue Care provides urgent humanitarian aid, medical relief, and emergency support to communities in crisis worldwide. Donate or volunteer today." />
        <meta property="og:title" content="Muga Rescue Care – Global Humanitarian Support" />
        <meta property="og:description" content="Helping people in urgent need around the globe." />
        <meta property="og:url" content="https://mugarescuecare.org" />
        <meta property="og:site_name" content="Muga Rescue Care" />
        <meta property="og:type" content="website" />
        
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
                "addressLocality": "Nairobi",
                "addressRegion": "Kenya",
                "addressCountry": "Kenya"
              },
              "areaServed": "Worldwide",
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
        
        {/* 6. Only show Navbar if NOT in Studio */}
        {!isStudio && <Navbar />}
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* 7. Only show Footer if NOT in Studio */}
        {!isStudio && <Footer />}
        
      </body>
    </html>
  )
}