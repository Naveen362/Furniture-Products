import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSeletion from './FormSeletion'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filter = () => {
    const {meta,params}=useLoaderData();
    const {search,company,category,shipping,order,price}=params;
  return (
    // <div className='form-control'>
    //     <label htmlFor={name} className='label-text capitalize'>
    //         <span>{label}</span>
    //     </label>
    //     <input type={type} name={name} defaultValue={defaultValue}
    //     className={`input input-borderd ${size}`}/>
    // </div>
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        <FormInput type='search' label="Search Product" name='search' size="input-sm" defaultValue={search}/>

        {/* catergory */}
        <FormSeletion label="select category" name='category'
        list={meta.categories} 
        size="select-sm" defaultValue={category}
        // defaultValue={meta.categories}
        />
        <FormSeletion label="select company" name='company'
        list={meta.companies} defaultValue={company}
        size="select-sm"
        // defaultValue={meta.categories}
        />
        <FormRange label="select price" name="price" size="range-sm" price={price} />
        <FormCheckbox label="free shipping" name='shipping' size="checkbox-sm" defaultValue={shipping} />
        <FormSeletion label="sort by" name='order'
        list={["a-z","z-a","high","low"]} 
        size="select-sm" defaultValue={order}
        // defaultValue={meta.categories}
        />

<button className='btn btn-sm btn-info mt-5'>Search</button>
<Link to="/products" className='btn btn-accent btn-sm'>Reset</Link>
    </Form>
  )
}

export default Filter