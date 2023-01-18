import React from "react";
import Carousel_inicio from "../component/carousel_inicio.js";
import "../../styles/inicio.css"


export const Inicio = () => {
    return (
        <div className="todo">
            <div className="titulo">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674055906/QWE/logo_tense%C3%B1o-removebg-preview_uizjty.png" />
            </div>

            <div className="carta1 ">

                <div className="portada">
                    <div className="logo_carta">
                        <img src="https://res.cloudinary.com/dws1jugpv/image/upload/c_thumb,w_200,g_face/v1673904209/QWE/WhatsApp_Image_2023-01-14_at_11.05.18_AM_sty0d8.jpg" />
                    </div>
                </div>

                <div className="texto">
                    <div className="parrafo">
                        <p><strong>Traductor LSM:</strong></p>
                        <p>Una aplicación para que nosotros nos adaptemos a ELLOS!</p>
                    </div>
                </div>

            </div>

            <div>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dws1jugpv/image/upload/c_thumb,w_200,g_face/v1673904209/QWE/WhatsApp_Image_2023-01-14_at_11.05.18_AM_sty0d8.jpg" />
                </div>
            </div>
        </div>
    )
};

export default Inicio;