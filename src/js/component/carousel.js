import React from "react";


export const CarouselLibreria = () => {

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://www.upla.cl/noticias/wp-content/uploads/2014/06/se%C3%B1as8.jpg" className="d-block w-100" alt="párvulos aprendiendo lengua de señas" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Los más pequeños también pueden aprender</h5>
                    <p>Las clásicas canciones del grupo infantil Mazapán en lengua de señas chilena</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://static.theclinic.cl/media/2019/02/Captura-de-pantalla-2019-02-20-a-las-18.19.09.png" className="d-block w-100" alt="adulto interpretando canción"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Canciones de ayer y hoy</h5>
                        <p>Aprende el poder de la interpretación a través de estas canciones</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src="https://cindercapacitacion.com/wp-content/uploads/2021/10/close-up-person-communicating-through-sign-language-scaled.jpg" className="d-block w-100" alt="adulto practicando señas"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cápsulas educativas</h5>
                        <p>Revisa estas cápsulas si tu intención es ampliar tu vocabulario en Lengua de Señas Chilena</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src="https://trabajarporelmundo.org/wp-content/uploads/2021/08/Captura-de-pantalla-2021-08-10-a-las-16.40.44.png.webp" className="d-block w-100" alt="app incluseñas para smartphones"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Aplicación móvil</h5>
                        <p>Descarga esta app en tu dispositivo móvil y practica en cualquier lugar que estes</p>
                    </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
}