import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './Cart.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home.jsx'
import Error from './Error.jsx'
import Food from './Food.jsx'

let Router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/cart",
        element : <Cart></Cart>
      },
      {
        path : "/About",
        element : <About></About>
      },
      {
        path : "/Product/:id",
        element : <Product></Product>
      },
      {
        path : "/Food",
        element : <Food></Food>
      }
    ],
    errorElement : <Error></Error>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}></RouterProvider>
)
