import React, { useState } from 'react';
import logo from '../img/logo_chufles3.svg';

function Navbar() {
  
  const [nosotros, setNosotros] = useState("active");
  const [materialTeorico, setMaterialTeorico] = useState("");
  const [examen, setExamen] = useState("");
  const [requisitos, setRequisitos] = useState("");

  const elegirLink = (link) => {
    switch (link) {
      case 'nosotros':
        setNosotros("active");
        setMaterialTeorico("");
        setExamen("");
        setRequisitos("");        
      break;

      case 'materialTeorico':
        setNosotros("");
        setMaterialTeorico("active");
        setExamen("");
        setRequisitos("");        
      break;

      case 'examen':
        setNosotros("");
        setMaterialTeorico("");
        setExamen("active");
        setRequisitos("");        
      break;
      
      case 'requisitos':
        setNosotros("");
        setMaterialTeorico("");
        setExamen("");
        setRequisitos("active");        
      break;
    }
  };
  
  const style = {
    width: '150px',
    height: '50px',
  };
  
  const fondo = { backgroundColor: "rgba(0,0,255,0.3)"};
  const styleNav = {
    borderRadius: "0px 0px 5px 5px",
    backgroundColor: "green",
    zIndex: "1" 
  }
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="col-8 d-flex justify-content-start">
          <div>
            <img style={style} src={logo} className="" />
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <div className="navbar-nav align-items-center justify-content-center">
            <a className={"nav-link "+ nosotros} onClick={()=>elegirLink('nosotros')} href="#">Nosotros</a>
            <a className={"nav-link "+ materialTeorico} onClick={()=>elegirLink('materialTeorico')} href="#">Material Teorico</a>
            <a className={"nav-link "+ examen} onClick={()=>elegirLink('examen')} href="#">Examen</a>
            <a className={"nav-link "+ requisitos} onClick={()=>elegirLink('requisitos')} href="#">Requisitos</a>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
