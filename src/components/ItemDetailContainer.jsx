import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import productList from '../utils/productList'
import ItemDetail from './Items/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState({})
    const [related, setRelated] = useState([])
    const [sizes, setSizes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(1, productList.find(product => product.id == id))
            .then(res => setItem(res))
            .catch(error => console.log(error))
    }, [id])

    //This is a solution to get the sizes and related items to load after the item has been loaded
    useEffect(() => {
        if (item && productList) {
            const related = (productList.filter(product => product.category === item.category && product.id !== item.id))
            setRelated(related);
            setSizes(item.sizes);
        }
    }, [item]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 100);
    }, [item]);

    return (
        <>
            {loading ? <Spinner />
                :
                (item ?
                    <>
                        <ItemDetail
                            name={item.name}
                            price={item.price}
                            img={item.img}
                            stock={item.stock}
                            category={item.category}
                            description={item.description}
                            sale={item.sale}
                            oldPrice={item.oldPrice}
                            sizes={sizes}
                            related={related}
                        /> </> : <div>Item does not exist!</div>)}
        </>
    )
}

export default ItemDetailContainer