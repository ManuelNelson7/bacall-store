import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

const ItemCount = ({ stock, initial = 0, item, size }) => {
  const [counter, setcounter] = useState(initial)
  const [quantity, setQuantity] = useState(0) // quantity of items in the ItemCount
  const [showCart, setShowCart] = useState(false)

  const { addToCart } = useContext(AppContext)

  const onAdd = (number) => {
    number > 0 && setShowCart(true)
    setShowCart && addToCart({ ...item, quantity: number, size })
  }

  const increase = () => {
    counter < stock && setcounter(counter + 1)
  }

  const decrease = () => {
    counter > 0 && setcounter(counter - 1)
  }


  return (
    <>

      {!showCart ?

        <div className='flex flex-col mt-2 items-center gap-1 z-10'>

          <div className='flex bg-primary justify-between px-10 rounded-md w-full sm:justify-center sm:gap-12'>
            <button className='p-1 font-bold' onClick={decrease}>-</button>
            <p className='p-1'>{counter}</p>
            <button className='p-1 font-bold' onClick={increase}>+</button>
          </div>

          <button onClick={() => { onAdd(counter); setQuantity(counter) }} className='bg-gold text-white px-3 py-1.5 font-semibold rounded-md w-full text-md'>Add to cart</button>

        </div>

        :

        <Link to='/cart'
          className='outline outline-2 mt-6 w-full flex justify-center outline-gold text-gold font-semibold px-4 py-2.5 rounded-md transition-all duration-150 hover:bg-brown hover:text-white hover:outline-brown'
        >
          Go to the cart
        </Link>}
    </>



  )
}

export default ItemCount