import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import HomeContainer from '../components/Home/HomeContainer'
import Promo from '../components/Home/Promo'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Hero />
      <HomeContainer />
      <Promo />
    </>
  )
}

export default Home