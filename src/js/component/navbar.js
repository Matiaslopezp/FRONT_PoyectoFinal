import React, {useContext} from "react";
import { Context } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../img/t-enseñoManos.png";

export const Navbar = () => {
  const {store,actions}= useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid" >
        <a className="navbar-brand text-light" href="#">

        </a>
        <img src="t-enseñoManos.png" width={95} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto m-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/libreria"><button className="btn btn-warning text-light m-1" type="submit">Librería digital</button></Link>

            </li>
            <li className="nav-item">
              <Link to="/traductor"><button className="btn btn-warning text-light m-1" type="submit">Traductor de Señas</button></Link>

            </li>
            <li className="nav-item">
              <Link to="/nosotros"><button className="btn btn-warning text-light m-1" type="submit">Sobre nosotros</button></Link>

            </li>
            <li className="nav-item">
              <Link to="/donaciones"><button className="btn btn-warning text-light m-1" type="submit">Donaciones</button></Link>

            </li>



          </ul>
          <form className="d-flex" role="registrarse">

            <button className="btn btn-outline-info" type="submit">Registrarse</button>
          </form>
          <div className="dropdown">
            <button className="btn btn-outline-danger dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">

              ❤
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
             {store.favoritos?.map((value, index)=>{
              return (<li key={index} className="dropdown-item">{value}</li>)
            })}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
