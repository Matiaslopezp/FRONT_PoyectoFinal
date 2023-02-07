import React from "react";
import "../../styles/nosotros.css";

export const Nosotros = () => {
  return (<div className="Jumbotron_2">
    <div className="container text-center mt-5">
      <h1 className="display-4"> </h1>
      <div className="row p-6" style={{ "color": "white" }}>
        <h1>Quiénes somos</h1>
        <h5><strong> Somos un grupo de estudiantes de 4Geeks Academy Chile que está trabajando en un proyecto final para convertirnos en Desarrolladores Full Stack.
          Nuestro objetivo principal es ser un aporte real a la sociedad a través de la promoción y apoyo del aprendizaje de la Lengua de Señas Chilena (LSCh).
          Este sitio web es un recurso educativo sin fines de lucro donde se pueden encontrar diferentes recursos audiovisuales para aprender la LSCh. Ofrecemos 
          tutoriales en video, ejercicios interactivos, canciones y aplicaciones móviles para aprender la LSCh. Creemos que el aprendizaje de la LSCh es esencial 
          para garantizar la igualdad de oportunidades para las personas sordas y con discapacidad auditiva en nuestro país.</strong></h5>
      </div>
    </div>

    <div className="container col-8 mt-4">

      <div id="carouselExampleDark" className="carousel carousel-dark slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://images.unsplash.com/photo-1596920566829-d73adfc0fba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h2>Nuestra Misión</h2>
              <h5><strong>La misión de este sitio web en entregar contenido audiovisual de alta calidad, relacionado al aprendizaje de la Lengua de Señas Chilena
                con el fin de generar gran interés por aprender este tipo de lengua a todas las personas que quieran comunicarse a través de los gestos,
                ya sea con personas sordas o con cualquier persona que requiera de este recurso de comunicación.</strong></h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src=" https://images.unsplash.com/photo-1534614772-79994e5dac9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h2>Nuestra Visión</h2>
              <h5><strong>Convertirnos en un sitio web de referencia en la inclusión de personas con sordera y/o hipoacusia a través de la difusión
                del contenido referente a la lengua de señas que se puede encontrar en la internet. Contribuyendo a una sociedad más inclusiva
                y consciente de la diversidad lingüística y cultural.</strong></h5>
            </div>
          </div>



        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



    </div>


    <h2 className=" container text-center pt-4 m-4 "><strong>Nuestros Valores </strong></h2>


    <div className="d-flex container-fluid">



      <div className="col-2 text-center m-4">
        <img src="https://www.pngarts.com/files/7/Inclusion-PNG-Transparent-Image.png" width={"100px"} />
        <h4>Inclusión</h4>
        <h6> Promover la inclusión y la igualdad de oportunidades para las personas sordas y con discapacidad auditiva.</h6>
      </div>



      <div className="col-2 text-center m-4 ">
        <img src="https://cdn-icons-png.flaticon.com/512/2620/2620620.png" width={"100px"} />
        <h4>Accesibilidad</h4>
        <h6> Promover la inclusión y la igualdad de oportunidades para las personas sordas y con discapacidad auditiva.</h6>
      </div>


      <div className="col-2 text-center m-4">
        <img src="https://cdn-icons-png.flaticon.com/512/3937/3937040.png" width={"100px"} />
        <h4>Calidad</h4>
        <h6> Asegurando que el contenido este disponible y fácil de acceder para todos los usuarios.</h6>
      </div>


      <div className="col-2 text-center m-4 ">
        <img src="https://cdn-icons-png.flaticon.com/512/1189/1189132.png" width={"100px"} />
        <h4>Respeto</h4>
        <h6> Promoviendo el respeto y la valoración de la diversidad lingüística y cultural, fomentando una sociedad más consciente e inclusiva.</h6>
      </div>


      <div className="col-2 text-center m-4">
        <img src="https://cdn-icons-png.flaticon.com/512/3361/3361925.png" width={"100px"} />
        <h4>Responsabilidad</h4>
        <h6> Actuando con responsabilidad social y compromiso con la comunidad sorda, proporcionando información y recursos para apoyar su inclusión y comunicación efectiva.</h6>
      </div>
    </div>





  </div>







  )
}