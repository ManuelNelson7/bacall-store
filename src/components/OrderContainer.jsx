import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Order from '../pages/Order'

const OrderContainer = () => {
    const { id } = useParams()

    const [ticket, setTicket] = useState({})
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const ticketRef = doc(db, 'orders', id)

        getDoc(ticketRef)
            .then(res => {
                setTicket({ id: res.id, ...res.data() })
            })
            .finally((() => setLoading(false)))
    }, [id])

    return (
        <>
            {loading ? <Spinner />
                :
                (ticket ?
                    <>
                        <Order
                            ticket={ticket}
                            history={history}
                            id={id}
                        /> </> : <div>The order does not exist!</div>)}
        </>
    )
}

export default OrderContainer