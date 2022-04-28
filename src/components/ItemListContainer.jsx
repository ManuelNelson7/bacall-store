import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './Items/ItemList'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import Spinner from './Spinner';

const ItemListContainer = ({ priceFilter }) => {

    const { id } = useParams()

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let itemsRef;

        if (!id) {
            itemsRef = collection(db, 'products')
        } else {
            itemsRef = query(collection(db, 'products'), where('categoryId', '==', id));
        }

        getDocs(itemsRef)
            .then(res => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))

    }, [id])


    return (
        <>  {loading ? <Spinner /> :
            <ItemList products={items} />}
        </>

    )
}

export default ItemListContainer