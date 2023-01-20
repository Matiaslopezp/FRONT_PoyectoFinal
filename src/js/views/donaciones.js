import React from "react";
import "../../styles/donaciones.css";
import { logo } from "../../img/t-enseño-logo.png";

export const Donaciones = () => (
  <>
    <div className="Jumbotron">
      <div className="container text-center mt-5">
        <h1 className="display-4"> </h1>
        <img src="t-enseño-logo.png" width={100} />
        <p>
          Somos una organización sin fines de lucro, con el único objetivo de
          brindar el apoyo a la comunidad de sordos de nuestro pais.
        </p>
        <p>
          Creemos que el apoyo entre los distintos sectores de la sociedad es
          fundamental para hacer del mundo un lugar mejor, por lo mismo,
          entregamos este espacio donde puedes encontrar la forma de comunicarte
          y aprender lengua de señas. Ya sea donando, difundiendo o
          participando, cada acción cuenta.
        </p>
      </div>
    </div>
    <div className="Datos col-4 row-1 d-flex">
      <ul className="container list-group ms-5 pt-5">
        <li className="list-group-item disabled" aria-disabled="true">
          Datos Bancarios
        </li>
        <li className="list-group-item">Banco : Banco de Chile</li>
        <li className="list-group-item">Cta. corriente : 99008837434422</li>
        <li className="list-group-item">Email: t.enseñoseñas@gmail.com</li>
        <li className="list-group-item">Rut : 88.937.423.5</li>
        <li className="list-group-item">Nombre : Te enseño señas .LTA</li>
      </ul>
    </div>
    <div className="foto ">
      <img src="https://todosdecidimos.org/wp-content/uploads/2022/11/donaciones-deducibles-de-impuestos.png" width="300px" />
<p>Todas las donaciones están protegidas por PAYPAL.</p>

    </div>
    
    <div className="Pago d-flex pb-4 position-absolute-bottom">
      <div className=" container col-4" >
      
      <input
        type="image"
        src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif"
        name="submit"
        alt="PayPal, la forma más segura y rápida de pagar en línea."
        border="0"
      ></input>
   </div>
    </div>
  </>
);