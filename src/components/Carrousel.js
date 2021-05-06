import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import img1 from '../img/grande(1).jpg';
import img2 from '../img/grande(2).jpg';
import img3 from '../img/grande(4).jpg';
import img4 from '../img/grande(mercadopago).jpg';
import img5 from '../img/grande(nuevo).jpg';
function Carrousel() {
    
    const total = {
        width : "100%"
    };

    const parcial = {
        width : "75%",
        marginLeft: "15%"
    };

    let tamanioPantalla = window.screen.width;   
    const [tamanio, setTamanio] = useState(total);

    function fijarTamanio(){
        if(tamanioPantalla < 768){
            setTamanio(total);
        }
        else{
            setTamanio(parcial);
        }   
    };

    useEffect( ()=>{
        fijarTamanio();
    },[])
    
    return (
        <div id="carouselExampleControls" style={tamanio} className="carousel slide bg-warning rounded mt-4 bg-secondary " data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 rounded" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100 rounded" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 rounded" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100 rounded" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-100 rounded" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only bg-dark">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
export default Carrousel;