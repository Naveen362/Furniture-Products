import React from 'react'
import { customFetch, formPrice } from '../utils';
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =(store)=>async({request})=>{
    const formData=await request.formData();
    const {name,address}=Object.fromEntries(formData);
    const userr=store.getState().userState.user;
    const {cartItem,orderTotal,numberItemsInCart}=store.getState().cartState;

    const info={
        name,address,
        chargeTotal:orderTotal,orderTotal:formPrice(orderTotal),
        cartItems:cartItem,
        numItemsInCart:numberItemsInCart
    };

    try {
            const response= await customFetch.post("/orders",{data:info},{headers:{
                    Authorization:`Bearer ${userr.token}`
                 }});
             store.dispatch((clearCart));
             toast.success("Order Placed Successfully");
             return redirect("/orders");


    }
    catch (error){
        const errorMessage=error?.response?.data?.error?.message || "There was an error placing your order";
         
        toast.error(errorMessage);
        if (error?.response?.status===401 || 403) return redirect("/login")
        
            
            return null;

    }
}
const CheckoutForm = () => {
  return (
    <div>
        <Form method="POST"  className='flex flex-col gap-y-4'>
            <h4 className='font-medium text-xl'> Shipping Information</h4>
            <FormInput type="text" label="First Name" name="name"/>
            <FormInput type='text' label="address" name="address"/>
            <div className='mt-4'>
                <SubmitBtn text="place your order"/>
            </div>
        </Form>
    </div>
  )
}

export default CheckoutForm