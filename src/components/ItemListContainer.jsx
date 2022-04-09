import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch';
import productList from '../utils/productList'
import ItemList from './Items/ItemList'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(1000, productList)
            .then(res => setItems(res))
            .catch(error => console.log(error));
    }, [items])


    return (
        <div className='pt-24 flex justify-center min-h-screen bg-white'>
            <div className="w-container max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-2">

                <ItemList products={items} />

            </div>
        </div>
    )
}

export default ItemListContainer