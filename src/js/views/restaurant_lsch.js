import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"

import {Cartas_lsch} from "../component/carta_lsch"

export const Restaurant = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674601994/QWE/Titulo_restaurant-removebg-preview_1_umhjfp.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="Menu" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674600508/QWE/Restaurant_menu_efpava.jpg" />
                <Cartas_senas titulo="Mozo" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674600618/QWE/Restaurant_mozo_yycc0g.jpg" />
                <Cartas_senas titulo="Baño" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674603233/QWE/Viaje_bano_rzp1tc.jpg" />
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Chao" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598504/QWE/Saludar_chao_l2nk5k.jpg" />
            <Cartas_senas titulo="¿Cómo estas?" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674598504/QWE/Saludar_como.estas_cgbbch.jpg" />
            <Cartas_lsch/>
             </div>
</div>)}

export default {Restaurant};