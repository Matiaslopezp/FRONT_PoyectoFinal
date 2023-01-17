import React from "react";
import { CardHorizontal } from "../component/card-libreria";



export const Libreria = ()=> {
    return ( 
    <div className="container ">
        <div>
            <h1>Librería digital</h1>
            <h2>Aquí encontrarás material audiovisual complementario, en donde podrás explorar diferentes formas de aprender  
                la Lengua de Señas Chilena:
            </h2>
        </div>

        <div className="row">
            <div className="col-6 d-flex">
                <CardHorizontal titulo="Mazapán en Lengua de Señas"
                                img="https://files.wapa.pe/Wapa/2019/02/17/se-as8-1550427868.jpg"
                                descripcion="Las clásicas canciones del grupo infantil Mazapán en lengua de señas chilena para que los más
                                            pequeños y pequeñas aprendan de manera entretenida a comunicarse a partir de los gestos."
                                boton="Ver"
                                ruta="/libreria/mazapan"/>
            </div>

            <div className="col-6 d-flex">
                <CardHorizontal titulo="Canciones de ayer y hoy"
                                img="https://static.theclinic.cl/media/2019/02/Captura-de-pantalla-2019-02-20-a-las-18.19.09.png"
                                descripcion="Aprende el poder de la interpretación a través de estas canciones y toda su emoción."
                                boton="Ver"
                                ruta="libreria/canciones" />
            </div>

            <div className="col-6 d-flex">
                <CardHorizontal titulo="Cápsulas educativas"
                                img="https://www.wazu.cl/site/wp-content/uploads/2022/04/interprete-ls.jpg"
                                descripcion="Si tu intención es ampliar tu vocabulario en Lengua de Señas Chilena estas cápsulas educativas creadas por la Ilustre Municipalidad de San Miguel son para ti."
                                boton="Ver"
                                ruta="libreria/capsulas"/>
            </div>

            <div className="col-6 d-flex">
                <CardHorizontal titulo="Aplicación móvil"
                                img="https://i.prcdn.co/img?regionKey=sSeACsuM8bLsljMew8hG%2FA%3D%3D"
                                descripcion="Descarga esta app en tu dispositivo móvil, practica en cualquier lugar que estes y sigue aprendiendo."
                                boton="Ver"
                                ruta="libreria/aplicacion"/>
            </div>
                     
        </div>

    </div>
)}


    
    