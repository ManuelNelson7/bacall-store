import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './Items/ItemList'
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import Spinner from './Spinner';

const ItemListContainer = ({ saleFilter }) => {

    const { id } = useParams()

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let itemsRef;

        if (!id) {

            !saleFilter && (itemsRef = collection(db, 'products'));
            saleFilter && (itemsRef = query(collection(db, 'products'), where('sale', '==', true)))

        } else {
            !saleFilter && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id)));
            saleFilter && (itemsRef = query(collection(db, 'products'), where('categoryId', '==', id), where('sale', '==', true)))
        }

        getDocs(itemsRef)
            .then(res => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))

    }, [id, saleFilter])


    return (
        <>  {loading ? <Spinner /> :
            <ItemList items={items} />}
        </>

    )
}

export default ItemListContainer