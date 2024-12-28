

import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formPrice } from '../utils'

const ProductsGrid = () => {
   const {products}= useLoaderData();
  return (
    <div className='pt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product)=>{
        const {title,image,price}=product.attributes;
        const IndianAmount=price;
        return (
            <Link key={product.id} className='card w-full shadow-lg hover:shadow-2xl transition duration-300' to={`/products/${product.id}`}>
           
           <figure className='px-4 pt-4'>
            <img src={image} alt={title} className='rounded-lg h-64 md:h-48 w-full object-cover'/>
           </figure>
           <div className='card-body items-center text-center'>
            <h2 className='card-title capitalize tracking-wider'>{title}</h2>
            <span className='text-secondary'>{formPrice(IndianAmount)}</span>
           </div>
          </Link>
        )

      })}
    </div>
  )
}

export default ProductsGrid