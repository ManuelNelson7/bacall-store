import { useContext, useEffect, useState } from "react";
import Profile from "../pages/Profile";
import { AppContext } from "./AppContext"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'
import Spinner from './Spinner';
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
    let { user, logout } = useContext(AppContext)
    const navigate = useNavigate()

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    const loginOut = () => {
        logout()
        navigate('/')
    }

    useEffect(() => {
        const db = getFirestore()
        const ordersRef = query(
            collection(db, 'orders'),
            where('buyer.email', '==', user.email)
        )
        getDocs(ordersRef)
            .then(res => {
                setOrders(res.docs.map((order) => ({ id: order.id, ...order.data() })))
            })
            .finally(() => setLoading(false))
    }, [user])

    return (
        <>
            {loading ?
                <Spinner />
                :
                <Profile
                    orders={orders}
                    user={user}
                    loginOut={loginOut}
                />
            }
        </>
    )
}

export default ProfileContainer