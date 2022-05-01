import React, { useContext } from 'react'
import { CartContext } from '../CartContext'


const ItemCart = ({ item }) => {
    let { removeFromCart } = useContext(CartContext)

    return (
        <div className="md:flex items-center mt-6 py-8 border-t border-gold">
            <div className="md:w-1/4 w-1/2">
                <img src={item.img} alt='test' className="h-full w-full object-center object-cover rounded-md" />
            </div>
            <div className="md:pl-3 md:w-3/4 font-poppins">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                    <p className="py-2 px-2.5 bg-primary rounded-md mr-6 focus:outline-none">
                        {item.quantity}
                    </p>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">{( `Size: ${item.size}`)}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Category: {item.categoryId}</p>
                <div className="flex items-center justify-between pt-3 pr-6">
                    <div className="flex itemms-center">
                        <p onClick={() => removeFromCart(item)} className="text-xs leading-3 underline text-red-500 text-brown cursor-pointer">Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">${item.price * item.quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCart