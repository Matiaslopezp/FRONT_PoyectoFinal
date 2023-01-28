import React, { Component } from "react";
import "../../styles/footer.css"


export const Footer = () => (

  <footer className="text-white">
    <div className="footer">
      <div className="container" />
      <div className="row mb-0">
        <div className="col-10 mb-0 pl-5">
          <span>📍 Av. Andres Bello #333, Santiago </span>
        </div>

        <div className="col-2 pt-3 mb-0 ">
          <p>contacto@tenseno.cl</p>
          <p> +56 255 666 555 </p>
        </div>
      </div>

      <div className="row-2">
        <section className="" />

        <a className="btn btn-outline-light btn-floating m-4 " href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"
        ><i className="fab fa-twitter"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"
        ><i className="fab fa-instagram"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"
        ><i className="fab fa-whatsapp"></i
        ></a>
      </div>

      <div className="row-3">
        <p> COPYRIGHT © 2023. DERECHOS RESERVADOS . Sitio desarrollado por estudiantes de 4GeeksAcademy
        </p>
      </div>


    </div>
  </footer>

);
