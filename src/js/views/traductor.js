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
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>

            <div className="carta1 ">

                <div className="portada">
                    <div>
                        <div className="d-flex justify-content-center container-fluid my-5">
                        <h1>Seleccione una opción</h1>
                        </div>
                        
                        <div className="row row-cols-3 d-flex justify-content-center container-fluid" > 
                        <TraduccionC imagen="https://watv.org/wp-content/uploads/2021/01/opportunities.jpg" boton="Entrar" titulo="Restaurant" rutax="/restaurant"/>
                        <TraduccionC imagen="https://fotografias.lasexta.com/clipping/cmsimages02/2022/07/14/60D6D0AF-0932-4A0F-B62E-ED64C900E941/como-activar-alertas-emergencia-inalambricas-movil-android_98.jpg?crop=1300,731,x0,y10&width=1900&height=1069&optimize=high&format=webply" boton="Entrar" titulo="Emergencia"/>
                        <TraduccionC imagen="https://estaticos-cdn.prensaiberica.es/clip/5b6f17e6-ef58-4de3-a3c0-58655fd48d45_16-9-aspect-ratio_default_0.jpg" boton="Entrar" titulo="En la casa"/>
                        </div>
                
                        <div className="row row-cols-3 justify-content-center container-fluid"> 
                        <TraduccionC imagen="https://metodosparaligar.com/wp-content/uploads/2015/04/conocer-gente2.jpg" boton="Entrar" titulo="Presentación" rutax="/saludos"/>
                        <TraduccionC imagen="https://previews.123rf.com/images/torwai/torwai1904/torwai190400296/120403009-la-mujer-est%C3%A1-en-el-supermercado-comprando-comida-.jpg" boton="Entrar" titulo="De compras" rutax="/compras"/>
                        <TraduccionC imagen="https://img.freepik.com/foto-gratis/mujeres-turistas-mano-tienen-feliz-mapa-viaje_1150-7411.jpg?w=1380&t=st=1674492503~exp=1674493103~hmac=fccf1ffc2d740bb73ee51f5b025114969b71aa44948e9771dc09cae05a8a0849" boton="Entrar" titulo="De viaje" rutax="/viaje"/>
                        </div>

                        <div className="row row-cols-3 justify-content-center container-fluid"> 
                        <TraduccionC imagen="https://images.hola.com/imagenes/estar-bien/20190527142628/descubre-si-eres-persona-reflexiva-cs/0-683-360/xxx-t.jpg?tx=w_1200" boton="Entrar" titulo="Otros"/>
                        <TraduccionC imagen="https://media.licdn.com/dms/image/D4D12AQHza4Lriwldug/article-cover_image-shrink_720_1280/0/1664396275461?e=2147483647&v=beta&t=yZDW_0FPfpV5AoIfdKgeobXkacLwFdBP3IryUWaMxtg" boton="Entrar" titulo="En la calle"/>
                        <TraduccionC imagen="https://imagenes.elpais.com/resizer/7EHLyfJUijljrNu-2apvQoTjD-8=/980x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/M6RLT2HERKTKLQ44BZW2P3B23A.jpg" boton="Entrar" titulo="Trabajo"/>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            );
};

export default {Traductor};