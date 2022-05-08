import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './Items/ItemList'
import { getFirestore, getDocs, collection, query, where, orderBy, limit } from 'firebase/firestore'
import Spinner from './Spinner';

const ItemListContainer = ({ saleFilter, priceFilter }) => {

    const { id } = useParams()

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let itemsRef;

        if (!id) {

            !saleFilter && priceFilter === 'default' && (itemsRef = collection(db, 'products'));
            !saleFilter && priceFilter === 'low' && (itemsRef = query(collection(db, 'products'), orderBy('price', 'asc')));
            !saleFilter && priceFilter === 'high' && (itemsRef = query(collection(db, 'products'), orderBy('price', 'desc')));

            saleFilter && (itemsRef = query(collection(db, 'products'), where('sale', '==', true)))


        } else {
            !saleFilter && priceFilter === 'default' && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id)));
            !saleFilter && priceFilter === 'low' && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id), orderBy('price', 'asc')));
            !saleFilter && priceFilter === 'high' && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id), orderBy('price', 'desc')));
            saleFilter && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id), where('sale', '==', true)))

        }

        getDocs(itemsRef)
            .then(res => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))

    }, [id, saleFilter, priceFilter])


    return (
        <>  {loading ? <Spinner /> :
            <ItemList items={items} />}
        </>

    )
}

export default ItemListContainer