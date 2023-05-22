import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav-container">
        <div className="titulo">
          <h1>Tecnológico de Monterrey</h1>
        </div>

        <NavLink to="/" end="true" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/about" className="nav-link">
          Acerca de
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Productos
        </NavLink>
        <NavLink to="/events" className="nav-link">
          Eventos
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contáctanos
        </NavLink>
      </nav>
    </Fragment>
  );
};

export { Navbar };
