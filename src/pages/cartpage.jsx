import React, { useContext } from 'react'
import { CartContext } from './cartcontext'
import './cartpage.css'

const CartPage = () => {
    const { cartItems , increaseQuantity, decreaseQuantity, totalQuantity, totalAmount } = useContext(CartContext)

    return(
        <div className='container'>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <div className='sub-container'>
                            <img src={item.thumbnail} alt={item.title} className='item-image' />
                            <div className='item-container'>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => increaseQuantity(item.id)} className='button-increment'>+</button>
                                <button onClick={() => decreaseQuantity(item.id)} className='button-decrement'>-</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='divider'></div>
            <p>Total Quantity : {totalQuantity}</p>
            <p>Total Amount : {totalAmount}</p>
        </div>
    )
}

export default CartPage