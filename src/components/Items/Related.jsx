import React from 'react'
import ItemCount from '../Items/ItemCount'
import { Link } from 'react-router-dom'


const Related = ({ id, name, category, price, img, stock }) => {
    return (
        <div key={id} className="group relative">
            <Link to={`/item/${id}`} className='hover:opacity-75'>
                <div className="w-full h-60 bg-gray-200 rounded-md overflow-hidden">

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
                    <p className="text-sm font-medium text-gray-900">${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Related