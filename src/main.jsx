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
    element:<UserProvider><Profile /></UserProvider> 
  },
{
  path: '/Listado',
  element: <Listado />,
},
{
  path: '/CrearCuenta',
  element:<CrearCuenta />
},
{
  path: '/Login',
  element: <Login />
},
{
  path: '/ProductDetail/:id',
  element:<UserProvider><ProductDetail/></UserProvider>
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <PayPalScriptProvider options={{
      "client-id": "AcmX5AW4FYFEB_Xu6vdndfTKQsmpLLhPg9lH1XLPm0WMK4JmdKUC-cGcff6hBY3FlC5Bcr8nuUUmMmpP", components: "buttons",
      currency: "USD"
    }}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </PayPalScriptProvider>
  </React.StrictMode>,

)
