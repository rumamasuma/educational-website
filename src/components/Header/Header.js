import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className ="row">
            <div className= " header">
            <div className=" ">
            <div className="nav-container col-md-12  bg-clr">
              <ul className="d-flex align-items-center justify-content-center ">

                <Link to="/home" className="nav-item  ">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="nav-item">
                  <li>About us</li>
                </Link>
                <Link to="services" className="nav-item">
                  <li>Services</li>
                </Link>
                <Link to="/apply" className="nav-item">
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
