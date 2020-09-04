import React from "react";
import "./ComunityCard.scss";
import chompa1 from "../assets/icons/chompa1.png";
import chompa2 from "../assets/icons/chompa2.png";
import chompa3 from "../assets/icons/chompa3.png";
import chompa4 from "../assets/icons/chompa4.png";

const CommunityCard = ({ price, imgProduct }) => {
  return (
    <>
      <p className="nuestro-catalogo">Nuestro Catálogo</p>
      <div className="content-cataloge">
        <div className="card">
          <img
            className="photo-product"
            src={chompa1}
            alt="foto del producto"
          />
          <p className="description">Chompa tejida</p>
          <p className="price">S/. 120.00</p>
        </div>
        <div className="card">
          <img
            className="photo-product"
            src={chompa2}
            alt="foto del producto"
          />
          <p className="description">Chompa tejida</p>
          <p className="price">S/. 120.00</p>
        </div>
        <div className="card">
          <img
            className="photo-product"
            src={chompa3}
            alt="foto del producto"
          />
          <p className="description">Chompa tejida</p>
          <p className="price">S/. 120.00</p>
        </div>
        <div className="card">
          <img
            className="photo-product"
            src={chompa4}
            alt="foto del producto"
          />
          <p className="description">Chompa tejida</p>
          <p className="price">S/. 120.00</p>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
