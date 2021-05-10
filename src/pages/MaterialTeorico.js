import React from 'react';
import pdf from "../img/pdf.svg";

function MaterialTeorico(){
 return(
     
     <div className="d-flex justify-content-center">
        <div style={{marginTop: "100px"}} className="col-11 d-flex flex-column align-items-center">
            <span className="mt-3 titulo">Guia nacional de conduccion</span>
            <div className="mt-4 row">
                <div className="col-6 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_84c6b7015508415092af8098c5b4cc12.pdf" className="text-center">Teorico autos y motos</a>
                </div>
                <div className="col-6 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="http://www.imcanelones.gub.uy/sites/all/themes/imc/archivos/ManualProfesional.pdf" className="text-center">Teorico de licencia profesional</a>
                </div>
            </div>

            <span className="mt-3 titulo text-center">Requisitos para sacar tu licencia profesional</span>
            <div className="mt-4 row">
                <div className="col-6 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f41003ded5a94d569d19740b6498e1b2.pdf" className="text-center m-0">Ley N° 18.191</a>
                </div>
                <div className="col-6 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f67420cb588b44819fcb8095c85bb680.pdf" className="text-center">Ley N° 19.172</a>
                </div>
                <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_3a734de49fc5483c9e35a0a2a73593ff.pdf" className="text-center">Ley N° 190.061</a>
                </div>
                <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_c2ad50db107749f9b2f4eea4dcc25249.pdf" className="text-center">Señales de tránsito</a>
                </div>
                <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                    <img style={{width: "25px"}} src={pdf} />
                    <a href="http://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_b82bc87ea0884b12894255d390c056b5.pdf" className="text-center">Regulación de circulación vial</a>
                </div>
                <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                    <img src={pdf} />
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_649ad3be92d848c2aa478a6046897ca2.pdf" className="text-center">Ley de faltas</a>
                </div>
            </div>
        </div>
    </div>

 )
}
export default MaterialTeorico;