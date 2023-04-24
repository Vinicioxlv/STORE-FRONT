import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo2 from "../assets/logo2.png";

const Login = () => {
  const [ loginForm, setLoginForm] = useState({ email: "", password: "" })


  const url = 'http://localhost:5000/auth/login'
  const url2 = 'http://localhost:5000/user/me'
  const navigation = useNavigate()

  const handleSubmit = ()=>{
    console.log(loginForm)

    axios.post( url, loginForm)
    .then(res=>{
       console.log(res.data)
       return(
           axios.get(url2,{
               headers:{
                   'Access-Control-Allow-Origin': '*',
                   Authorization : `Bearer ${res.data.token}`
               }
           }).then( response =>{
               console.log(response.data)
               navigation('/Profile')
           })
       )
    })
   }

   const handleChange = (e) =>{
    const {name, value} = e.target
    setLoginForm({
     ...loginForm,
     [name]: value
    }) 
    console.log(loginForm)
 }

  return (
    
    <div className='App'>
      <Navbar />
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} sm={8} md={6} lg={4}>
            <h1 className='text-center mb-3'>Login</h1>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Ingresa tu email'
                  value={loginForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Ingresa tu contraseña'
                  value={loginForm.password}
                  onChange={handleChange}
                />
              </Form.Group><br></br>
              <Button variant='primary' type='button' block onClick={handleSubmit} style ={{ backgroundColor: '#333399'}}>
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>

  )
}

export default Login