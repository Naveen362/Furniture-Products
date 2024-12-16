import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar } from '../components'
import Loading from '../components/Loading'
const HomeLayout = () => {
  const navigation=useNavigation()
  const isPageLoading=navigation.state==="loading";
  return (<>
    {/* <nav>
        <span  className='text-4xl text-primary'> 
                         Store
        </span>
    </nav> */}
    <Header/>
    <Navbar/>
      {isPageLoading?(<Loading/>):(
     <section className='align-element py-20'>
    <Outlet/></section>)}
    </>
  )
}

export default HomeLayout