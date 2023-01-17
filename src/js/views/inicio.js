import React from "react";
import Carousel_inicio from "../component/carousel_inicio.js";
import "../../styles/inicio.css"


export const Inicio = () => {
    return (
        <div>
            <div className="titulo">
                <h1>t-Enseño: Traductor LSCh</h1>
            </div>
            <div className="carrusel">
                <h2>Carrusel</h2>
                <Carousel_inicio/>
            </div>
            <div className="logo">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/c_thumb,w_200,g_face/v1673904209/QWE/WhatsApp_Image_2023-01-14_at_11.05.18_AM_sty0d8.jpg" />
            </div>
        </div>
    )
};

export default Inicio;