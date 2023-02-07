import React from "react";

import { Cartas_senas } from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"

export const Saludos = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674602366/QWE/Titulo_presentacion-removebg-preview_kdpku6.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">

                <Cartas_senas titulo="Buenas Tardes" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674597088/QWE/Saludar_buenas.tardes_jt4i0n.jpg" boton="❤️"/>
                <Cartas_senas titulo="Buenos dias" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598058/QWE/Saludar_buenos.dias_gwhb17.jpg" boton="❤️"/>
                <Cartas_senas titulo="Hola" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598504/QWE/Saludar_hola_hkkt8e.jpg" boton="❤️"/>
            </div>

            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">
            <Cartas_senas titulo="Chao" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598504/QWE/Saludar_chao_l2nk5k.jpg" boton="❤️"/>
            <Cartas_senas titulo="¿Cómo estas?" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598504/QWE/Saludar_como.estas_cgbbch.jpg" boton="❤️"/>
            <Cartas_senas titulo="¿Cual es tu apodo?" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674602189/QWE/Saludar_como.te.llamas_yagqi8.jpg" boton="❤️"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
        </div>)
}

export default { Saludos };