import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#"> T-enseño </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Galeria Multimedia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Traductor Señas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Sobre nosotros</a>
        </li>
        
          
       
        
      </ul>
      <form class="d-flex" role="registrarse">
        
        <button class="btn btn-outline-info" type="submit">Registrarse</button>
      </form>
    </div>
  </div>
</nav>
	);
};
