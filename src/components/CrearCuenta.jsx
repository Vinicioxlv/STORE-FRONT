import "../App.css";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer";
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const CrearCuenta = () => {
  const [userData, setUserData ] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  })
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
    console.log(setUserData)
   }
  const navigation = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://store-backend-4.vercel.app/api/v1/register', userData);
      console.log(response.data); // Mostrar la respuesta de la API en la consola
      // Realizar acciones adicionales después de la solicitud exitosa, como redireccionar a otra página, mostrar un mensaje de éxito, etc.
      navigation('/Login')
      } catch (error) {
      console.error(error); // Mostrar cualquier error en la consola
      // Realizar acciones adicionales en caso de error, como mostrar un mensaje de error al usuario, etc.
    }
  }

  return (
    <div className="App">
    <Navbar /><br></br>
        <Container>
      <h1 style={{textAlign: "center"}}>Registro</h1><br></br>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="lastname" value={userData.lastname} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" name="username" value={userData.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" value={userData.password} onChange={handleChange} />
            </Form.Group><br></br>
            <Button variant="primary" type="submit" style ={{ backgroundColor: '#333399'}}>
              Crear Cuenta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container><br />
    <Footer />
    </div>
  );
};

export default CrearCuenta;
