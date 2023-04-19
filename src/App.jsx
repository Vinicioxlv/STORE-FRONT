import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Route, Routes} from 'react-router-dom';
import Listado from './components/Listado.jsx';


function App() {

        
  return (
    <div className="App">
        
      <Home />   
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    
  )
 
}

export default App