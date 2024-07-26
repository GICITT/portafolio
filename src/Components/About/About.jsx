import "./About.css";
import React from "react";
import logo from "../../assets/logo-sn.png";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-right">
          {" "}
          <div className="about-para">
            <p>
              Tengo casi 3 años de experiencia como desarrolladora Front-end,
              especializada en JavaScript y desarrollo front-end. He trabajado
              en proyectos personales y colaborativos, desde pequeñas
              aplicaciones hasta sistemas más complejos.
            </p>
            <p>
              Me apasiona la tecnología y estoy constantemente aprendiendo y
              mejorando mis habilidades. Poseo adaptabilidad, capacidad de
              resolución de problemas y un fuerte compromiso con los proyectos
              en los que trabajo. Concidero que tengo las habilidades para
              convertirme en una desarrolladora front-end altamente competent.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          {" "}
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          {" "}
          <h1>3+</h1>
          <p>PROYECTS COMPLETED</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
