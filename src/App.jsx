
import { Routes, Route } from "react-router-dom";
import Historia from './componentes/Historia'
import Imagen_principal from './componentes/Imagen_principal'
import Carta from './componentes/Carta';
import Seccion_Reservas from './componentes/conoce_reservas';
import Footer from './componentes/footer';
import Atencion from './componentes/atencion';
import Reservacion from './componentes/Tipos_Reservaciones'; 
import './index.css';

function App() {
  return (
    <section className="contenerdorPide_Ya">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#inicio">Alma & Cocina</a>
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
              <li className="nav-item">
                <a className="nav-link" href="#historia">HISTORIA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#carta">CARTA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tipos-reserva">TIPOS DE RESERVA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#atencion">HORARIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservar">RESERVAR</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* NUESTRAS RUTAS */}
      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <div id="inicio">
              <Imagen_principal />
            </div>
            <div id="historia">
              <Historia />
            </div>
            <div id="carta">
              <Carta />
            </div>
            <div id="tipos-reserva">
              <Seccion_Reservas />
            </div>
            <div id="atencion">
              <Atencion />
            </div>
          </>
        } />
        
        {/* RUTA: Pagina de Tipos de Reserva */}
        <Route path="/reservacion" element={<Reservacion></Reservacion>} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;