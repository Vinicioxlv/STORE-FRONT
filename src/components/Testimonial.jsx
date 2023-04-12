import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimomios</p>
        <h1 className="primary-heading">Que estan diciendo nuestros clientes</h1>
        <h1 className="primary-heading">nuestros clientes</h1>
        <p className="primary-text">
      
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
         La balanaza inteligente de voreas me permitio conocer mi % de grasa, masa muscular
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Andrés Vega</h2>
      </div>
    </div>
  );
};

export default Testimonial;
