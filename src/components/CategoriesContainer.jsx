import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import productList from '../utils/productList'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import ItemList from './Items/ItemList'

const CategoriesContainer = () => {
    const { id } = useParams()

    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(1, productList.filter(product => product.id == id))
            .then(res => setCategory(res))
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        setTimeout(() => setLoading(false), 100);
    }, [category]);

    return (
        <>
            {loading ? <Spinner />
                :
                (category ? <ItemList products={category}
                /> : <div>Item does not exist!</div>)}
        </>
    )
}

export default CategoriesContainer