import React from "react";

export const Nosotros = () => {
    return (
        <div className="container">
            <div className="row">
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

            <div className="row">
                <div className="col-4 border border-3 rounded">
                    <h4 className="text-center">MISIÓN</h4>
                    <p> La misión de este sitio web en entregar contenido relacionado al aprendizaje de la Lengua de Señas Chilena
                        con la finalidad de generar interés por aprender a comunicarse a través de los gestos con personas sordas y con cualquier persona 
                        que requiera de este recurso de comunicación.</p> 
                </div>

                <div className="col-4 border border-3 rounded">
                    <h4 className="text-center">VISIÓN</h4>
                    <p> Convertirnos en un sitio web de referencia en la inclusión de personas con sordera y/o hipoacusia a través de la difusión 
                        del contenido referente a la lengua de señas que se puede encontrar en la internet. </p> 
                </div>

                <div className="col-4 border border-3 rounded">
                    <h4 className="text-center">VALORES </h4>
                    <p className="text-center"> Empatía  <br></br>
                        Respeto <br></br>
                        Compromiso <br></br>
                        inclusión <br></br>
                        Diversidad</p> 
                </div>
            </div>
           

            



        </div>
    )
}