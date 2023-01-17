import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Libreria } from "./views/libreria";
import { Canciones } from "./views/canciones";
import { Capsulas } from "./views/capsulas";
import { Mazapan } from "./views/mazapan";
import { Aplicacion } from "./views/aplicacion";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />

						<Route path="/libreria" element={<Libreria />} />
						<Route path="/mazapan" element={<Mazapan />} />
						<Route path="/canciones" element={<Canciones />} />
						<Route path="/capsulas" element={<Capsulas />} />
						<Route path="/aplicacion" element={<Aplicacion />} />




						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
