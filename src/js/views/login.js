import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/login.css";

export const Login = () => {
    let navigate = useNavigate();
    const {actions, store} = useContext(Context);
        return (
            <div className="container">	
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    let m = event.target[0].value
                    let p = event.target[1].value
                    console.log(p,m);
                    if (m == '' && p == '' ){
                        alert("Debe completar datos")
                    }
                    
                    else if (actions.login(m,p)){
						
                        navigate('/inicio')
                    }

                    
                    }}>
                        <div className="col-md-6">
							<label for="exampleInputEmail1" class="form-label">Email</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						</div>
						<div className="col-md-6">
							<label for="exampleInputPassword1" class="form-label">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
						
                
                        <div className="col-md-7 form-check position-absolute end-0">
							<Link to="/forgotpassword">
								<span className="navbar-brand mb-0 h1">Forgot password</span>
							</Link>
						</div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );

};