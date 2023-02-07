import React from "react";
import {Link} from "react-router-dom"

const Css={
"width":"18rem",
"color":"green",
"borderWidth":"5px",
"borderColor":"#8cd0e3",
"backgroundColor":"none"
}

export const Cartas_lsch = (props) => {
  return ( 
    <div class="card" style= {{"width": "18rem" }}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> 
  
  );

};


export default Cartas_lsch;