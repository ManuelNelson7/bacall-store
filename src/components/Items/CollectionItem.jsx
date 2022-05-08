import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { AppContext } from "../AppContext";

const CollectionItem = ({ item }) => {

    let { formatPrice } = useContext(AppContext)

    return (
        <div key={item.id}>
            <Link to={`/item/${item.id}`} className='hover:opacity-75'>
                <div key={item.id} className="group relative">
                    <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                        <img
                            src={item.img}
                            alt={item.imageAlt}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                        <a href={item.href}>
                            <span className="absolute inset-0" />
                            {item.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{formatPrice(item.price)}</p>
                </div>
            </Link>

        </div>
    )
}

export default CollectionItem