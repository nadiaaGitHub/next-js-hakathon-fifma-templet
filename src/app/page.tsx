import BestOfMax from '@/components/BestOfMax'
import DoNotMiss from '@/components/DoNotMiss'
import Essentials from '@/components/Essentials'
import Features from '@/components/Features'
import FooterUpperSection from '@/components/FooterUpperSection'
import GearUp from '@/components/GearUp'
import Hero from '@/components/Hero'
import NavBottom from '@/components/NavBottom'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBottom/>
      <Hero/>
      <BestOfMax/>
      <Features/>
      <GearUp/>
      <DoNotMiss/>
      <Essentials/>
      <FooterUpperSection/>
    </div>
  )
}
