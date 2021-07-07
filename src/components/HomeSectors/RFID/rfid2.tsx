import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./rfid2.scss";
import AOS from "aos";
import rfid from "./rfid.png";
import rfidphone from "./rfidphone.jpg";



function Rfid() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <>  
     <div className="rfid  container-fluid" id="rfid">

    <div className="container-fluid" >
  

  <div className="row">

  
<div className="col-sm-6 col-md-6 col-xs-12 ">
    
<img
              src={rfid}
              alt="RFID_image" id="img1"
              className="beacon_img"
            />
</div>



<div className="col-sm-6 col-md-6 col-xs-12">

    <div className="div"> 

<div className="row">
<div className="col-sm-12 col-xs-12 col-md-12">
<h1> <span>RFID</span>  Devices</h1> 
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

<p > 

Automate your Operations with the <br></br> 
ScratchNest RFID Device.

</p>

</div>
<div className="col-sm-12 col-xs-12 col-md-12">
  <div className="b1">
<Link to="/sector/rfid">
                            
<button className="btn btn-outline-primary" id="btn1"> Explore now  </button>

</Link>
<button className="btn btn-outline-primary" id="btn2">  Get Brochure </button>
</div>
</div>


</div>

</div>

</div>
<div className="col-sm-0 col-md-0 col-xs-12 ">
    
<img
              src={rfid}
              alt="RFID_image" id="img2"
              className="beacon_img"
            />
</div>


<div className="col-sm-12 col-md-0 col-xs-12">


  <div className="b2">
  <Link to="/sector/rfid">
                            
                            <button className="btn btn-outline-primary" id="btn1"> Explore now  </button>
                            
                            </Link>
                            <button className="btn btn-outline-primary" id="btn2">  Get Brochure </button>
                            
  </div>
</div>

</div>
</div>


      </div>
    </>
  );
}

export default Rfid;
