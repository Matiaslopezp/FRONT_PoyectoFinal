import React, { useState, useEffect, useContext } from "react";

import { useNavigate} from "react-router-dom";

import { Context } from "../store/appContext";



export const Registerform = () => {
    let navigate = useNavigate();
        return (
            <div className="container-md">
                
                <form className="row g-3" onSubmit={(event)=>{
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
                        alert ("registro completado")
                        navigate('/login')
                    }
                    }}>

                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Repeat Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        );
        
};