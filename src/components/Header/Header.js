import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className ="row">
            <div className= " header">
              <div className="col-md-2"></div>
            <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-center justify-content-center p-4">

                <Link to="/home" className="nav-items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="nav-items">
                  <li>About us</li>
                </Link>
                <Link to="services" className="nav-items">
                  <li>Services</li>
                </Link>
                <Link to="/apply" className="nav-items">
                  <li>Apply</li>
                </Link>
              </ul>
            </div>
          </div>
     </div>           
 </div>
    );
};

export default Header;
/* <div  className ="nav-bar">
     <NavLink
  to="/home"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
  >
    Home
  </NavLink>
   <NavLink
  to="/about"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
   About us 
  </NavLink>
  <NavLink
  to="/university"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
   University
   </NavLink>
  <NavLink
  to="/services"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
   Services
  </NavLink>
    
        </div> */