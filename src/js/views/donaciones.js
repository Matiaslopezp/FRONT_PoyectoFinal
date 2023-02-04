import React from "react";
import "../../styles/donaciones.css";
import { logo } from "../../img/t-enseño-logo.png";

export const Donaciones = () => (
  <>
    <div className="Jumbotron">
      <div className="container text-center m-5">
        <h1 className="display-4"> </h1>
        <img src="t-enseño-logo.png" width={150} />
        <h5>
          Somos una organización sin fines de lucro, con el único objetivo de
          brindar el apoyo a la comunidad de sordos de nuestro pais.
        </h5>
        <h5>
          Creemos que el apoyo entre los distintos sectores de la sociedad es
          fundamental para hacer del mundo un lugar mejor, por lo mismo,
          entregamos este espacio donde puedes encontrar la forma de comunicarte
          y aprender lengua de señas. Ya sea donando, difundiendo y utilizando nuestra plataforma, cada acción cuenta.
        </h5>
      </div>
    </div>


    <div className=" col-auto text-center pt-5">
    


      <img src="https://res.cloudinary.com/djgongdnn/image/upload/v1675480085/proyecto%20final/Datos_Bancarios_3_-removebg-preview_uylctr.png" />
    </div >
    <div className="text-center m-5">
      <p>Todas las donaciones están protegidas por PAYPAL.</p>
      <input
        type="image"
        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif"
        name="submit"
        alt="PayPal, la forma más segura y rápida de pagar en línea."
        border="0"
      ></input>
    </div>









  </>
);
