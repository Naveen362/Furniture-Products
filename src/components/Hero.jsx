import React from 'react'
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from 'react-router-dom';
const carouselImage=[hero1,hero2,hero3,hero4];
const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
          <div>
            <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                This is a store where you can shop anything</h1>
                <p className='mt-8 max-w-xl text-lg leading'>
                Turn your house into a home with furniture that speaks your style
                </p>
                <ul className="list-disc list-inside space-y-3">
          <li>Customizable Designs: Tailor furniture to your needs and style.</li>
          <li>Affordable Luxury: Quality furniture at unbeatable prices.</li>
          <li>
            Seamless Shopping: Easy online ordering with fast delivery and
            assembly services.
          </li>
        </ul>
                <div className='mt-10'>
                    <Link to='products' className='btn btn-primary'>Our Products</Link>
                </div>
          </div>
          <div className='lg:carousel carousel-center hidden h-[28rem] p-4 space-x-4 bg-neutral rounded-box '>
            {carouselImage.map((image,index)=>{
             return (
                <div key={index} className='carousel-item'>
                    <img src={image} alt='Corousel' className='rounded-box h-full w-80 object-cover'/>
                    </div>
             )
            })}
          </div>
          

    </div>
  )
}

export default Hero

