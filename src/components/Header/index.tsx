import React from "react";
import "./header.scss";
import headerimg from "./phoneheader.png";

import header from './headerbg.png';


import headerbgphone from './headerbgphone.png';

import logger from './logger.png';

function Header() {
  return (
    <>
<div className="container-fluid header" id="header" >


  <div className="row">
    <div className="col-md-6 col-sm-6 col-xs-12">
<div className="div">
<h1> Welcome to</h1>
<h2> Scratch<span>Nest </span>  </h2>
<p>

<span>ScratchNest </span>pioneers in delivering customized 
experiences of the next-gen technologies and 
bringing innovation to everything you use. We 
develop RFID, NFC, Bluetooth devices and
Dataloggers crafted totally from scratch, 
delivering you with the never-before experience.
</p>

<div id="button1">
<button className="btn " id="first">Register </button>
<button className="btn" id="second">Explore Now </button>
</div>
</div>


    </div>
    <div className="col-md-6 col-sm-6 col-xs-12">
<img src="https://i.ibb.co/C1dc1H8/headerbg.png" className="headerbg" id="button1"/>
<img src={headerbgphone} className="headerbg" id="button2"/>

    </div>

    <div className="col-sm-0 col-md-0 col-xs-12">
    <div id="button2">
<button className="btn " id="first">Register </button>
<button className="btn" id="second">Explore Now </button>
</div>
    </div>
    
  </div>




  </div>    

    </>
  );
}

export default Header;
