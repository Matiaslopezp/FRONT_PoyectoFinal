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

				<div className="col-4">
					<div className="text-center">
						<h2 className="panel-heder">
						HEY! OYEEEE!
						</h2>
						<p>
						Si aun no te registras presiona y completa el formulario
						</p>
					</div>
					<div className="text-center">
						<Link to="/registerform">
							<button className="btn btn-primary">Register</button>
						</Link>
					</div>
				</div>


				<div className="col-4">	
					<span className="border border-info">
						<div className="text-center">
							<h2 className="panel-heder">
								HEY! OYEEEE!
							</h2>
							<p>
								Si aun no te registras presiona y completa el formulario
							</p>
						</div>
						<div className="text-center">
							<Link to="/registerform">
								<button className="btn btn-primary">Register</button>
							</Link>
						</div>
					</span>
				</div>
						
	
						
			</div>
		</div>
		
			
	);
};