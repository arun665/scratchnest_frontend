import { IonCol, IonGrid, IonMenu, IonRow, IonText } from "@ionic/react";
import React from "react";
import "./footer2.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

function Footer() {
  const Twitter= () => {
    window.open("https://twitter.com/NestScratch");
  };
  const Instagram= () => {
    window.open("https://www.instagram.com/scratchnest/");
  };
  
  const Linkedin= () => {
    window.open("https://www.linkedin.com/company/scratchnest-private-limited/");
  };
  
  const facebook=()=>{
    window.open("https://www.facebook.com/ScratchNestPvtLtd");
  }
  return (
    <div className="footer2 container-fluid" >
     <div className="container-fluid">
       <div className="row">
           <div className="col-md-3 col-sm-3 col-xs-12">
           <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
              className="logofooter"
            />

<hr></hr>

            
           <div className="btn-group">
           <a onClick={Twitter} >
        
    <button type="button" className="btn  btn-lg text-white fa fa-twitter" > </button>
    </a>

    <a onClick={Linkedin}>
 
    <button type="button" className="btn  btn-lg text-white fa fa-linkedin"></button>
 </a>  
    <a onClick={facebook}>
           
    <button type="button" className="btn  btn-lg text-white fa fa-facebook"></button>
    </a>
    <a onClick={Instagram}>
           
    <button type="button" className="btn  btn-lg text-white fa fa-instagram"></button>
    </a>
    <a href="mailto:info@scratchnest.com">
     
    <button type="button" className="btn  btn-lg text-white fa fa-envelope"></button>
    </a>
  </div>


           </div>


           <div className="col-md-3 col-sm-3 col-xs-12 secondcol" >
       
<h2 id="subheading"> Quick Links </h2>
<br></br>

<ul className="list1">
<li className="white-text">
              <Link to="/">Home</Link>
            </li>
            <li className="white-text">
              <Link to="/about">About Us</Link>
            </li>
            <li className="white-text ">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="white-text ">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="white-text ">
              <Link to="/support">Support</Link>
            </li>



</ul>

       </div>


       
       <div className="col-md-3 col-sm-3 col-xs-12 secondcol sectorcol" >
       
       <h2 id="subheading"> Sectors </h2>
       <br></br>
       
       <ul className="list1">
       <li className="white-text">
              <Link to="/sector/rfid">RFID</Link>
            </li>
            <li className="white-text">
              <Link to="sector/beacon">Beacon</Link>
            </li>
            <li className="white-text dl">
              <Link to="sector/datalogger">Data Logger</Link>
            </li>

            <li className="white-text ">
              <Link to="sector/education">Education</Link>
            </li>
       
       
       
       </ul>
       
              </div>

              
       <div className="col-md-3 col-sm-3 col-xs-12 addresscol" >
       
       <h2 id="addressheading"> Address  </h2>
       
       <p className="address">
       Room No 6, 3rd floor, East Wing
          
              <br />
                M. Visvesvaraya Block,
              <br />
                IIT Ropar, Rupnagar,
              <br />
                Punjab, India - 140001
          </p>
              </div>
       
       
       




       </div>


<div className="col-sm-12 col-md-12 col-xs-12">
  
<p id="footerp"> Copyright © 2021 ScratchNest .
All rights reserved. </p>
</div>
     </div>
    </div>
  );
}

export default Footer;
