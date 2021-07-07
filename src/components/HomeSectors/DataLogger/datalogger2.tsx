import React from "react";

import "./datalogger.scss";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import logger from './logger2.png';

function DataLogger() {
  return (
    <div className="dataLogger" id="datalogger" >
    
<div className="container-field" >
  

  <div className="row">

  
<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="img1"
              src={logger}
              alt="RFID_image"
              className="beacon_img"
            />
</div>


<div className="col-sm-6 col-md-6 col-xs-12">

    <div className="div"> 

<div className="row">
<div className="col-sm-12 col-xs-12 col-md-12">
<h1> <span>Data</span>Logger</h1> 
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

<p >

Make monitoring easy with the AmbiTag<br></br>
Data Loggers from ScratchNest.

</p>
<br></br>
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn1">
<Link to="/sector/datalogger">
                        
<button className="btn btn-outline-primary" id="button1"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2">Get Brochure</button>
</div>
</div>




<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="img2"
              src={logger}
              alt="RFID_image"
              className="beacon_img"
            />


</div>




<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn2">
<Link to="/sector/datalogger">
                        
<button className="btn btn-outline-primary" id="button1"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2">Get Brochure</button>
</div>
</div>
</div>

</div>

</div>

</div>
</div>
    
    
    </div>
  );
}

export default DataLogger;
