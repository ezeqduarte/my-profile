import React from "react";
import "./contacto.css";

export default function Contacto() {
  return (
    <div className="principal-div">
      <div className="contact-div">
        <h3>Contacto</h3>
        <h4>Si te interesa mi perfil podemos ponernos en contacto</h4>
        <p>
          Finalmente, estoy abierto a nuevas oportunidades y a conocer
          personas interesantes con quienes colaborar. Sentite libre de
          contactarme si te gustaría saber más sobre mi trabajo o si tienes un
          proyecto en mente en el que podríamos colaborar juntos.
        </p>
        <p>
          ¡Gracias por visitar mi sitio web y espero que te guste lo que ves!
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.18638349047!2d-58.41191400612365!3d-34.609304626663864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaefda95a351%3A0x88dbf09429e0b121!2sBalvanera%2C%20CABA!5e0!3m2!1ses!2sar!4v1676736925788!5m2!1ses!2sar"
        loading="lazy"
        className="maps"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
