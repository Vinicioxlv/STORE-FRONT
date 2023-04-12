import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Asesoría",
      text: "Te asesoramos con el producto que mas se adapta a tus requerimientos",
    },
    {
      image: ChooseMeals,
      title: "Garantía",
      text: "12 meses de garantía por defectos de fábrica",
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
        <p className="primary-text">
          Contamos con productos fitness inteligentes entre balanzas, cintas metricas, cuerdas, etc. Los mismo que incluyen:
        </p>
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
