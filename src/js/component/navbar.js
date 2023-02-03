import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { logo } from "../../img/t-enseñoManos.png";
import "../../styles/navbar.css"
import { Context } from "../store/appContext";

export const Navbar = () => {
const {store,actions}=useContext(Context)

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg " >
        <div className="cuerpo" style={{ height: "100%" }}>
          <div className="d-flex justify-content-center container-fluid" style={{ height: "100%" }} >

            <a className="navbar-brand text-light" href="#">
            </a>

            <img src="t-enseñoManos.png" width={95} />

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">

              <ul className="navbar-nav mb-lg-0 position-absolute bottom-0" style={{ marginLeft: "100px" }}>
                <li className="nav-item" style={{ marginLeft: "10px" }}>
                  <button className="btn btn-outline-link text-light m-1" type="submit"><img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674786113/QWE/navbar_inicio-removebg-preview_hwmfky.png" width={80} /></button>
                </li>

                <li className="nav-item" style={{ marginLeft: "10px" }}>
                  <button className="btn btn-outline-link text-light m-1" type="submit"><img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674786438/QWE/navbar_galeria-removebg-preview_mighg3.png" width={90} /></button>
                </li>

                <li className="nav-item" style={{ marginLeft: "10px" }}>
                  <button className="btn btn-outline-link text-light m-1" type="submit"><img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674786439/QWE/NAVBAR_TRADUCTOR_BUENO-removebg-preview_kwhdqu.png" width={110} /></button>
                </li>

                <li className="nav-item" style={{ marginLeft: "10px" }}>
                  <button className="btn btn-outline-link text-light m-1" type="submit"><img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674786438/QWE/NAVBAR_NOSOTROS-removebg-preview_qygelp.png" width={95} /></button>
                </li>

                <li className="nav-item" style={{ marginLeft: "10px" }}>
                  <button className="btn btn-outline-link text-light m-1" type="submit"><img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674786438/QWE/NAVBAR_DONACIONES-removebg-preview_xall1v.png" width={120} /></button>
                </li>
              </ul>


              <div className="d-flex justify-content-end container-fluid pr-5">
                <form className="d-flex" role="registrarse">

                  <button className="btn btn-outline-info" type="submit">Registrarse</button>
                </form>

                <div className="dropdown mr-5">

                  
                  
                  <div className="btn-group dropstart">
                  <button className="btn btn-outline-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ❤
                  </button>
                    
                    <ul className="dropdown-menu">
                    {store.favoritos.map((value,index)=>{
                      return (<li key={index} className="dopdown-item"> {value}<i class="fas fa-trash-alt"></i></li>)
                    })}
                    </ul>
                  </div>
                 
              
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
