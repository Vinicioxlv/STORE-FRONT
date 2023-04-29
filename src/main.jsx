import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Listado from "./components/Listado.jsx"
import CrearCuenta from "./components/CrearCuenta.jsx"
import ProductDetail from "./components/ProductDetail.jsx"
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"
import "bootswatch/dist/minty/bootstrap.min.css";
import UserProvider from "./context/userContext.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Profile',
    element: <UserProvider>
                <Profile/>
            </UserProvider>
  },
{
  path: '/Listado',
  element: <Listado />,
},
{
  path: '/CrearCuenta',
  element: <UserProvider><CrearCuenta /></UserProvider>
},
{
  path: '/Login',
  element: 
  <UserProvider>
    <Login />
  </UserProvider>
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
