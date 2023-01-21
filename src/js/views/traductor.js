import React from "react";

import {TraduccionC} from "../component/traduccionCarta.js"

import "../../styles/traductor.css"

export const Traductor = () => {
    return (
        <div className="todo">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
            <div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146772/QWE/inicio-removebg-preview_hs3ydg.png" />
            </div>

            <div className="carta1 ">

                <div className="portada">
                    <div>
                        <h1>Seleccione una opción: !!!!</h1>
                        <TraduccionC imagen=""/>
                        
                    </div>
                </div>
            </div>
            </div>
            );
};

export default {Traductor};