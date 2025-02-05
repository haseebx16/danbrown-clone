import React from 'react'
import Hero from '../Components/Sections/Hero'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import Cards from './Cards'
import World from './World'
import PricingPlans from './PricingPlans'
import Features from './Features'
import Testimonials from '../Components/Sections/Testimonials'
import Footerr from './Footer'
import Work from './Work'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroPage/>
        <Cards/>
        <World/>
        <PricingPlans/>
        <Work/>
        <Features/>
        <Testimonials/>
        <Footerr/>
    </>
  )
}

export default page