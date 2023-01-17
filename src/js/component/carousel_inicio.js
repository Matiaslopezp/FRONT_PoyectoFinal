import React from "react";
import "../../styles/inicio.css"

export const Carousel_inicio = () => {
  return (<div>

    <h1>está bueno</h1>
    <div id="carouselExampleSlidesOnly" className="carousel slide h-15" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg.webp" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.shutterstock.com/image-photo/hand-touching-virtual-world-connection-600w-1750972730.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </div>)

}

export default Carousel_inicio;