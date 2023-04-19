import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Asesoría",
      text: "En la selección, instalación, manejo y soporte técnico",
    },
    {
      image: ChooseMeals,
      title: "Garantía",
      text: "12 meses de garantía con factura",
    },
    {
      image: DeliveryMeals,
      title: "Entrega incluida",
      text: "Nuestros precios incluyen entrega a nivel Nacional",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top"><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <h1 className="primary-heading">Como trabajamos</h1>
        <p className="primary-text">Te asesoramos en la seleccion del producto que mas se adapte a tus necesidades, nuestros productos incluyen:</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
