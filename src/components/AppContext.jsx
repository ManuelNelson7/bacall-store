import React, { createContext, useState, useContext } from 'react'

export const AppContext = createContext();

export const useApp = () => {
    const context = useContext(AppContext)
    return context
}

const AppContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const user = {
        login: true
    }


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
            cleanCart
        }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider