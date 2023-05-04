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
import UserProvider from "./context/UserContext.jsx"
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Profile',
    element:
    <UserProvider>
      <PayPalScriptProvider>
        <Profile />
      </PayPalScriptProvider>
    </UserProvider>
  },
{
  path: '/Listado',
  element: <Listado />,
},
{
  path: '/CrearCuenta',
  element:
  <UserProvider>
    <PayPalScriptProvider options={{"client-id": "AaGD_mJtE7EC8x8AKctXxKaG_rdsmrQuP0ENDnAnzko5F960p1YZvnZWdf84wDxAR21Om3KlQwqGjYNe",
      components: "buttons",
      currency: "USD"}}>
      <CrearCuenta />
    </PayPalScriptProvider>
  </UserProvider>
},
{
  path: '/Login',
  element: 
   <UserProvider>
       <PayPalScriptProvider>
          <Login />
       </PayPalScriptProvider>
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
