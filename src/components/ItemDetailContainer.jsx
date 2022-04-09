import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import productList from '../utils/productList'
import ItemDetail from './Items/ItemDetail'
import Spinner from './Spinner'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        customFetch(3000, productList[1])
            .then(res => setItem(res))
            .catch(error => console.log(error))
    }, [item])


    return (
        <>
            <ItemDetail
                name={item.name}
                price={item.price}
                img={item.img}
                stock={item.stock}
                category={item.category}
                description={item.description}
                sizes={item.sizes}
            />
        </>
    )
}

export default ItemDetailContainer