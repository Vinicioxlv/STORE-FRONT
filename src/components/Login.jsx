import React, {  useContext } from 'react'
import axios from 'axios'
import Navbar from "./Navbar.jsx"
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo2 from "../assets/logo2.png";


const Login = () => {
  //const [ loginForm, setLoginForm] = useState({ email: "", password: "" })

const { userData, setUserData } = useContext(UserContext);

  const url = 'https://store-backend-4.vercel.app/api/v1/auth/login'
  const url2 = 'https://store-backend-4.vercel.app/api/v1/user/me'
  const navigation = useNavigate()

  const handleSubmit = ()=>{
    console.log(userData)

    axios.post( url, userData)
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
               setUserData(response.data)
               navigation('/Profile')
           })
       )
    })
   }

   const handleChange = (e) =>{
    const {name, value} = e.target
    setUserData({
     ...userData,
     [name]: value
    }) 
    console.log(userData)
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
                  value={userData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Ingresa tu contraseña'
                  value={userData.password}
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
    
    </div>

  )
}

export default Login

