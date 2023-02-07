import React from "react";
import {Link} from "react-router-dom"

export const Boton = (props) => {
  return ( <div >
  
      <Link to={props.ruta}><button className="btn btn-primary">Atrás</button></Link>
 
  </div>
  );

};


export default Boton;