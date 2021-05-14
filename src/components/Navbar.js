import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo_chufles3.svg';

function Navbar() {

  const style = {
    // width: '250px',
    // height: '50px',
  };
  
  const styleNavbar = {
    margin: "0",
    borderRadius: "0 0 10px 10px",
    backgroundColor: "rgba(70, 70, 70, 0.95)"
  }

  return (
     <nav style={styleNavbar} className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="col-8 d-flex justify-content-start">
        <div>
          <Link to="/"><img style={style} src={logo} /></Link>
        </div>
      </div>
      <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <div className="navbar-nav align-items-center justify-content-center">
          <NavLink className="nav-link" exact estrict to="/">Nosotros</NavLink>
          <NavLink className="nav-link " to="/materialTeorico">Material Teorico</NavLink>
          <NavLink className="nav-link " to="/examen">Examen</NavLink>
          <NavLink className="nav-link" to="/requisitos">Requisitos</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
