import React, { useState, useEffect, useContext } from "react";

import { useNavigate} from "react-router-dom";

import { Context } from "../store/appContext";



export const Registerform = () => {
    let navigate = useNavigate();
    const {actions, store} = useContext(Context);
        return (
            <div className="container-md">
                
                <form className="row g-3" onSubmit={(event)=>{
                    event.preventDefault();
                    console.log("este es la prueba",event);
                    let m = event.target[0].value
                    let p = event.target[1].value
                    let rp = event.target[2].value
                    let fn = event.target[3].value
                    let ad1 = event.target[4].value
                    let ad2 = event.target[5].value
                    let c = event.target[6].value
                    let s = event.target[7].value
                    let np = event.target[8].value
                    console.log(m,p,rp,fn,ad1,ad2,c,s,np);
                    if (p!=rp) {
                        alert("Las contraseñas deben ser identicas")
                    }
                    if (m=='' || p=='' || rp=='' || fn=='' || ad1=='' || ad2=='' || c=='' || s== '' || np=='' ){
                        alert("Debe completar datos")
                    }

                    else {
                        let register = actions.register({mail:m, password:p, fullname:fn, address1:ad1, address2:ad2, city:c, state:s, npostal:np})
                        
                        if (register){
                            alert("Registro completado")
                            navigate('/login')     
                        }
                        
                    }}}>

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
                    <div className="col-md-6">
                        <label for="inputFullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputFullname"/>
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
                        <label for="inputZip" className="form-label">N° postal</label>
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