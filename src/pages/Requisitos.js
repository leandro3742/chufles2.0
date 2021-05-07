import React from 'react';
import Carrousel from '../components/Carrousel';

function Requisitos(){
    const a = {
        marginTop: "100px"
    }

    return(
        <div style={a}>
            <Carrousel />
        
        <div className="Requisitos">
                <div className="d-flex flex-column">
                    <span className="mt-5 text-center titulo">Requisitos para sacar tu licencia por primera vez</span>
                    <div className="mt-2 d-flex flex-column align-items-center">
                        <ol className="text-center">
                            <li className="lista text-secondary">No tener multas de transito sin pagar</li>
                            <li className="lista mt-1 text-secondary">No tener multas de transito sin pagar</li>
                            <li className="lista mt-1 text-secondary">Cedula de identidad vigente</li>
                        </ol>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <span className="mt-5 text-center titulo">Requisitos para sacar tu licencia profesional</span>
                    <div className="mt-2 d-flex flex-column align-items-center">
                        <ol className="text-center">
                            <li className="lista text-secondary">No tener multas de transito sin pagar</li>
                            <li className="lista mt-1 text-secondary">No tener multas de transito sin pagar</li>
                            <li className="lista mt-1 text-secondary">Cedula de identidad vigente</li>
                        </ol>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Requisitos;  