import React, { useState } from 'react'

const ItemCount = ({ stock, initial = 0 }) => {

  const [counter, setcounter] = useState(initial)

  const increase = () => {
    counter < stock && setcounter(counter + 1)
  }

  const decrease = () => {
    counter > 0 && setcounter(counter - 1)
  }

  const onAdd = () => {
    alert(`You have added ${counter} items in your cart`)
  }

  return (
    <div className='flex flex-col w-28 items-center gap-1'>

      <div className='flex bg-primary justify-between px-5 rounded-md w-full'>
        <button className='p-1' onClick={decrease}>-</button>
        <p className='p-1'>{counter}</p>
        <button className='p-1' onClick={increase}>+</button>
      </div>

      <button onClick={() => onAdd()} className='bg-gold text-white px-3 py-1 rounded-md w-full'>Add to cart</button>

    </div>
  )
}

export default ItemCount