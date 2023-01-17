import React from "react";
import { Link } from "react-router-dom";
import {logo } from "../../img/t-enseñoManos.png";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid" >
    <a class="navbar-brand text-light" href="#"> 
        
    </a>
    <img src="t-enseñoManos.png" width={95} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-4" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto m-2 mb-lg-0">
        <li class="nav-item">
        <button class="btn btn-warning text-light m-1" type="submit">Galeria Multimedia</button>
          
        </li>
        <li class="nav-item">
        <button class="btn btn-warning text-light m-1" type="submit">Traductor de Señas</button>
         
        </li>
        <li class="nav-item">
        <button class="btn btn-warning text-light m-1" type="submit">Sobre nosotros</button>
       
        </li>
        <li class="nav-item">
        <button class="btn btn-warning text-light m-1" type="submit">Donaciones</button>
          
        </li>
        
                
        
      </ul>
      <form class="d-flex" role="registrarse">
        
        <button class="btn btn-outline-info" type="submit">Registrarse</button>
      </form>
      <div class="dropdown">
  <button class="btn btn-outline-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     ❤
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#"></a></li>
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#"></a></li>
    
  </ul>
</div>
    </div>
  </div>
</nav>
	);
};
