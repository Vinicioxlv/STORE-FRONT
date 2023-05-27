import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import productoBalanza from '../assets/productobalanza.png';

const ProductDetail = () => {
  const { id } = useParams();
  const { userData } = useContext(UserContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://store-backend-4.vercel.app/api/v1/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del producto:', error);
      });
  }, [id]);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1 style={{ textAlign: 'center' }}>Detalle del producto</h1>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img src={productoBalanza} alt={product.name} />
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <h4>Características</h4>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: {product.price}</Card.Text>
                {userData ? (
                  <Link to="/Checkout">
                    <Button variant="primary" style={{ backgroundColor: '#333399' }}>
                    Comprar
                  </Button>

                  </Link>
                  
                ) : (
                  <Link to="/Login">
                    <Button variant="primary" style={{ backgroundColor: '#333399' }}>
                      Iniciar sesión
                    </Button>
                  </Link>
                )}
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

