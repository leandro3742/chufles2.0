import React from 'react';
import pdf from "../img/pdf.svg";

function MaterialTeorico(){
 return(
    <div style={{marginTop: "100px"}} className="d-flex flex-column align-items-center">
        <span className="mt-3 titulo">Guia nacional de conduccion</span>
        <div className="mt-4 row">
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Teorico autos y motos</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Teorico de licencia profesional</p>
            </div>
        </div>

        <span className="mt-3 titulo text-center">Requisitos para sacar tu licencia profesional</span>
        <div className="mt-4 row">
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Ley N° 18.191</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Ley N° 19.172</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Ley N° 190.061</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Señales de tránsito</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Regulación de circulación vial</p>
            </div>
            <div className="col-6 pdf d-flex flex-column align-items-center">
                <img src={pdf} />
                <p className="text-center">Ley de faltas</p>
            </div>
        </div>
    </div>
 )
}
export default MaterialTeorico;