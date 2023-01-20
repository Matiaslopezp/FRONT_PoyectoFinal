import React from "react";

export const Aplicacion = () => {
    return (
        <div className="container">
            <div className="row m-5">
                <h3>Si tu intención es aprender y practicar la lengua de señas en cualquier parte que te encuentres, entonces esta App es para ti!  </h3>
            </div>

            <div className="row"> 
                <div className="card m-5" style={{"width": "36rem"}}>
                    <div className="card-body m-2">
                        <h5 className="card-title">IncluSeñas</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Aplicación móvil</h6>
                        <p className="card-text">IncluSeñas es una aplicación móvil gratuita y sin fines de lucro que permite aprender lo básico de Lengua de Señas Argentina (LSA),
                        <strong><u>Lengua de Señas Chilena (LSCH)</u></strong>, Lengua de Señas Colombiana (LSC), Lengua de Signos Española (LSE) y Lengua de Señas
                        Mexicana (LSM) de forma sencilla y lúdica, buscando así ayudar a la inclusión de personas sordas en la sociedad. <br></br>
                        Como puedes ver, con IncluSeñas se abre un abanico de posibilidades para aprender distintas lenguas de señas latinoamericanas,
                        descargala ya y amplía tu vocabulario!</p>
                        <a href="https://play.google.com/store/apps/details?id=app.aresan.miguel.inclusenas&hl=es&gl=US" className="card-link">Descarga desde Google Play Store</a>
                        <a href="https://apkcombo.com/es/incluse%C3%B1as/app.aresan.miguel.inclusenas/" className="card-link">Descarga como APK</a>

                    </div>
                </div>
            </div>

           

            <div className="row">
                <div className="col-12"> 
                    <img src="https://play-lh.googleusercontent.com/fFRiI4RMR_tDOTsm1liea-YgIGGrC27_Ck4QRjqP3a0xlauIU3UyvGVgEipTkDvYEvU=w526-h296-rw" className="img-fluid m-5" alt="img de la app"></img>
                    <img src="https://play-lh.googleusercontent.com/TpZqxJ-TdiUhFHZxnk8PV1G0vihoJajuCdU5PFtvMkpQq4GyQT4PafaESEdtAeHYaY4=w526-h296-rw" className="img-fluid m-5" alt="img de la app"></img>
                    <img src="https://play-lh.googleusercontent.com/6GQwb52Wu6qidnrO37yFlHDeYCKHOjkzfMRi8GAWLfAUXGLfIv1FqrH9lc5T6JaRP-o=w526-h296-rw" className="img-fluid m-5" alt="img de la app"></img>

                </div>
            </div>





        </div>
    )
}