import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./sobremi.css";

export default function SobreMi() {
  return (
    <>
      <div className="principal-div">
        <div className="text-aboutme">
          <h3 className="grey">Sobre mi</h3>
          <h4 className="yellow">
            Les cuento más sobre mi perfil técnico y personal
          </h4>
          <p>
            Hace un tiempo me inicié en el mundo de la programación cuando
            decidí que quería explorar nuevas oportunidades y ampliar mis
            horizontes. Desde entonces, he venido trabajando para aprender todo
            lo que pueda sobre las últimas tecnologías y herramientas de
            desarrollo, y asi aplicarlas en proyectos emocionantes y
            desafiantes.
          </p>
          <p>
            Me enorgullece haber participado en el Bootcamp Full Stack de
            MindHub LA, donde aprendí y desarrollé habilidades en tecnologías
            como <span className="negrita">JavaScript</span>,{" "}
            <span className="negrita">NodeJS</span>,{" "}
            <span className="negrita">React</span>,{" "}
            <span className="negrita">Express</span>,{" "}
            <span className="negrita">Mongoose</span>,{" "}
            <span className="negrita">MongoDB</span>,{" "}
            <span className="negrita">React</span>
            <span className="negrita">Native</span>, entre otras. En mi carrera
            como desarrollador, he aprendido a trabajar en equipo, a liderar y
            colaborar en la generación de ideas y soluciones creativas, y a
            mantener un enfoque constante en la mejora y el crecimiento personal
            y profesional.
          </p>
          <p>
            Me considero una persona comprometida y dedicada, enfocada en lograr
            los mejores resultados posibles en cada proyecto y tareas. Además,
            mi experiencia en el diseño me permite tener una visión holística de
            los proyectos, combinando el aspecto visual con el funcionamiento
            del mismo. Creo que esta combinación me permite aportar un enfoque
            único y valioso a cualquier proyecto en el que participo.
          </p>
        </div>
        <div className="rigth-div-aboutme">
          <div className="technologies">
            <img title="HTML5" src="./img/html.png" alt="" />
            <img title="CSS3" src="./img/css.png" alt="" />
            <img title="Javascript" src="./img/javascript.png" alt="" />
            <img title="MongoDB" src="./img/mongoDB.webp" alt="" />
            <img title="React" src="./img/react.png" alt="" />
            <img title="Redux Toolkit" src="./img/redux.png" alt="" />
            <img title="NodeJS" src="./img/nodeJS.webp" alt="" />
            <img title="Postman" src="./img/postman.webp" alt="" />
            <img title="Figma" src="./img/figma2.png" alt="figma-icon" />
            <img title="Photoshop" src="./img/photoshop.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
