import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItemsList = () => {

    const cartItems=useSelector((state)=>state.cartState.cartItem)
  return (
    <div>
        {cartItems.map((item)=>{
            return <CartItem cartItem={item}/>
        })}
    </div>
  )
}

export default CartItemsList