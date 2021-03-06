import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, name, category, price, img, stock, oldPrice, sale }) => {

    return (
        <div key={id}>
            <Link to={`/item/${id}`} className='hover:opacity-75'>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">

                    <img
                        src={img}
                        alt={name}
                        className={category !== 'Pants' ? `w-full h-full object-top object-cover lg:w-full lg:h-full` : `w-full h-full object-bottom object-cover lg:w-full lg:h-full`}
                    />

                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm md:text-md text-dark">
                            <p className="capitalize font-medium font-poppins">
                                {name}
                            </p>
                        </h3>
                    </div>
                    <p className={sale ? `text-sm text-brown font-semibold` : `text-sm font-semibold text-gray-900`}>
                        {sale && <span className='mr-3 text-dark opacity-50 font-medium line-through'>${oldPrice}</span>}
                        ${price}
                    </p>
                </div>
            </Link>

        </div>
    )
}

export default Item