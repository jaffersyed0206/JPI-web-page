import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
         <div className="navigation-bar">
          <div className="container">
           <div className="row">
            <div className="col-md-4">
             <h5>JPI</h5>
            </div>
            <div className="col-md-4">
             <div className="row">
             <div className="col-md-4">
              <h6 className="text-center">PRODUCTS</h6>
             </div>
             <div className="col-md-4">
              <h6 className="text-center">PRICING</h6>
             </div>
             <div className="col-md-4">
              <NavLink className="navlink color-white" to="/Admin"><h6 className="text-center">ADMIN</h6></NavLink>
             </div>
             </div>
            </div>
            <div className="col-md-4">
              <div className="float-right">
              <div className="row">
                <div className="col-md-6">
                <NavLink to="/Login" className="navlink color-white"><h6 className="text-center">LOGIN</h6></NavLink>
                </div>  
                <div className="col-md-6">
                <NavLink to="/Register" className="navlink color-white"><h6 className="text-center">REGISTER</h6></NavLink>
                </div>  
              </div>
              </div>
            </div>
           </div>
          </div>
         </div>
        </div>
    )
}

export default Navigation;
