import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import SectionTitle from "../components/SectionTitle";
import { OrdersList, PaginationContainer } from "../components";

export const loader=(store)=>async({request})=>{
    const user=store.getState().userState.user;
    // const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    console.log(user)
    if (!user){
        toast.warn("You must be logged in to view orders");
        return redirect("/login")
    }
    try{

        const response= await customFetch.get("/orders",{headers:{
                            Authorization:`Bearer ${user.token}`
                         }});
                     
        // toast.success("Order Placed Successfully");
                     
             return {orders:response.data.data,meta:response.data.meta};
    }
    catch(error){
        const errorMessage=error?.response?.data?.error?.message || "There was an error in acessing your order";
         
        toast.error(errorMessage);
        if (error?.response?.status===401 || 403) return redirect("/login")
        
            
            return null;
    }
    
   
}
export default function Order(){
const {meta}=useLoaderData();
if (meta.pagination.total <1){
    return <SectionTitle text="please make an order"/>
}
    return <div>
        <SectionTitle text="Your Orders"/>
        <OrdersList/>
        <PaginationContainer/>
    </div>
}