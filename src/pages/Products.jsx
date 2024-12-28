import React from 'react'
import { customFetch } from '../utils'

import {ProductsContainer, Filter } from '../components';
import PaginationContainer from '../components/PaginationContainer';



export const loader=async ({request})=>{
  const params =Object.fromEntries([...new URL(request.url).searchParams.entries()])
 
  const response= await customFetch('/products',{params});
  const products=response.data.data;
  const meta=response.data.meta;
  

  return {products,meta,params};
}
const Products = () => {
  return (
    <div>
      <Filter/>
      
      <ProductsContainer/>
      <PaginationContainer/>
      </div>
  )
}

export default Products;