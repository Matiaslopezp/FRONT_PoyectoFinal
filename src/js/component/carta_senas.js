import React, {useContext} from "react";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom"

const Css={
"width":"18rem",
"color":"green",
"borderWidth":"5px",
"borderColor":"#8cd0e3",
"backgroundColor":"none"
}

export const Cartas_senas = (props) => {
  const{actions}=useContext(Context)
  return ( 
    <div className="card m-3 p-3" style={Css}>
    <img src={props.imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">{props.parrafo}</p>
      <Link to={props.ruta}><button className="btn btn-warning position-absolute bottom-0 start-50 translate-middle-x mb-2" onClick={()=>
      actions.addFav(props.titulo)  
    }>{props.boton}</button></Link>
      
      
    </div>
  </div>
  );

};


export default Cartas_senas;