import React from 'react'
import { useSelector } from 'react-redux'
import { formPrice } from '../utils';

const CartTotals = () => {
    const {cartTotal,shipping,tax,orderTotal}=useSelector((state)=>state.cartState);
  return (
    <div className='card bg-base-200'>
  <div className='card-body'> 
      <p className='flex justify-betweeen text-xs border-b border-base-300 pb-2'>
        <span>Subtotal</span>
        <span className='font-medium'>{formPrice(cartTotal)}</span>
      </p>
      <p className='flex justify-betweeen text-xs border-b border-base-300 pb-2'>
        <span>Shippping</span>
        <span className='font-medium'>{formPrice(shipping)}</span>
      </p>
      <p className='flex justify-betweeen text-xs border-b border-base-300 pb-2'>
        <span>Tax</span>
        <span className='font-medium'>{formPrice(tax)}</span>
      </p>
      <p className='flex justify-betweeen text-xs mt-4 pb-2'>
        <span>OrderTotal</span>
        <span className='font-medium'>{formPrice(orderTotal)}</span>
      </p>
  </div>
    </div>
  )
}

export default CartTotals