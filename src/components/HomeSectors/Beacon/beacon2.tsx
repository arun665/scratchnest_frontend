import React from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./beacon2.scss";
import beaconphone from "./beaconphone.jpg";
import beacon from "./beacon2.png";


import { Link } from "react-router-dom";
function Beacon() {
  return (
    <>
      <div className="beacon" id="beacon2" >

<div className="container-fluid" >
  

  <div className="row">

<div className="col-sm-5 col-md-5 col-xs-12">
    <div className="div"> 

<h1 > Beacon </h1> 
<p > 
Communication device redefined. <br></br>
Experience the power of BLE with <br></br>
ScratchNest's Beacons.
  </p>

<div id="btn1">
<Link to="/sector/Beacon">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out">Get Brochure </button>
</div>
</div>
</div>
  
<div className="col-sm-7 col-md-7 col-xs-12">
    
<img
              src={beacon}
              alt="RFID_image"
              className="beacon_img" id="img1"
            />


</div>

<div className="col-sm-12 col-md-0 col-xs-12">

<div id="btn2">
<Link to="/sector/Beacon">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out">Get Brochure </button>
</div>

</div>

</div>
</div>


            </div>
    </>
  );
}

export default Beacon;
