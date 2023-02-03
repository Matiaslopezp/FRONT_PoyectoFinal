import React from "react";
import { CardHorizontal } from "../component/card-libreria";
import "../../styles/libreria.css"




export const Libreria = () => {
    return (
        <div className="todo">

            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674147077/QWE/libreria_digital-removebg-preview_btfzl8.png" />
            </div>

            <div className="row">
                <div className="m-5">
                    <h2>Aquí encontrarás material audiovisual complementario, en donde podrás explorar diferentes formas de aprender
                        la Lengua de Señas Chilena:
                    </h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-12 d-flex p-3">
                        <CardHorizontal titulo="Mazapán en Lengua de Señas"
                            img="https://files.wapa.pe/Wapa/2019/02/17/se-as8-1550427868.jpg"
                            descripcion="Las clásicas canciones del grupo infantil Mazapán en lengua de señas chilena para los más
                                         pequeños también aprendan."
                            boton="Ver"
                            ruta="/mazapan" />
                    </div>

                    <div className="col-lg-6 col-12 d-flex p-3">
                        <CardHorizontal titulo="Canciones de ayer y hoy"
                            img="https://www.elmostrador.cl/media/2019/02/Macarena-Nieto-700x450.png"
                            descripcion="Aprende el poder de la interpretación a través de estas canciones y toda su emoción."
                            boton="Ver"
                            ruta="/canciones" />
                    </div>

                    <div className="col-lg-6 col-12 d-flex p-3">
                        <CardHorizontal titulo="Cápsulas educativas"
                            img="https://www.wazu.cl/site/wp-content/uploads/2022/04/interprete-ls.jpg"
                            descripcion="Si tu intención es ampliar tu vocabulario en Lengua de Señas Chilena estas cápsulas educativas son para ti."
                            boton="Ver"
                            ruta="/capsulas" />
                    </div>

                    <div className="col-lg-6 col-12 d-flex p-3">
                        <CardHorizontal titulo="Aplicación móvil"
                            img="https://i.prcdn.co/img?regionKey=sSeACsuM8bLsljMew8hG%2FA%3D%3D"
                            descripcion="Descarga esta app en tu dispositivo móvil, practica en cualquier lugar que estes y sigue aprendiendo."
                            boton="Ver"
                            ruta="/aplicacion" />
                    </div>

                </div>

            </div>
        </div>
    )
}



