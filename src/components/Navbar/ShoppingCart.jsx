import React, { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const ShoppingCart = () => {
    let { totalQuantity } = useContext(CartContext)

    return (
        <div className="ml-4 flow-root lg:ml-6">
            <Link to="/cart" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                {totalQuantity() > 0 && <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{totalQuantity()}</span>}
                <span className="sr-only">items in cart, view bag</span>
            </Link>
        </div>
    )
}

export default ShoppingCart