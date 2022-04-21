import React, { useState } from 'react'

const ItemCount = ({ stock, initial = 0, handleCount, onAdd, addToCart, item }) => {

  const [counter , setcounter] = useState(initial)

  const increase = () => {
    counter < stock && setcounter(counter + 1)
  }

  const decrease = () => {
    counter > 0 && setcounter(counter - 1)
  }


  return (
    <div className={!handleCount && `hidden`}>

      <div className='flex flex-col mt-2 items-center gap-1 z-10'>

        <div className='flex bg-primary justify-between px-10 rounded-md w-full sm:justify-center sm:gap-12'>
          <button className='p-1 font-bold' onClick={decrease}>-</button>
          <p className='p-1'>{counter}</p>
          <button className='p-1 font-bold' onClick={increase}>+</button>
        </div>

        <button onClick={() => addToCart({...item, counter})} className='bg-gold text-white px-3 py-1.5 font-semibold rounded-md w-full text-md'>Add to cart</button>

      </div>
    </div>
  )
}

export default ItemCount