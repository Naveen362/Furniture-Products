
import React from "react"
import { RouterProvider,createBrowserRouter } from "react-router-dom"
import { About,Cart,HomeLayout,Checkout,
  Error,LandingPage,Login,Order,Products,
  SingleProduct,Register } from "./pages"
import { ErrorElement } from "./components";
import { loader as LandingLoader } from "./pages/LandingPage";
import {loader as SingleProductLoader} from "./pages/SingleProduct";
import {loader as ProductsLoader} from "./pages/Products"
import {action as registerAction} from "./pages/Register"
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<LandingPage/>,
          errorElement:<ErrorElement/>,
          loader:LandingLoader,
        },
        {
          path:"products",
          element:<Products/>,
          errorElement:<ErrorElement/>,
          loader:ProductsLoader,
        },
        {
          path:"products/:id",
          element:<SingleProduct/>,
          errorElement:<ErrorElement/>,
          loader:SingleProductLoader,
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
      errorElement:<Error/>,
      action:registerAction,
    }
  ]);
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
};