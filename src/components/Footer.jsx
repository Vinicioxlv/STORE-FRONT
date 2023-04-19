import React from "react";
import logo2 from "../assets/logo2.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo2} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Productos Fitness</span>
          <span>Balanzas inteligentes</span>
          <span>cuerdas inteligentes</span>
          <span>Cintas métricas</span>
          <span>Asesoria en nutrición</span>
          <span>Asesoria deportiva</span>
        </div>
        <div className="footer-section-columns">
          <span>0986426729</span>
          <span>info@voreas.ec</span>
          <span>ventas@voreas.ec</span>
          <span>nutri@voreas.ec</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminios y condiciones</span>
          <span>©Voreas 2023 derechos reservados</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
