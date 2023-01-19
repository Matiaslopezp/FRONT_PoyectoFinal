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
                    <p> La misión de este sitio web en entregar contenido audiovisual de alta calidad, relacionado al aprendizaje de la Lengua de Señas Chilena
                        con el fin de generar gran interés por aprender este tipo de lengua a todas las personas que quieran comunicarse a través de los gestos,
                        ya sea con personas sordas o con cualquier persona que requiera de este recurso de comunicación.
                    </p> 
                </div>

                <div className="col-4 border border-3 rounded">
                    <h4 className="text-center">VISIÓN</h4>
                    <p> Convertirnos en un sitio web de referencia en la inclusión de personas con sordera y/o hipoacusia a través de la difusión 
                        del contenido referente a la lengua de señas que se puede encontrar en la internet. Contribuyendo a una sociedad más inclusiva
                        y consciente de la diversidad lingüística y cultural.
                    </p> 
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
           

            



        </div>
    )
}