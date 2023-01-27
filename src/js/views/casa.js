import React from "react";

import { Cartas_senas } from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"

export const Casa = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674685829/QWE/Titulo_enlacasa-removebg-preview_somd2h.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="Estudiar" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_estudiar_bl9xoy.jpg" />
                <Cartas_senas titulo="Baño" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_ba%C3%B1o_yybdy2.jpg" />
                <Cartas_senas titulo="Barrer" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_Barrer_dovusy.jpg" />
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Bañarse" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_ba%C3%B1arse_oe3d0u.jpg" />
            <Cartas_senas titulo="Dormir" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_domir_mr0eta.jpg" />
            <Cartas_senas titulo="Pieza" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687805/QWE/Casa_pieza_ehebb4.jpg" />
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
        </div>)
}

export default { Casa };