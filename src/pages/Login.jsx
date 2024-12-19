import React from 'react'
import { FormInput,SubmitBtn } from '../components'
import {Form,Link, redirect, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action=(store)=>async ({request})=>{
  const formData= await request.formData();
  const data=Object.fromEntries(formData);
  try{

    const response=await customFetch.post("/auth/local",data);
    store.dispatch(loginUser(response.data));
    toast.success("Logged In Successfully ...");
    return redirect("/")
  }
  catch (error){ 
        const errorMessage=error?.response?.data?.error?.message || "login details wrong";
        toast.error(errorMessage)
  }
  
  
    return store
  }

const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginAsGuestUser=async ()=>{
    try {
      // const response=await customFetch.post("/auth/login",{identifier:"test@test.com",password:"secret"});
      // dispatch(loginUser(response.data));
      // toast.success("Welcome guest User");
      // navigate("/");
      const data={
      user:{
        username:"test",
        email:"test@test.com",
      },jwt:Date.now()}
      dispatch(loginUser(data));
      toast.success("Welcome guest User");
      navigate("/")
    }
    catch(error){
      console.log(error);
      toast.error("guest user login error. please try later")
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
     <Form method="POST" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className=''>Login</h4>
        <FormInput type="email" name="identifier" defaultvalue="test@test.com" label="email"></FormInput>
        <FormInput label="password" name='password' type='password' defaultValue="secret"></FormInput>
        <div className='mt-4'>
        <SubmitBtn text='submit' />
        <button type='button' className='btn btn-warning btn-block mt-2' onClick={loginAsGuestUser}>Guest User</button>
        <p className='text-center mt-2'>Not a member yet?<Link to='/register' className='ml-2 link link-hover link-primary capitlize' >Register</Link></p>
        </div>
     </Form>
    </section>
  )
}

export default Login