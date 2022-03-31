import React from 'react'

const ItemCount = ({ useCounter }) => {

  const { counter, total, quantity, increase, decrease } = useCounter;

  return (
    <div className='flex flex-col w-28 items-center gap-1'>

      <div className='flex bg-primary justify-between px-5 rounded-md w-full'>
        <button className='p-1' onClick={decrease}>-</button>
        <p className='p-1'>{counter}</p>
        <button className='p-1' onClick={increase}>+</button>
      </div>

      <button className='bg-gold text-white px-3 py-1 rounded-md w-full'>Add to cart</button>

    </div>
  )
}

export default ItemCount