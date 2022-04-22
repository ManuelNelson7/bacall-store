import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const indexProduct = cart.findIndex((cartItem) => cartItem.id === product.id);
        if (indexProduct !== -1) {
            const newCart = [...cart];
            newCart[indexProduct].quantity = newCart[indexProduct].quantity + product.quantity;
            setCart(newCart);
        }
        setCart([...cart, product])
        console.log(cart)
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