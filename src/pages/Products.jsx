import React from 'react'
import { customFetch } from '../utils'
import ProductList from '../components/ProductList';



export const loader=async ({request})=>{
  const response= await customFetch('/products');
  const products=response.data.data;
  const meta=response.data.meta;
  

  return {products,meta};
}
const Products = () => {
  return (
    <div><ProductList/></div>
  )
}

export default Products;