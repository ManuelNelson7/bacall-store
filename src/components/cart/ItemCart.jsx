import React from 'react'

const ItemCart = ({product}) => {
    return (
        <div className="md:flex items-center mt-6 py-8 border-t border-gold">
            <div className="w-1/4">
                <img src={product.img} alt='test' className="h-full w-full object-center object-cover rounded-md" />
            </div>
            <div className="md:pl-3 md:w-3/4 font-poppins">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{product.name}</p>
                    <select className="py-2 px-2.5 bg-primary rounded-md mr-6 focus:outline-none">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Size: M</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-red-500 text-brown cursor-pointer">Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCart