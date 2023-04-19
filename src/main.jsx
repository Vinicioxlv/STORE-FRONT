import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Listado from "./components/Listado.jsx"
import ProductDetail from "./components/ProductDetail.jsx"
import "bootswatch/dist/minty/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
{
  path: '/Listado',
  element: <Listado />,
},
{
  path: '/ProductDetail/:id',
  element: <ProductDetail/>,
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>

)
