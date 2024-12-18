import React, { useEffect, useState } from 'react'
import {BsCart3,BsMoonFill,BsSunFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import {FaBarsStaggered} from "react-icons/fa6"
import Navlinks from './Navlinks'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'


const Navbar = () => {
  
  const dispatch=useDispatch()
  var handleTheme=()=>{
    dispatch(toggleTheme())
  }
  const theme=useSelector((state)=>state.userState.theme)
  const isDarkTheme=theme==="dracula";
  
  const numItemsinCart=useSelector((state)=>state.cartState.numberItemsInCart);

  
  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
           <div className="navbar-start">
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>
            Store</NavLink>
            <div className='dropdown'>
                 <label className="btn btn-ghost lg:hidden"><FaBarsStaggered tabIndex={0} className='h-6 w-6'/>
                 </label>

                 <ul tabIndex={0} className='menu menu-sm mt-3  z-[1] p-2 dropdown-content shadow bg-base-200 text-[gray] rounded-box w-52'>


               <Navlinks/>


                 </ul>
            </div>
           </div>
           <div className="navbar-center hidden lg:flex">
            <ul className='menu menu-horizontal'><Navlinks/></ul>
           </div>
           <div className="navbar-end">
           <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} defaultChecked={isDarkTheme}/>
            <BsSunFill className='swap-on h-6 w-6'/>
            <BsMoonFill className='swap-off h-6 w-6'/>
            </label> 
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md'><div className='indicator'><BsCart3 className='h-6 w-6'/>
            <span className='indicator-item badge badge-sm badge-primary'>{numItemsinCart}</span>
            </div></NavLink>
           </div>

        </div>
    </nav>
  )
}

export default Navbar