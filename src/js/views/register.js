import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
	let navigate = useNavigate();
	return (
		<div className="container">
			<div className="todo">
				<div className="header-1">
					<img src="https://res.cloudinary.com/dws1jugpv/image/upload/v1674146531/QWE/T_ENSE%C3%91O-removebg-preview_1_qgutke.png" />
				</div>
			
			</div>

			<div className="container-sm row justify-content-between ">

				<div className="ml-auto container-sm">
					<div className="panel-header col-4">
						<h2 className="panel-heder">
						HEY! OYEEEE!
						</h2>
						<p>
						Si aun no te registras presiona y completa el formulario
						</p>
					</div>
					<Link to="/registerform">
						<button className="btn btn-primary">Register</button>
					</Link>
				</div>


				<div className="col-4 position-absolute end-0">	
					<div className="panel-header col-4">
						<h2 className="panel-heder">
							HEY! OYEEEE!
						</h2>
						<p>
							Si aun no te registras presiona y completa el formulario
						</p>
					</div>
					<Link to="/registerform">
						<button className="btn btn-primary">Register</button>
					</Link>
					
				</div>
						
	
						
			</div>
		</div>
		
			
	);
};