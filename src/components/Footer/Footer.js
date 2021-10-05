import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
   <footer>
     <div className="footer-container footer-item">
       <div className="row ">
         <div className="col-md-10 mx-auto">
           <div className="row ">
             <div className="col-md-4 ">
               <h3>Get help</h3>
               <ul className="d-flex align-items-center justify-content-center p-2">

                <Link to="/home" className="footer-items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="footer-items">
                  <li>About us</li>
                </Link>
                <Link to="services" className="footer-items">
                  <li>Services</li>
                </Link>
                <Link to="/apply" className="footer-items">
                  <li>Apply</li>
                </Link>
              </ul>
              <div className="col-md-12">
               <p className ="copyright text-info"> DUST©All rights reserved-2021.</p>
             </div>
             </div>  
             <div className="col-md-2 ">
               <h3>Follow us </h3>
                <div className ='social-icon'>
                 <i class="fab fa-instagram "></i> 
                  <i class="fab fa-facebook-square p-4"></i>
                  <i class="fab fa-twitter "></i>
                  <i class="fab fa-whatsapp-square p-4"></i></div>
             </div>
             <div className="col-md-3">
        <div className="row">
        <div className= "col-md-10">
              <h3>Contact us by</h3>
               <p>Mail  : dust.bd@gmail.com</p> 
              <p> Mobile No.  : +880179088778</p>
           </div>
         </div>
             </div>
            <div className="col-md-3">
           <div className="row">
           <div  className= "col-md-12">
           <h3>Address</h3>
              <address>Dream University of Science  <br />&  <br /> Technology <br />
              23,Uttara,Model  town <br />
              Dhaka-1455
              </address>
             </div>  
            </div>
           </div>
         </div>
       </div>
     </div>
     </div>
   </footer> 
    );
};

export default Footer;