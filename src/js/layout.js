import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import {Home} from "./views/home"
import {Traductor} from "./views/traductor"
import {Restaurant} from "./views/restaurant.js"
import {Saludos} from "./views/saludos"
import {Viaje} from "./views/viaje"
import {Compras} from "./views/compras"

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { TraduccionC } from "./component/traduccionCarta";
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
						<Route path="/traductor" element={<Traductor/>} />
						<Route path="/compras" element={<Compras/>} />
						<Route path="/viaje" element={<Viaje/>} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/restaurant" element={<Restaurant />} />
						<Route path="/saludos" element={<Saludos/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
