import React from "react";
import style from "./Home.module.css";
import portada from "../../assets/images/portada.png"
import Galeria from "../Galeria/Galeria";
import logoW from '../../assets/carpeta/whatsapp.png'
import Card from "../Card/Card";

const Home = ()=> {

    return(
        <>
        <div className={style.conteiner}>

        <img src={portada} 
        alt="Portada de landing "
        className={style.portada} />

        <button className={style.button}>COMPRAR</button>
        
        </div>

        {/* <h1>Galeria</h1>
        <Galeria/> */}




<h1>Mira nuestros productos</h1>
<Card/>

        <h1>Contacto</h1>

        <h2>Comunicate con nosotros!!</h2>
        <a href="https://wa.me/5491151067036"><img src={logoW} alt="logo whatsapp" style={ { width : '40px'}} /></a>


        </>
    
        
    
    )
}


export default Home;