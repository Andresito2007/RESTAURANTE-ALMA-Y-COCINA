

import styl from "./estilos.module.css";

function Nav() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${styl.navGrande}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styl.brand}`} href="#">
          Alma & Cocina
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className={`nav-link ${styl.link}`} href="#">NUESTRA HISTORIA</a></li>
            <li className="nav-item"><a className={`nav-link ${styl.link}`} href="#">CARTA</a></li>
            <li className="nav-item"><a className={`nav-link ${styl.link}`} href="#">TIPOS DE RESERVA</a></li>
            <li className="nav-item"><a className={`nav-link ${styl.link}`} href="#">HORARIO</a></li>
            <li className="nav-item"><a className={`nav-link ${styl.link}`} href="#">RESERVAS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;