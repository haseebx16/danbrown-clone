import React from 'react'
import Hero from '../Components/Sections/Hero'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import Cards from './Cards'
import World from './World'
import PricingPlans from './PricingPlans'
import Features from './Features'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroPage/>
        <Cards/>
        <World/>
        <PricingPlans/>
        <Features/>
    </>
  )
}

export default page