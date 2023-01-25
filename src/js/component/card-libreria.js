import React from "react";
import { Link } from "react-router-dom";


export const CardHorizontal = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{"max-width": "1040px", "height": "230px"}} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.img} className="img-fluid m-2 p-3" alt="imagen de referencia" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo} </h5>
                            <p className="card-text">{props.descripcion} </p>
                            <Link to={props.ruta} > <button type="button" className="btn btn-warning mx-auto ">{props.boton} </button>  </Link>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
)}