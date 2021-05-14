import React, { useState } from 'react';
import swal from 'sweetalert';
import Preguntas from '../components/Preguntas';
import Footer from '../components/Footer';
class USUARIO{
    constructor(CI, sexo, nombre){
        this.CI = CI;
        this.sexo = sexo;
        this.nombre = nombre;
    }
}
/********CONSTANTES Y ARREGLOS **********/

const Maira = new USUARIO(26372734, 'f', 'Maira');
const Leandro = new USUARIO(49189815, 'm', 'Leandro');
const Arihana = new USUARIO(50379752, 'f', 'Arihana');

const Sergio = new USUARIO(42020931, 'm', 'Sergio'); //Ingresado: 27/2/21
const Natalia = new USUARIO(32992275, 'f', 'Natalia'); //Natalia Silva ingresada: 3/3/21
const Yaquelin = new USUARIO(43969063, 'f', 'Yaquelin'); //Yaquelin Lisboa ingresada: 9/3/21
const Juan = new USUARIO(18850079, 'm', 'Juan'); //Juan Marcelo Diaz ingresado: 10/3/21
const Asley = new USUARIO(64540941, 'm', 'Asley'); //Asley Avila ingresado: 11/3/21
const Joelin = new USUARIO(50097873, 'f', 'Joelin'); //Joelin Ghan ingresada: 11/3/21
const Melanie = new USUARIO(53120960, 'f', 'Melanie'); // Melanie Sire ingresada: 16/3/21
const Lucas = new USUARIO(55510199, 'm', 'Lucas'); //Lucas Blanco ingresado: 17/3/21

const arreglo = [Maira, Leandro, Arihana, Sergio, Natalia, Yaquelin, Juan, Asley, Joelin, Melanie, Lucas];

/*******************************************/

function Examen(){
    const colorOk = "#7FFF81";
    const colorError = "#FF4343 ";
    const [fondoInput, setFondoInput] = useState(colorOk);
    const [mostrarLogin, setMostrarLogin] = useState("d-block");
    const [mostrarPreguntas, setMostrarPreguntas] = useState("d-none");
    const [usuario, setUsuario] = useState("");

    let existe = false; //Sirve para la funcion comprobar
    let welcome = '';
    const comprobar = user =>{
        let i = 0;
        while(i < arreglo.length){
            if(arreglo[i].CI != user)
                i++;
            else{
                if(arreglo[i].sexo === 'f')
                    welcome = "Bienvenida";
                else
                    welcome = "Bienvenido";
    
                swal({
                    text : welcome+" "+arreglo[i].nombre, 
                    buttons: "Comenzar ahora",
                    icon : "success"
                })
                existe = true;
                setMostrarLogin("d-none");
                setMostrarPreguntas("d-block");
                break;
            }
        }
        if(existe === false){
            swal({
                title : "Ops... " ,
                text : "Usuario no encontrado" ,
                buttons: "Intentar nuevamente",
                icon : "error"
            });
            setUsuario("");
            setFondoInput(colorError);
        }
    }

    const cedula = (e) => {
        e.preventDefault();
        if(e.target.value == '.' || e.target.value == '-'){
            setFondoInput(colorError);
        }
        setUsuario(e.target.value);
    }

    const estiloInput = {
        backgroundColor: fondoInput,
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid grey',
        textAlign: 'center'
    }
    return(
        <React.Fragment>
        <div style={{marginTop: "75%"}} className={mostrarLogin}>
            <div className="d-flex flex-column align-items-center">
                <span className="mb-2">Ingrese su cedula</span>
                <input style={estiloInput} type="number" onChange={cedula} value={usuario}/>
                <button type="button" className="btn btn-dark mt-2" onClick={()=>comprobar(usuario)}>Ingresar</button>
            </div>            
        </div>  
        <div style={{marginTop: "50%"}} className={mostrarPreguntas}>
            <Preguntas usuario={usuario} />
        </div>
        </React.Fragment>
    );
};
export default Examen;