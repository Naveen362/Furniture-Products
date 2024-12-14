import React from 'react'
import { Hero } from '../components'
import { customFetch } from '../utils'

import FeatureProducts from '../components/FeatureProducts'
const url='/products?featured=true'
export const loader =async()=>{
  const response=await customFetch(url);
  console.log(response);
  const products=response.data.data;
  return {products};

}
const LandingPage = () => {
  return (
    <>
        <Hero/>
      <FeatureProducts/>
    </>
  )
}

export default LandingPage