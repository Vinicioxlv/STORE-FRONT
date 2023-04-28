import React from "react";
import BannerBackground from "../assets/home-banner-ba2.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Bienvenido a Voreas 
          </h1>
          <h1 className="primary-heading">
           Ecommerce de productos fitness 
          </h1>
          <p className="primary-text">
          Te ayudamos a vivir de una manera más saludable y atlética. 
          </p>
          <Link to ='/Listado' className="card-link">
            <button className="secondary-button"> 
              Ver productos <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
