import React from "react";
import '../style/Portafolio.css';

function Portafolio(){

    
    return(
        
            <div className="cajaUnoo">
                <div className="caji">
                        <div className="im">
                        <img src={require('../imagenes/imagenn.jpg')}/>
                        </div>
                    <div className="caja">
                        <h1>Maya Jurado</h1>
                        <p>Junior Junior</p>
                        <div className="iconuno">
                            <div className="icon">
                                <a href="https://github.com/majurado18">
                                    <img src={require('../imagenes/github.png')}/>
                                </a>
                                <a href="https://es.linkedin.com/">
                                <img src={require('../imagenes/linkedin.png')}/>
                                </a>
                                <a href="https://x.com/MAlexandraJV1?t=z63gEl-Sy-kUiSsaM-CMOw&s=09">
                                <img src={require('../imagenes/twitter.png')}/>
                                </a>
                                <a href="https://youtube.com/@mayajuradoveizan8699?si=MvDfl20YjojezU9C">
                                <img src={require('../imagenes/youtube.png')}/>
                                </a>
                                <a href="https://www.instagram.com/">
                                <img src={require('../imagenes/icons8-instagram-50.png')}/>
                                </a>
                                <a href="https://www.tiktok.com/es/">
                                <img src={require('../imagenes/tiktok.png')}/>
                                </a>
                            </div>
                        </div>
                    </div>      
                   
                </div>
                
                <div className="cajaDoss">
                    <div className="cajatres">
                        <p>2</p>
                        <p>Years of Wark</p>
                        <p>experience</p>
                    </div>
                    <div className="cajatres">
                        <p>3</p>
                        <p>Completed</p>
                        <p>proyects</p>
                    </div>
                    <div className="cajatres">
                        <p>1</p>
                        <p>computer science </p>
                        <p>student</p>
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
                            <img src={require('../imagenes/primer-par.jpg')}/>
                        </div>
                        <div className="imf">
                            <img src={require('../imagenes/primer-parc.jpg')}/>
                        </div>
                        <div className="imf">
                            <img src={require('../imagenes/segundo-par.jpg')}/>
                        </div>
                        <div className="imf">
                            <img src={require('../imagenes/segundo-par.jpg')}/>
                        </div>
                    </div>
                </div>       
            </div>
        
    );
}

export default Portafolio;