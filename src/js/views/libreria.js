import React from "react";
import { CardHorizontal } from "../component/card-libreria";



export const Libreria = ()=> {
    return ( 
    <div className="container ">
        <h1>Librería digital</h1>
        <h2>Aquí encontrarás material audiovisual complementario, en donde podrás explorar diferentes formas de aprender  
            la Lengua de Señas Chilena:
        </h2>
        <div className="row-6">
            <CardHorizontal titulo="Mazapán en Lengua de Señas"
                            descripcion="Las clásicas canciones del grupo infantil Mazapán en lengua de señas chilena para que los más
                                        pequeños y pequeñas aprendan de manera entretenida a comunicarse a partir de los gestos."
                            boton="Ver"
                            ruta="/libreria/mazapan"/>
            
            <CardHorizontal titulo="Canciones de ayer y hoy"
                            descripcion="Aprende el poder de la interpretación a través de estas canciones y toda su emoción."
                            boton="Ver"
                            ruta="libreria/canciones" />
            
            <CardHorizontal titulo="Cápsulas educativas"
                            descripcion="Si tu intención es ampliar tu vocabulario en Lengua de Señas Chilena estas cápsulas educativas creadas por la Ilustre Municipalidad de San Miguel son para ti."
                            boton="Ver"
                            ruta="libreria/capsulas"/>
            
            <CardHorizontal titulo="Aplicación móvil"
                            descripcion="Descarga esta app en tu dispositivo móvil, practica en cualquier lugar que estes y sigue aprendiendo."
                            boton="Ver"
                            ruta="libreria/aplicacion"/>

        </div>

    </div>
)}


    
    