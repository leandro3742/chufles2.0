import React, { useState } from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { myArray, preguntas, respuestas, respuestas_correctas } from './datos.js';
import gif from '../img/bob-12.gif';

function correcto(){
    swal({
        title : "Correcto!!!" ,
        buttons: "siguiente",
        icon : "success"
    }) 
}

function felicitaciones(){
    Swal.fire({
        title: `!!Felicitaciones!!
                Aprovaste el simulacro`,
        padding: '3em',
        background: `
            url(${gif})  
        `
    })
}

function respuesta_mal(respuestas_correctas){
    swal({
        title : "Ops.. La respuesta correcta es: " ,
        text : respuestas_correctas,
        buttons: "Siguiente",
        icon : "error"
    }) 
}

var resCorrectas = 0;
const maximoPreguntas = 29;
function Preguntas(){
    const indice = myArray;
    const [i, setI] = useState(0);
    const [mostrarRespuestas, setMostrarRespuestas] = useState(respuestas[indice[0]]);

    const verificar = (resp) => {
        if(maximoPreguntas > 0){
            if(resp === respuestas_correctas[i]){
                resCorrectas++;
                correcto();
            }
            else{
                respuesta_mal(respuestas_correctas[i]);
            }
            let aux = i+1;
            setMostrarRespuestas(respuestas[indice[aux]]);
            setI(aux);
            }
        else{
            if(resCorrectas >= 25){
                
            }
        }
    };

    return(
        <div>
            <div className="d-flex flex-column align-items-center">
                <span className="pregunta text-center">{preguntas[myArray[i]]}</span>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        {mostrarRespuestas.map((elem, iterator)=>{ return( 
                            <button onClick={()=>verificar(elem)} className="btn btn-primary m-1 border">{elem}</button>
                        )})}
                    </div>
                </div>
                <span>{i+1}/30</span>
            </div>
            <button onClick={()=>felicitaciones()}>Probar</button>
        </div>
    )
}
export default Preguntas;