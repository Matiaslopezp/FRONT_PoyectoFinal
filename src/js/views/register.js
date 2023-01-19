import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";

export const Register = () => {
    const { store, actions } = useContext(Context);
	return (
		<div className="container row justify-content-between">
			<div className="col-4">	
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1"/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Repeat Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1"/>
					</div>
					<div class="mb-3 form-check">
						<Link to="/forgotpassword">
							<span className="navbar-brand mb-0 h1">Forgot password</span>
						</Link>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
			<div className="col-4">
				<img src="https://i.pinimg.com/736x/83/3b/ff/833bffeac14ec8e2664718342965500f.jpg"/>
			</div>	
		</div>
	);
};