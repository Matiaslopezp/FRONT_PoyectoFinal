import React from "react";
import "../../styles/nosotros.css";

export const Nosotros = () => {
    return (   <>
        <div className="Jumbotron_2">
          <div className="container text-center mt-5">
            <h1 className="display-4"> </h1>
             <div className="row p-6">
                <h1>Quiénes somos</h1>
                <p> Somos un grupo de estudiantes de 4Geeks Academy Chile que se encuentra trabajando en el proyecto final para convertirnos en Desarrolles Full Stack. <br></br>
                    Nuestro principal objetivo es ser un aporte real a la sociedad mediante la promoción y apoyo del aprendizaje de la Lengua de Señas Chilena (LSCh), 
                    siendo este sitio web un lugar en donde se puedan encontrar diferentes recursos audiovisuales para todas aquellas personas que se interesen en 
                    aprender este tipo de comunicación. <br></br>
                    Nuestra página web es un recurso educativo sin fines de lucro para aprender la lengua de señas chilena. Ofrecemos una biblioteca en donde se pueden encontrar
                    tutoriales en video, ejercicios interactivos, canciones y aplicaciones móviles que permiten el acceso a este interesante mundo de la lengua de señas. <br></br>
                    Creemos que el aprendizaje de la LSCh es esencial para garantizar la igualdad de oportunidades para las personas sordas y con discapacidad auditiva en nuestro país. 
                    
                </p>
        </div>
 </div>

 

 <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1622905810769-1b42d41f92ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" class="d-block w-90 h-90" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Nuestra Misíon</h5>
        <p>La misión de este sitio web en entregar contenido audiovisual de alta calidad, relacionado al aprendizaje de la Lengua de Señas Chilena
             con el fin de generar gran interés por aprender este tipo de lengua a todas las personas que quieran comunicarse a través de los gestos,
            ya sea con personas sordas o con cualquier persona que requiera de este recurso de comunicación.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src=" https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Visión</h5>
        <p>Convertirnos en un sitio web de referencia en la inclusión de personas con sordera y/o hipoacusia a través de la difusión 
            del contenido referente a la lengua de señas que se puede encontrar en la internet. Contribuyendo a una sociedad más inclusiva
            y consciente de la diversidad lingüística y cultural.</p>
      </div>
    </div>
    <div class="carousel-item text-align-center">
      <img src="https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1819&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




















































                <div className="col-4 border border-3 rounded">
                    <h4 className="text-center">VALORES </h4>
                    <p className="text-start"> 
                        <ul>
                        <li><em>Inclusión:</em> promover la inclusión y la igualdad de oportunidades para las personas sordas y con discapacidad auditiva.</li>
                        <li><em>Accesibilidad:</em> asegurando que el contenido está disponible y fácil de acceder para todos los usuarios. </li>
                        <li><em>Calidad:</em> proporcionando material educativo de alta calidad, actualizado y preciso para el aprendizaje y la comprensión de la lengua de señas chilena.</li>
                        <li><em>Respeto:</em> promoviendo el respeto y la valoración de la diversidad lingüística y cultural, fomentando una sociedad más consciente e inclusiva.</li>
                        <li><em>Responsabilidad:</em> actuando con responsabilidad social y compromiso con la comunidad sorda, proporcionando información y recursos para apoyar su inclusión y comunicación efectiva.</li>
                        </ul>
                    </p> 
                </div>
            </div>
           

            



        
        </>
    )
}