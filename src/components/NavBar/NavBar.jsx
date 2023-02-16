import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";


const buttons = [
  { button: "Inicio", rute: "" },
  { button: "Sobre mi", rute: "sobre-mi" },
  { button: "Proyectos", rute: "mis-trabajos" },
  { button: "Contacto", rute: "contacto" },
];

export default function NavBar() {
  const location = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="navbar">
      <img
        className="logo"
        src="./img/logo-negro.png"
        alt="ezequiel-dev-logo"
      />

      <div className="menu">
        <ul>
          {buttons.map((button) => (
            <NavLink to={button.rute} style={{ textDecoration: "none" }}>
              {location === button.rute ? (
                <li className="active">{button.button}</li>
              ) : (
                <li className="black">{button.button}</li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
