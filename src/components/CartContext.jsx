import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const item = cart.find(item => item.id === product.id)
        if (item) {
            item.quantity += 1
            setCart([...cart])
        } else {
            setCart([...cart, { ...product}])
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

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            buyAll
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider