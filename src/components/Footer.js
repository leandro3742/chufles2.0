import React from 'react';
// import phone from '../img/phone_grande.svg';
import phone from '../img/telefono.png';
import wpp from '../img/wpp.png';

function Footer(){
    const style = {
        width: "30px",
        height: "30px"
    }
    const linea = {
        height: "2px",
        width: "85%",
        backgroundColor: "grey",
        marginTop: "5px"
    }
    
    return(
        <div style={{marginTop: "50px"}} className="footer">
            <div className="d-flex justify-content-around align-items-center mt-3">
                <div className="d-flex align-items-center">
                    <img style={style} src={phone}/>
                    <span className="ml-2">098361013</span>
                </div>
                
                <div className="d-flex align-items-center">
                    <img style={style} src={wpp}/>
                    <span className="ml-2">098361013</span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div style={linea}></div>
            </div>

        </div>
    )
}
export default Footer;