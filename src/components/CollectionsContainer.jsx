import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import Spinner from './Spinner';
import CollectionList from './Items/CollectionList';

const CollectionsContainer = () => {

    const { id } = useParams()

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsRef = query(collection(db, 'products'), where('collection', "array-contains", id))

        getDocs(itemsRef)
            .then(res => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))

    }, [])


    return (
        <>  {loading ? <Spinner /> :
            <CollectionList items={items} />}
        </>

    )
}

export default CollectionsContainer