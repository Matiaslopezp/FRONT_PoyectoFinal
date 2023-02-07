import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
	let navigate = useNavigate();
	return (
		<div className="todo">
			<div className="header-1">
				<img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
			</div>
			
			<div className="header-2">
                <img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674493644/QWE/traductor-removebg-preview_ks0wgh.png" />
            </div>

			<div className="row justify-content-evenly">

				<div className="registro col-4">
					<div className="text-center">
						<h2 className="panel-heder">
						Hey! Oyeee!
						</h2>
						<p>
						Si aun no te registras presiona y completa el formulario. Cuando creas una cuenta, tienes acceso a multiples funciones que te ayudaran en la comunicacion a traves de señas. 
						</p>
					</div>
					<div className="text-center">
						<Link to="/registerform">
							<button className="btn btn-primary">Register</button>
						</Link>
					</div>
				</div>


				<div className="login col-4">	
					
					<div className="text-center">
						<h2 className="panel-heder">
							Bienvenido de nuevo!
						</h2>
						<p>
							De vuelta a la comunidad! Ingresa a tu cuenta
						</p>
					</div>
					<div className="text-center">
						<Link to="/login">
							<button className="btn btn-primary">Login</button>
						</Link>
					</div>
					
				</div>
						
	
						
			</div>
		</div>
		
			
	);
};