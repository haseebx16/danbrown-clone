import React from 'react'
import Hero from '../Components/Sections/Hero'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import Cards from './Cards'

const page = () => {
  return (
    <>
        <Navbar/>
        <HeroPage/>
        <Cards/>
    </>
  )
}

export default page