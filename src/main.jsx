import React from 'react'
import ReactDOM from 'react-dom/client'
import toast, { Toaster } from 'react-hot-toast';
import './index.css'

import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Grander from './Components/Grandar/Grander';
 const router= createBrowserRouter([
  {path:'/',
  element: <Main></Main>,
  children: [
    {
      path:'/',
      element:<Home></Home>,
      loader: ()=> fetch('Tshirts.json')
    },
    {
      path:'/grand',
      element:<Grander></Grander>
     
    }
  ]
  }

 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
