import React from 'react';
import phone from '../img/phone_grande.svg';
import wpp from '../img/wpp_grande.svg';

function Footer(){
    const style = {
        width: "25px",
        height: "25px"
    }
    const linea = {
        height: "2px",
        width: "85%",
        backgroundColor: "grey",
        marginTop: "5px"
    }
    return(
        <div className="footer">
            <div className="d-flex justify-content-around align-items-center mt-3">
                <div className="d-flex">
                    <img style={style} src={phone}/>
                    <span className="ml-2">098361013</span>
                </div>
                
                <div className="d-flex">
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