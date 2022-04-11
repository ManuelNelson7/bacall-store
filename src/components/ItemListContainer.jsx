import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch';
import productList from '../utils/productList'
import ItemList from './Items/ItemList'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(10, productList)
            .then(res => setItems(res))
            .catch(error => console.log(error));
    }, [])


    return (
        <ItemList products={items} />

    )
}

export default ItemListContainer