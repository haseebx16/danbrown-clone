import React from 'react'
import Hero from '../Components/Sections/Hero'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import Cards from './Cards'
import World from './World'
import PricingPlans from './PricingPlans'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroPage/>
        <Cards/>
        <World/>
        <PricingPlans/>
    </>
  )
}

export default page