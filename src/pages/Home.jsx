import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default Home