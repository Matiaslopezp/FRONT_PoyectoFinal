import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"


export const Calle = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674686422/QWE/Titulo.enlacalle-removebg-preview_x6flhl.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="Cajero" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674604999/QWE/Compras_comprar_br4vus.jpg" />
                <Cartas_senas titulo="Acalorado" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688879/QWE/Calle_acalorado_wkmkmb.jpg" />
                <Cartas_senas titulo="Basura" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688879/QWE/Calle_basura_ds8lua.jpg" />
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Bici" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688879/QWE/Calle_bici_fy9yzu.jpg" />
            <Cartas_senas titulo="Alameda" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688879/QWE/Calle_alameda_ku1iez.jpg" />
            <Cartas_senas titulo="Auto" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674689053/QWE/Calle_automovil_p5mdwr.jpg" />
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
</div>)}

export default {Calle};