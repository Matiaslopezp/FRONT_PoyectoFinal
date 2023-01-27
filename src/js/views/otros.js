import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"


export const Otros = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674686193/QWE/Titulo.otros-removebg-preview_crsrts.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="No entiendo" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_no.entiendo_p9ll9b.jpg" boton="❤️"/>
                <Cartas_senas titulo="Chile" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_Chile_poqxtg.jpg" boton="❤️"/>
                <Cartas_senas titulo="Bostezar" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_bostezar_l2lff5.jpg" boton="❤️"/>
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Café" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_cafe_xldph1.jpg" boton="❤️"/>
            <Cartas_senas titulo="Gato" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_gato_n635ud.jpg" boton="❤️"/>
            <Cartas_senas titulo="Amigo" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688609/QWE/Otros_amigo_xzufd0.jpg" boton="❤️"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
             
</div>)}

export default {Otros};