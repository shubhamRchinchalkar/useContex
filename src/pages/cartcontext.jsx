import React, { createContext, useState, useEffect } from 'react'
import data from './data.json'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setCartItems(data.products.map((product) => ({ ...product, quantity: 0 })))
    }, [])

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItems(updatedCart)
        } else {
            const newItem = { ...item, quantity: 1 }
            setCartItems([...cartItems, newItem])
        }
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId)
        setCartItems(updatedCart)
    }

    const increaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)
        setCartItems(updatedCart)
    }

    const decreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)
        setCartItems(updatedCart)
    }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

    return (
        <CartContext.Provider value={{ cartItems, increaseQuantity, decreaseQuantity, totalAmount, totalQuantity }}>{children}</CartContext.Provider>
    )
}