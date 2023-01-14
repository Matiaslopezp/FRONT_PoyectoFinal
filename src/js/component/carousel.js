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
                    <h5></h5>
                    <p>Las clásicas canciones del grupo infantil Mazapán en lengua de señas chilena para que los más pequeños aprendan a comunicarse con personas sordas.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la segunda diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la tercera diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Etiqueta de la cuarta  diapositiva</h5>
                        <p>Algún contenido placeholder representativo para la cuarta  diapositiva.</p>
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