import React, { createContext, useState, useContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { auth } from '..';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log(user)
    }, [user])

    const signup = async (email, password, name) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
            })
    }

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });

        return () => unsuscribe();
    }, [])

    const addToCart = (product) => {
        const item = cart.find(item => item.id === product.id)
        const itemDifferentSize = cart.find(item => item.id === product.id && item.size !== product.size)
        if (item) {
            item.quantity += 1

            setCart([...cart])
        } else {
            setCart([...cart, { ...product }])
        }
        if (itemDifferentSize) {
            item.size = [...item.size, product.size]
            setCart([...cart])
        }
    }

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    const buyAll = () => {
        console.log('buyAll');
    }

    const totalQuantity = () => {
        return cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }

    let subTotal = () => {
        return cart.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }

    let shipping = () => {
        return subTotal() > 150 ? 0 : 20
    }

    const taxes = () => {
        return (subTotal() * 0.01)
    }

    let total = () => {
        return subTotal() > 0 ?
            subTotal() + shipping() + parseFloat(taxes()) :
            0
    }

    const cleanCart = () => {
        setCart([])
    }

    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`
    }

    return (
        <AppContext.Provider value={{
            user,
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            buyAll,
            totalQuantity,
            subTotal,
            shipping,
            taxes,
            total,
            cleanCart,
            signup,
            login,
            logout,
            formatPrice
        }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider