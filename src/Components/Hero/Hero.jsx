import "./Hero.css";
import imgProfile from "../../assets/imgProfile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <img
        src={imgProfile}
        alt="imgProfile"
        className="img-Profile"
        style={{ width: "250px", height: "auto", marginBottom: "25px" }}
      />{" "}
      <h1>
        {" "}
        <span>Im Gisela Cittadini,</span> developer based in Buenos Aires{" "}
      </h1>
      <p>
        Hola! Mi nombre es Gisela y soy Front End Developer en busca de una
        oportunidad, hace dos años me senti atraida por el mundo de la
        informatica y la progamación por lo cual decidi darle giro a mi
        profecion y cambiar de carrera.
      </p>
      <div className="hero-actions">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          <div className="hero-connect">Connect Whit me</div>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          {" "}
          <div className="hero-resum">My resume</div>{" "}
        </AnchorLink>
      </div>
    </div>
  );
}
