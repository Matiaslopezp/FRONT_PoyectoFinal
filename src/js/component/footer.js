import React, { Component } from "react";
import "../../styles/footer.css"


export const Footer = () => (

  <footer className="text-white text-center ">
    <div className="footer">
      <div className="container-fluid" />
      <div className="row mb-0">
        <div className="text-center pt-3">
          <span>📍 Av. Andres Bello #333, Santiago </span>
        </div>

        <div className=" text-center  ">
          <p>contacto@tenseño.cl</p>
          <p> +56255666555 </p>
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

      <div className="row-3 pb-2">
        <p> COPYRIGHT © 2023. DERECHOS RESERVADOS. Sitio desarrollado por estudiantes de 4GeeksAcademy
        </p>
      </div>


    </div>
  </footer>

);
