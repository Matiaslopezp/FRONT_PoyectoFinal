import React from "react";
import {Link} from "react-router-dom"

export const TraduccionC = (props) => {
  return ( 
    <div className="card m-3" style={{"width": "18rem"}}>
    <img src={props.imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">{props.parrafo}</p>
<<<<<<< HEAD
      <Link to={props.rutax}><button className="btn btn-primary">{props.boton}</button></Link>
=======
      <Link to={props.rutax}><button className="btn btn-primary position-absolute bottom-0 end-0">{props.boton}</button></Link>
>>>>>>> origin/feature/traductor
    </div>
  </div>
  );

};


export default TraduccionC;