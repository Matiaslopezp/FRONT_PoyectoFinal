import React from "react";
import { Link } from "react-router-dom";


export const CardHorizontal = (props) => {
    return (
        <div>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.upla.cl/noticias/wp-content/uploads/2014/06/se%C3%B1as8.jpg" className="img-fluid rounded-start" alt="párvulos aprendiendo lengua de señas" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo} </h5>
                            <p className="card-text">{props.descripcion} </p>
                            <Link to={props.ruta} > <button type="button" class="btn btn-warning">{props.boton} </button>  </Link>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
)}