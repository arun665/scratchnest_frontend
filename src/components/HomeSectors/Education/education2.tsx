import React from "react";
import "./education.scss";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";

import Footer from "../../Footer/footer2";
import { Link } from "react-router-dom";

import education from './education.png';

function Education() {
  return (
      <>
    <div className="education" id="education" >
     

     <div className="container-field" >
  

  <div className="row">

<div className="col-sm-6 col-md-6 col-xs-12">
    <div className="div"> 

<div className="row">

    
<div className="col-sm-12 col-md-12 col-xs-12">
   
<h1> ScratchNest<span> Education </span></h1> 
</div>
<div className="col-sm-12 col-md-12 col-xs-12">

<p > 
Technology at your doorstep through the  <br></br>
most interactive and dynamic platforms.
</p>
<br></br>
</div>
<div className="col-sm-12 col-md-12 col-xs-12">

<div id="btn1">
<Link to="/sector/Education">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out">Get Brochure </button>
</div>

</div>
</div>
</div>
</div>
  
<div className="col-sm-6 col-md-6 col-xs-12">
    
<img
              src={education}
              alt="RFID_image"
              className="beacon_img"
            />
</div>


<div className="col-sm-12 col-md-0 col-xs-12">

<div id="btn2">
<Link to="/sector/Education">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out">Get Brochure </button>
</div>

</div>

</div>
</div>



    </div>
     <Footer />
     </>
  );
}

export default Education;
