import React from "react";

export const Aplicacion = () => {
    return (
        <div className="container">
            <div className="row m-5">
            <div className="header-1">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
            </div>
                <h1>App móvil IncluSeñas</h1>
                <h3>Si tu intención es aprender y practicar la lengua de señas en cualquier parte que te encuentres, entonces esta App es para ti!  </h3>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <p className="border border-1 m-5 p-4">IncluSeñas es una aplicación móvil gratuita y sin fines de lucro que permite aprender lo básico de Lengua de Señas Argentina (LSA),
                        <strong><u>Lengua de Señas Chilena (LSCH)</u></strong>, Lengua de Señas Colombiana (LSC), Lengua de Signos Española (LSE) y Lengua de Señas
                        Mexicana (LSM) de forma sencilla y lúdica, buscando así ayudar a la inclusión de personas sordas en la sociedad. <br></br>
                        Como puedes ver, con IncluSeñas se abre un abanico de posibilidades para aprender distintas lenguas de señas latinoamericanas,
                        descargala ya y amplía tu vocabulario!</p>
        
                    <button className="btn btn-light m-5 col-5" type="button">
                        <a href="https://play.google.com/store/apps/details?id=app.aresan.miguel.inclusenas&hl=es&gl=US">
                        <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="descarga de google play" className="img-fluid" style={{"width": "16rem"}}/>
                        </a>
                    </button>
                </div>

                <div className="col-lg-6 col-12 p-4 d-flex">
                    <img src="https://play-lh.googleusercontent.com/fFRiI4RMR_tDOTsm1liea-YgIGGrC27_Ck4QRjqP3a0xlauIU3UyvGVgEipTkDvYEvU=w526-h296-rw" className="img-fluid m-2 " alt="img de la app"></img>
                    <img src="https://play-lh.googleusercontent.com/TpZqxJ-TdiUhFHZxnk8PV1G0vihoJajuCdU5PFtvMkpQq4GyQT4PafaESEdtAeHYaY4=w526-h296-rw" className="img-fluid m-2 " alt="img de la app"></img>
                    <img src="https://play-lh.googleusercontent.com/6GQwb52Wu6qidnrO37yFlHDeYCKHOjkzfMRi8GAWLfAUXGLfIv1FqrH9lc5T6JaRP-o=w526-h296-rw" className="img-fluid m-2 " alt="img de la app"></img>

                </div>
            </div>            

        </div>
    )
}
