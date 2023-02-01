import React from "react";
import Carousel_inicio from "../component/carousel_inicio.js";
import "../../styles/inicio.css"


export const Inicio = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
             <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146772/QWE/inicio-removebg-preview_hs3ydg.png" />
            </div>

            <div className="carta1 d-flex">

                <div className="portada">
                    <div className="logo_carta">
                        <img src="https://res.cloudinary.com/dws1jugpv/image/upload/c_thumb,w_200,g_face/v1673904209/QWE/WhatsApp_Image_2023-01-14_at_11.05.18_AM_sty0d8.jpg" />
                    </div>
                </div>

                <div className="texto">
                    <div className="parrafo">
                        <h2><strong>Bienvenid@ a T-enseño</strong></h2>
                        <p>Somos una plataforma dedicada a la divulgación y promoción de la lengua de señas chilena. 
                            Nuestro objetivo es educar y sensibilizar a la sociedad sobre la importancia de esta lengua,
                            brindar recursos y herramientas útiles para aquellos interesados en aprender más sobre ella. 
                            En esta página encontrarás el contenido suficiente como para integrarte poco a poco en el 
                            aprendizaje y el uso de la lengua de señas chilena, así como videos y tutoriales para aprender
                            a comunicarte con esta lengua. 
                            Únete a nosotros en esta misión para difundir la lengua de señas chilena y apoyar a la comunidad sorda. 
                            ¡Explora nuestro sitio y comienza tu aprendizaje hoy! </p>
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