'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/footer/footer.webp')", backgroundColor: '#412011', color: '#fff' }}>
    {/* Removed blue overlay as requested */}

    <div className="relative z-10">
      <div className="max-w-[860px] mx-auto px-2 sm:px-6 pt-14 pb-8 text-center">
        <h2 
          className="text-[21px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wide mb-2 text-white whitespace-nowrap sm:whitespace-normal" 
          style={{ fontFamily: F_JOST }} 
          data-aos="fade-in"
        >
          About The Developer
        </h2>
        <p style={{ fontSize: '13px', color: '#ffffff', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Landmark Integrated Development — Sector 88A, Dwarka Expressway, Gurgaon
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ width: '36px', height: '2.5px', background: '#B88A44', borderRadius: '2px' }} />
        </div>
        <div style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-poppins), sans-serif', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
          data-aos="fade-in" data-aos-delay="100">
          <p className="mb-2">
            County Group is a real estate developer in the National Capital Region, with a portfolio of legacy and ongoing residential and commercial projects across Noida, Ghaziabad, Delhi and now Gurgaon.
          </p>
          <p className="mb-2">
            The group&apos;s legacy developments include Orange County, Olive County, Cherry County, the IGBC Gold-certified Cleo County, Coco County and County 107 — together accounting for over 159 lakh sq. ft. of developed area.
          </p>
          <p className="mb-2">
            Its ongoing portfolio includes Ivy County, County Courtyard, Ivory County and Cocoa County, the group&apos;s ultra-luxury development in Sector 88A, Gurgaon, spread across approximately 24 acres with 844 residences across 9 towers.
          </p>
          <p>
            Guided by the philosophy &ldquo;It&apos;s All About U,&rdquo; County Group&apos;s projects are built around landscaped courtyards, clubhouse-led amenities, and a focus on quality, timely delivery and transparency.
          </p>
        </div>
        
        {/* RERA Block */}
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>RERA No :</span>
          <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em' }}>Comming Soon</strong>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
        <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
          &copy; 2026 Cocoa County. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          
          <span style={{ color: '#444' }}>|</span>
          <Link href="/privacy-policy" style={{ fontSize: '13px', color: '#B88A44', fontFamily: F_SANS }}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
          <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
