import React, { useEffect, useState } from "react"
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import Spinner from '../Spinner';
import PreviewCategories from "./PreviewCategories";
import PreviewCollections from "./PreviewCollections";

const HomeContainer = () => {
    const [categories, setCategories] = useState([])
    const [collections, setCollections] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const categoriesRef = collection(db, 'categories')

        getDocs(categoriesRef)
            .then(res => {
                setCategories(res.docs.map(category => ({ id: category.id, ...category.data() })))
            })
    }, [])

    useEffect(() => {
        const db = getFirestore()
        const collectionsRef = collection(db, 'collections')

        getDocs(collectionsRef)
            .then(res => {
                setCollections(res.docs.map(collection => ({ id: collection.id, ...collection.data() })))
            })
    }, [])

    useEffect(() => {
        categories.length > 0 && collections.length > 0 && setLoading(false)
    }, [categories, collections])


    return (
        <>
            {loading ?
                <div className="h-90">
                    <Spinner />
                </div>

                :
                <>
                    <PreviewCategories categories={categories} />
                    <PreviewCollections collections={collections} />
                </>}
        </>
    )
}

export default HomeContainer