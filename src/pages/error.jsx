import React from 'react'
import { useRouteError ,Link} from 'react-router-dom';
const Error = () => {
  
    const error=useRouteError();
    console.log(error);

    if (error.status===404){
        return(
        <main className='grid min-h-[100vh] place-items-center px-8'>
         <div className='text-center'>
            <p className='text-8xl font-semibold text-info'>404</p>
            <h1 className='mt-4 text-3xl font-bold sm:text-5xl'>Page not found</h1>
            <p className='mt-6 text-lg leading-7'>Sorry we couldn't find the page you're looking for ...</p>
            
            
            <div className='mt-3'>
         <Link to='/' className='btn btn-secondary'>Click Here For Home</Link>
         </div>
         </div>
         
        </main>)
    }
    return (

    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className='text-center font-bold'>There was an error..</h4>


    </main>
  )
}

export default Error;