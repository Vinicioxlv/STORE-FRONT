
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Footer from "./Footer";
// import productoBalanza from "../assets/productoBalanza.png";
// import { Link } from 'react-router-dom';

// const CrearCuenta = () => {
//     return (
//         <div className="App">
//             <Navbar /><br></br>
//             Crear cuenta
//             <Footer />
//         </div>
//     );
// }

// export default CrearCuenta;

import "../App.css";
import Navbar from "./Navbar.jsx"
import Footer from "./Footer";
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data); // Mostrar la respuesta de la API en la consola
      // Realizar acciones adicionales después de la solicitud exitosa, como redireccionar a otra página, mostrar un mensaje de éxito, etc.
    } catch (error) {
      console.error(error); // Mostrar cualquier error en la consola
      // Realizar acciones adicionales en caso de error, como mostrar un mensaje de error al usuario, etc.
    }
  }

  return (
    <div className="App">
    <Navbar /><br></br>
        <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
            </Form.Group><br></br>
            <Button variant="primary" type="submit">
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