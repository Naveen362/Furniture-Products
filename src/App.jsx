
import React from "react"
import { RouterProvider,createBrowserRouter } from "react-router-dom"
import { About,Cart,HomeLayout,Checkout,
  Error,LandingPage,Login,Order,Products,
  SingleProduct,Register } from "./pages"

  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<LandingPage/>,
        },
        {
          path:"products",
          element:<Products/>
        },
        {
          path:"products/:id",
          element:<SingleProduct/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:"about",
          element:<About/>
        }
        ,
        {
          path:"checkout",
          element:<Checkout/>
        },
        {
          path:"orders",
          element:<Order/>
        }
      ]
    }
    ,
    {
      path:"/login",
      element:<Login/>,
      errorElement:<Error/>
    },
    {
      path:"/register",
      element:<Register/>,
      errorElement:<Error/>
    }
  ]);
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
};