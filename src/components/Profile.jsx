

import React, { useContext } from 'react'
import BtnChecout from './Checkout/BtnChecout'
import { UserContext } from '../context/UserContext'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'
import { Card, ListGroup, Button } from "react-bootstrap";
import imagen from '../assets/descarga.png'
import Navbar from "./Navbar.jsx"

const Profile = () => {
  const {userData, logout} = useContext(UserContext)
  const navigation = useNavigate()

  const handleLogout = () =>{
    logout()
    navigation('/')
  }

  return (
    <div> 
    

       {
        userData ? (

          <div className='App'>
          <Navbar /><br /><br />
            <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                  <Card.Title>Perfil de Usuario</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Nombre:</strong> {userData.name}
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                      <strong>Apellido:</strong> {userData.lastname}
                    </ListGroup.Item> */}
                    <ListGroup.Item>
                      <strong>Correo:</strong> {userData.email}
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                      <strong>Usuario:</strong> {userData.username}
                    </ListGroup.Item> */}
                  </ListGroup>
                  {/* <Button variant="primary" className="mt-3">
                    Editar
                  </Button> */}
                  <Button variant="primary" className="mt-3" onClick={handleLogout} style ={{ backgroundColor: '#333399'}}>
                    Cerrar sesion
                  </Button>
                  <BtnChecout />
                </Card.Body>
            </Card>

          </div>
         
        ):(
          <p>No estas logeado</p>
        )
       }
    </div>
  )
}

export default Profile