import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"


export const Trabajo = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674686671/QWE/Titulo.trabajo-removebg-preview_jd9rxi.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">

                <Cartas_senas titulo="Idea" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689406/QWE/Trabajo_idea_xinmob.jpg" boton="❤️"/>
                <Cartas_senas titulo="Oficina" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689405/QWE/Trabajo_oficina_xbvcge.jpg" boton="❤️"/>
                <Cartas_senas titulo="Ocupado" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689406/QWE/Trabajo_ocupado_2_vtdiw4.jpg" boton="❤️"/>
            </div>

            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">
            <Cartas_senas titulo="Escribir" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689405/QWE/Trabajo_escribir_izvid7.jpg" boton="❤️"/>
            <Cartas_senas titulo="Ganar dinero" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689405/QWE/Trabajo_ganar.dinero_rr9m9q.jpg" boton="❤️"/>
            <Cartas_senas titulo="Firma" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689405/QWE/Trabajo_firma_tpglhu.jpg" boton="❤️"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
</div>)}

export default {Trabajo};