import React from 'react';
import Carrousel from '../components/Carrousel';

function Nosotros() {
    const styleContainer = {
        marginTop: "100px"
    }
  return (
    <div>
                <div style={styleContainer}>
            <Carrousel />
        </div>
        
        <div className="d-flex justify-content-center">
            <div className="row col-11 justify-content-center">
                <div className="col-12 col-lg-5 d-flex flex-column align-items-center mt-4 ml-1 mr-1">
                    <h5 className="text-danger" >Quienes somos?</h5> 
                    <span className="text-center text-secondary">Chufle's es una escuela de choferes con 27 años de enseñanza.
                    Contamos con vehículos con toda la garantía y de ultima generación.
                    Nos encontramos en la ciudad de Canelones, y llegamos hasta Santa Rosa,
                    Cerrillos, Progreso, San Antonio.</span>
                </div>

                <div className="col-12 col-lg-6 d-flex flex-column align-items-center mt-4 ml-1 mr-1">
                    <h5 className="text-danger" >Nuestra meta</h5> 
                    <span className="text-center text-secondary">La meta es formar un conductor seguro y responsable de las 
                    decisiones que  tendrá que tomar, con un buen conocimiento del vehículo y lo mismo en cuanto a 
                    reglamentación (claridad ante sus derechos y deberes), siempre desde el marco de prevención de accidentes.
                    </span>
                </div>

                <div className="col-12 col-lg-6 d-flex flex-column align-items-center mt-4 ml-2 mr-2">
                    <h5 className="text-danger" >Nuestra meta</h5> 
                    <span className="d-flex justify-content-center text-secondary">
                        <div className="d-flex flex-column align-items-start text-left">
                        -Prácticas (Auto - Moto) <br/>
                        -Aumento de categoría <br/>
                        -Clases teóricas (Auto - Moto) <br/> 
                        </div>
                    </span>
                    <span className="text-center text-secondary mt-2">
                    Brindamos a nuestros clientes y alumnos las herramientas,
                    información y práctica para que lleguen a ser conductores seguros, responsables en la sociedad,
                    a conducir con madurez, criterio y que sean cuidadosos con la vida suya y de los demás.<br/>
                    ANTE TODO RESPETO POR LA VIDA.
                    </span>
                </div>
            </div>
        </div>
        {/* <Footer /> */}

    </div>
  );
}

export default Nosotros;