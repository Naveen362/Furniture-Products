
import React, { useState } from 'react'
import { formPrice } from '../utils'
const FormRange = ({label,name,size,price}) => {
    const step=1000;
    const maxPrice=100000;
    const [selectedPrice,setSelectPrice]=useState(price || maxPrice)
  return (
    <div>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}

            </span>
            <span>{formPrice(selectedPrice)}</span>
        </label>
        <input type='range' name={name} min={0} max={maxPrice}
        value={selectedPrice}
        onChange={(e)=>{
            setSelectPrice(e.target.value);
           
        }}
         className={`range range-primary ${size}`}
         step={step}
        
        />
        <div className='w-full flex justify-between text-xs px-2 mt-2'>
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>Max :{formPrice(maxPrice)}</span>
        </div>
    </div>
  )
}

export default FormRange