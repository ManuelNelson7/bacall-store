import React, { useEffect, useState } from 'react'
import ItemDetail from './Items/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState({})
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'products', id)

        getDoc(itemRef)
            .then(res => {
                setItem({ id: res.id, ...res.data() })
            })
            
        window.scrollTo(0, 0);
    }, [id])

    useEffect(() => {
        const db = getFirestore();
        let itemsRef;

        if (item.categoryId !== undefined) {
            itemsRef = query(collection(db, 'products'), where('categoryId', '==', item.categoryId));
            getDocs(itemsRef)
                .then(res => {
                    setRelated(res.docs.slice(0, 4).map((related) => ({ id: related.id, ...related.data() })
                    ))
                })
                .finally(() => setLoading(false))
        }

    }, [item])

    return (
        <>
            {loading ? <Spinner />
                :
                (item ?
                    <>
                        <ItemDetail
                            item={item}
                            related={related}
                            id={id}
                        /> </> : <div>Item does not exist!</div>)}
        </>
    )
}

export default ItemDetailContainer