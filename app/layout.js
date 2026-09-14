import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://cocoacountysector88agurgaon.com'),
  title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
  description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
  alternates: {
    canonical: 'https://cocoacountysector88agurgaon.com/',
  },
  openGraph: {
    title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
    description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
    url: 'https://cocoacountysector88agurgaon.com/',
    siteName: 'Cocoa County',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Cocoa County Sector 88A Gurgaon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
    description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Cocoa County Sector 88A",
              "url": "https://cocoacountysector88agurgaon.com/",
              "logo": "https://cocoacountysector88agurgaon.com/images/logo/Logo.webp",
              "image": "https://cocoacountysector88agurgaon.com/images/hero/banner.webp",
              "description": "Cocoa County, Gurgaon's premium residential development in Sector 88A offering 3/4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 88A, Dwarka Expressway",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "postalCode": "122505",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 4 Crore Onwards",
              "sameAs": [
                "https://cocoacountysector88agurgaon.com/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
