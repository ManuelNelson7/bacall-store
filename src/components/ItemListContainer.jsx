import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import productList from '../utils/productList'
import ItemList from './Items/ItemList'

const ItemListContainer = ({priceFilter}) => {

    const { id } = useParams()

    const [items, setItems] = useState([]);


    useEffect(() => {
        if (!id) {
            customFetch(10, productList)
                .then(res => setItems(res))
                .catch(error => console.log(error));
        } else {
            customFetch(1, productList.filter(product => product.category == id))
                .then(res => setItems(res))
                .catch(error => console.log(error))
        }
    }, [id])


    return (
        <>
            <ItemList products={items} />
        </>

    )
}

export default ItemListContainer