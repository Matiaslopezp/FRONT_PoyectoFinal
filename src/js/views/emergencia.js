import React from "react";

import { Cartas_senas } from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"

export const Emergencia = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674685283/QWE/Titulo_emergencia-removebg-preview_letxti.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="Llamar al telefono" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687448/QWE/Emergencia_llamar.telefonico_xljo0c.jpg" boton="❤️"/>
                <Cartas_senas titulo="Preocupado" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687448/QWE/Emergencia_preocupado_fmtt7y.jpg" boton="❤️"/>
                <Cartas_senas titulo="Alarma" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687448/QWE/Emergencia_alarma_kurkue.jpg" boton="❤️"/>
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Estado grave de salud" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687448/QWE/Emergencia_gravedesalud_j7vcyf.jpg" boton="❤️"/>
            <Cartas_senas titulo="Ambulancia" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687628/QWE/Emergencia_ambulancia_tvotbd.jpg" boton="❤️"/>
            <Cartas_senas titulo="Dolor" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674687628/QWE/Emergencia_dolor_y3nlin.jpg" boton="❤️"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
        </div>)
}

export default { Emergencia };