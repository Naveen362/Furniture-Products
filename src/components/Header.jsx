import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.userState.user);
  console.log(user);
  const handleLogout=()=>{
      navigate("/");
      dispatch(logOut());
      dispatch(clearCart())
  }
  return (
   <header className='bg-neutral py-2 text-neutral-content'>
    <div className='align-element flex justify-center sm:justify-end'>
         {user ?(<div className='flex gap-x-2 sm:gap-x-8 items-center'>
             <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
             <button className='btn btn-xs btn-outline btn-primary ' onClick={handleLogout}>logout</button>
         </div>):
        <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>Sign in /Guest</Link>
            <Link className='link link-hover text-xs sm:text-sm' to='/register'>Create a account</Link>
        </div>}
    </div>
   </header>
  )
}

export default Header