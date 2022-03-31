import React, { useState } from 'react'

const Contador = () => {

    const [quantity, setQuantity] = useState(0);
    const stock = 5;

    return (
        <div className='mt-20 ml-10 flex flex-col w-40 items-center gap-2'>
            <div className='flex justify-between w-20 rounded-md px-2 py-1 bg-primary'>
                <span className='cursor-pointer' onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</span>
                <p>{quantity}</p>
                <span className='cursor-pointer' onClick={() => quantity < stock && setQuantity(quantity + 1)}>+</span>
            </div>

            <button className='bg-gold py-2 px-3 rounded-md text-white'
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default Contador