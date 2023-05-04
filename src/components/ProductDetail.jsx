
import "../App.css";
import Navbar from "./Navbar.jsx"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import Footer from "./Footer";
import productoBalanza from "../assets/productobalanza.png";
import { Link } from 'react-router-dom';


const ProductDetail = () => {
  // Obtén el ID del producto de los parámetros de la URL
  const { id } = useParams();

  // Estado para almacenar los datos del producto
  const [product, setProduct] = useState({});

  // Hace una llamada a la API para obtener los detalles del producto
  useEffect(() => {
    axios.get(`https://store-backend-4.vercel.app/api/v1/products/${id}`)
      .then(response => {
        // Actualiza el estado con los datos del producto obtenidos de la API
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del producto:', error);
      });
  }, [id]);

  return (
    <div className="App">
      <Navbar /><br></br>
      <Container><br></br>
      <h1 style={{textAlign: "center"}}>Detalle del producto</h1><br></br>
      <Row>
        <Col md={4}>
          {/* Muestra la imagen del producto en la card */}
          <Card>
            <Card.Img src={productoBalanza} alt={product.name} />
          </Card>
        </Col>
        <Col md={8}>
          {/* Muestra el nombre, precio y botón de registro en la card */}
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <h4>Características</h4>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                Precio: {product.price}
              </Card.Text>
              <Link to ='/Login'>
                <Button variant="primary" style ={{ backgroundColor: '#333399'}}>Comprar</Button>
              </Link>
             </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
        </div>
  );
};

export default ProductDetail;