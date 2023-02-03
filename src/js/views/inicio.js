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

            <div className="row d-flex p-5">

                <div className="col-4">
                    <img src="https://images.unsplash.com/photo-1491439833076-514a03b24a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-fluid rounded-pill" />
                </div>

                <div className="col-8 m-9">
                    <h2 className="text-center lh-base"><strong>Bienvenido/a a T-enseño</strong></h2>
                    <p className="h6 lead text-center lh-base">Somos una plataforma que se dedica a la promoción y divulgación de la Lengua de Señas Chilena (LSCh). 
                        Aquí, nos enfocamos en brindar información y recursos audiovisuales para todos aquellos interesados en aprender y comprender
                        esta importante forma de comunicación. <br></br>
                        En nuestro sitio encontrarás una recopilación de contenido, videos y tutoriales para aprender la LSCh y apoyar a la comunidad sorda.</p>
                    <h4 className="lh-base">¡Únete a nosotros y comienza tu aprendizaje hoy!</h4>
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