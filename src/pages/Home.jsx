import React from 'react'
import Hero from '../components/Home/Hero'
import HomeContainer from '../components/Home/HomeContainer'
import PreviewCategories from '../components/Home/PreviewCategories'
import Promo from '../components/Home/Promo'
import Categories from './Categories'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeContainer />
      <Promo />
    </>
  )
}

export default Home