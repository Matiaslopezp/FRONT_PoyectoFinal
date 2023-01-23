import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/login.css";

export const Login = () => {
    
        return (
            <div className="container">	
                    <form onSubmit={(event)=>{
                    event.preventDefault();
                    let m = event.target[0].value
                    let p = event.target[1].value
                    let rp = event.target[2].value
                    if (p!=rp) {
                        alert("Las contraseñas deben ser identicas")
                    }
                    if (m=='' || p=='' || rp==''){
                        alert("Debe completar datos")
                    }
                    else {
						
                        navigate('/login')
                    }
                    }}>
                        <div className="col-md-6">
							<label for="exampleInputEmail1" class="form-label">Email</label>
							<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						</div>
						<div className="col-md-6">
							<label for="exampleInputPassword1" class="form-label">Password</label>
							<input type="password" class="form-control" id="exampleInputPassword1"/>
						</div>
						<div className="col-md-6">
                        	<label for="inputPassword4" className="form-label">Repeat Password</label>
                        	<input type="password" className="form-control" id="inputPassword4"/>
                    	</div>
                   </form>
                   <div className="col-md-7 form-check position-absolute end-0">
							<Link to="/forgotpassword">
								<span className="navbar-brand mb-0 h1">Forgot password</span>
							</Link>
						</div>
                    <button type="submit" class="btn btn-primary">Login</button>
                
            </div>
        );

};