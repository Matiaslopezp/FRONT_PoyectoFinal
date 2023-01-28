import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Forgotpassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>	
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Send password</button>
                        
                    </div>

				</form>
			</div>
			
		</div>
	);
};