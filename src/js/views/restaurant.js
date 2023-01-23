import React from "react";
import {Cartas_senas} from "../component/carta_senas.js"



export const Restaurant = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>
            <Cartas_senas titulo="Saludar" imagen="https://www.brainlang.com/wp-content/uploads/2020/09/como-saludar-en-ingles-2.jpg" boton="Entrar" ruta="/saludos"/>
</div>)}

export default {Restaurant};