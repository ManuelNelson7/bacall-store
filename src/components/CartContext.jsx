import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

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

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            buyAll,
            totalQuantity,
            subTotal,
            shipping,
            taxes,
            total
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider