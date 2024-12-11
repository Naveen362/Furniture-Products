import React from 'react'
import { FormInput,SubmitBtn } from '../components'
import {Form,Link} from "react-router-dom"
const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
     <Form method="POST" className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className=''>Login</h4>
        <FormInput type="email" name="identifier" defaultvalue="test@test.com" label="email"></FormInput>
        <FormInput label="password" name='password' type='password' defaultValue="secret"></FormInput>
        <div className='mt-4'>
        <SubmitBtn text='submit'/>
        <button type='button' className='btn btn-warning btn-block mt-2'>Guest User</button>
        <p className='text-center mt-2'>Not a member yet?<Link to='/register' className='ml-2 link link-hover link-primary capitlize' >Register</Link></p>
        </div>
     </Form>
    </section>
  )
}

export default Login