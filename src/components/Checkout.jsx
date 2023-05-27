import React, { useContext } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import Navbar from './Navbar';
import Footer from './Footer';
const Checkout = () => {
  const { userData } = useContext(UserContext);

  // Datos de ejemplo del pedido
  const order = {
    product: 'Producto de ejemplo',
    price: 10.99,
    quantity: 2,
  };

  // Cálculo del subtotal
  const subtotal = order.price * order.quantity;

  return (
    <div className='App'>
        <Navbar /><br />
        <Container>
      <h1 style={{ textAlign: 'center' }}>Checkout</h1><br />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Datos del usuario</Card.Title>
              <p>Nombre: {userData.name}</p>
              <p>Correo electrónico: {userData.email}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order.product}</td>
                <td>${order.price.toFixed(2)}</td>
                <td>{order.quantity}</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total:</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
          <PayPalScriptProvider options={{ 'client-id': 'TU_CLIENT_ID_DE_PAYPAL' }}>
            <PayPalButtons style={{ layout: 'horizontal' }} />
          </PayPalScriptProvider>
        </Col>
      </Row>
    </Container>
    
    </div>
  );
};

export default Checkout;




