import React from "react";
import '../style/Portafolio.css';

function Portafolio(){
    const Portafolio = () => {
        const estilo = {
          fontFamily: 'Arial, sans-serif', 
          fontSize: '16px',
        };
    }
    return(
        <div className="estilo">
            <div className="cajaUnoo">
            <div className="caji">
                <h1>
                    <div className="im">
                    <img src={require('../imagenes/imagenn.jpg')}/>
                    </div>
                    Maya Jurado
                </h1>   
                <div className="cajatres">
                    <p>Junior Junior</p>
                </div>
            </div>
            <div className="iconuno">
                <div className="icon">
                    <a href="https://desktop.github.com/">
                        <img src={require('../imagenes/github.png')}/>
                    </a>
                    <a href="https://es.linkedin.com/">
                    <img src={require('../imagenes/linkedin.png')}/>
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                    <img src={require('../imagenes/twitter.png')}/>
                    </a>
                    <a href="https://www.google.com/search?q=youtube&oq=yo&aqs=chrome.0.35i39i355i512i650j46i39i199i465i512i650j69i57j0i67i433i512i650j0i20i131i263i433i512j69i60j69i61j69i60.938j0j7&sourceid=chrome&ie=UTF-8">
                    <img src={require('../imagenes/youtube.png')}/>
                    </a>
                </div>
            </div>
            <div className="cajaDoss">
                <div className="cajatres">
                    <p>7</p>
                    <p>Years of Wark</p>
                    <p>experience</p>
                </div>
                <div className="cajatres">
                    <p>50+</p>
                    <p>Completed</p>
                    <p>proyects</p>
                </div>
                <div className="cajatres">
                    <p>20+</p>
                    <p>Satistied</p>
                    <p>custamere</p>
                </div>
            </div>
            <div className="button">
                <div className="download" >
                    <button>Download </button>
                </div>
                <div className="medio">
                </div>
                <div className="Contac">
                    <button> Contact me</button>
                </div>
                
            </div>
            <div class="skills">
                <div class="port">
                    <p>Portafolio</p>
                </div>
                <div class="ski">
                    <p>Skills</p>
                </div>
            </div>
            <div class="cajaCuatroo">
                <div className="imf">    
                    <div className="imf">
                        <img src={require('../imagenes/na.jpg')}/>
                    </div>
                    <div className="imf">
                        <img src={require('../imagenes/na.jpg')}/>
                    </div>
                    <div className="imf">
                        <img src={require('../imagenes/na.jpg')}/>
                    </div>
                    <div className="imf">
                        <img src={require('../imagenes/na.jpg')}/>
                    </div>
                </div>
            </div>       
        </div>
        </div>
        
    );
}

export default Portafolio;