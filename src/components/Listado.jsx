import "../App.css";
import Navbar from "./Navbar.jsx"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";
import productoBalanza from "../assets/productoBalanza.png";
import { Link } from 'react-router-dom';

const Listado = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los productos utilizando Axios
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
        <Navbar /><br></br>
      <h1 style={{textAlign: "center"}}>Catálogo de Productos</h1><br />
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
             <Link to= {`/ProductDetail/${product._id}`} className="card-link">
              <Card>
              <Card.Img variant="top" src={productoBalanza} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Precio: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Listado;