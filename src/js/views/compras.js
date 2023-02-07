import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"
import {Boton} from "../component/boton.js"


export const Compras = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674685980/QWE/Titulo_decompras-removebg-preview_ukdkx0.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">

                <Cartas_senas titulo="Comprar" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674604999/QWE/Compras_comprar_br4vus.jpg" boton="❤️"/>
                <Cartas_senas titulo="Galletas" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688199/QWE/Compras_galletas_n4ijcy.jpg" boton="❤️"/>
                <Cartas_senas titulo="Queso" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688199/QWE/Compras_Queso_wiryzz.jpg" boton="❤️"/>
            </div>

            <div className="d-flex justify-content-center container-fluid my-5 row row-cols-3">
            <Cartas_senas titulo="Helado" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688200/QWE/Compras_Helado_rtom1l.jpg" boton="❤️"/>
            <Cartas_senas titulo="Farmacia" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688200/QWE/Compras_farmacia_ft7jyt.jpg" boton="❤️"/>
            <Cartas_senas titulo="Feria" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674688200/QWE/Compras_feria_d1g0q6.jpg" boton="❤️"/>
             </div>
             <div className="d-flex justify-content-center container-fluid pb-5">
             <Boton ruta="/traductor"/>
             </div>
</div>)}

export default {Compras};