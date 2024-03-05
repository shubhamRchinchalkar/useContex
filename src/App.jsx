import React from 'react'
import './App.css'
import { CartProvider } from './pages/cartcontext'
import CartPage from './pages/cartpage'

function App() {

  return (
    <CartProvider>
      <div className='App'>
        <CartPage />
      </div>
    </CartProvider>
  )
}

export default App
