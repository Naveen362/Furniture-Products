import React from 'react'
import { customFetch } from '../utils'

import {ProductsContainer, Filter } from '../components';



export const loader=async ({request})=>{
  const response= await customFetch('/products');
  const products=response.data.data;
  const meta=response.data.meta;
  

  return {products,meta};
}
const Products = () => {
  return (
    <div>
      <Filter/>
      {/* <ProductList/>
      <ProductsGrid/> */}
      <ProductsContainer/>
      </div>
  )
}

export default Products;