import BestOfMax from '@/components/BestOfMax'
import DoNotMiss from '@/components/DoNotMiss'
import Essentials from '@/components/Essentials'
import Features from '@/components/Features'
import FooterUpperSection from '@/components/FooterUpperSection'
import GearUp from '@/components/GearUp'
import Hero from '@/components/Hero'
import NavBottom from '@/components/NavBottom'
import { CartProvider } from '@/context/CartContext'

import React from 'react'

// Use a more appropriate type for the function component
const Page: React.FC = () => {
  return (
    <div>
      <CartProvider>
        <NavBottom />
        <Hero />
        <BestOfMax />
        <Features />
        <GearUp />
        <DoNotMiss />
        <Essentials />
        <FooterUpperSection />
      </CartProvider>
    </div>
  )
}

export default Page;
