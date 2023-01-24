import React from "react";

import { Cartas_senas } from "../component/carta_senas.js"


export const Viaje = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <div className="header-3">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674600912/QWE/Titulo_de.viaje-removebg-preview_si8qje.png" />
            </div>
            <div className="d-flex justify-content-center container-fluid my-5">

                <Cartas_senas titulo="Maleta" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674600034/QWE/Viaje_maleta_dqyuau.jpg" />
                <Cartas_senas titulo="Baño" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674603233/QWE/Viaje_bano_rzp1tc.jpg" />
                <Cartas_senas titulo="Museo" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674601569/QWE/Viaje_museo_aiplkp.jpg" />
            </div>

            <div className="d-flex justify-content-center container-fluid my-5">
            <Cartas_senas titulo="Pasaporte" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674602598/QWE/Viaje_pasaporte_ubaq3o.jpg" />
            <Cartas_senas titulo="Pasear" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674602717/QWE/Viaje_pasear_jq3ztu.jpg" />.
            <Cartas_senas titulo="Metro" imagen="https://res.cloudinary.com/dws1jugpv/image/upload/v1674603022/QWE/Viaje_metro_uwanne.jpg" />
             </div>
        </div>)
}

export default { Viaje };