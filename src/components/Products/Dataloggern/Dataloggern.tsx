import React, { useEffect, useRef } from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./DL.scss";
import Footer from "../../Footer/footer2";

import { useState } from "react";
import AOS from "aos";
import Featurecaurosel from "./Caurosel/Featurecaurosel_dl.js";
import Carousel2 from './Caurosel/Carousel.js';

import Video from './video/video.js';

import Header from '../../top_header/index';
import { useHistory } from "react-router";
import img1 from './img.png'; 
import img2 from './bg.png'; 
import img3 from './img2.png';
import SwiperDataLogger from './Swiper/swiper';
import vector from './Vector.png';
import vector1 from './Vector1.png';
import vector2 from './Vector-2.png';
import vector3 from './Vector-3.png';
import vector4 from './Vector-4.png';
import vector5 from './Vector-5.png';
import vector6 from './Vector-6.png';
import vector7 from './Vector-7.png';
import {Helmet} from "react-helmet";

import Accordion from './accordion';

interface JQuery {
  switchClass(): void;
}

function Dataloggern(props: any) {
  const history = useHistory();
  const menuRef: any = useRef(null);
  const handleClick = React.useCallback((e: any) => {
    console.log("CLICK");
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setShowModal(false);
      console.log("outside click");
      return;
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AmbiTag-Data Logger"
  }, [])
  const [showModal, setShowModal] = useState(false);
  console.log(showModal, " Modall");

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
    if (showModal) {
      //attach event listner to close menu on outside click.
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [handleClick, showModal]);

  return (<>
   <Helmet>
        <title>Ambitag-DataLogger</title>
        <meta name="description" content="The AmbiTag temperature data logger is a compact sadasdasdadas USB device that records the temperature of its immediate surroundings continuously and generates alert when the temperature goes beyond pre-set limits." />
    </Helmet>

  <Header/>
    <div className="dataloggerproduct">
      <div className="container-fluid div1">
        <div className="row">
   <div className="col-sm-6 col-md-7 col-xs-12">
 <div id="heading">
<h1> Introducing the</h1>
<h2> ScratchNest</h2>
<h3>AmbiTag</h3>
<h4> SN - DL 101</h4>
<div id="button1">
  <button className="btn btn-primary btn1">Order Now</button>
  <button className="btn btn-primary btn2">Get Brochure</button>
  
</div>
 </div>
   </div>
   <div className="col-sm-6 col-md-5 col-xs-12">
<img src={img1} id="img1" />
   </div>
   <div className="col-sm-4 col-md-5 col-xs-12">
   <div id="button2">
  <button className="btn btn-primary btn3">Order Now</button>
  <button className="btn btn-primary btn4">Get Brochure</button>
  
</div>


   </div>

        </div>
      </div>

    <div className="container-fluid" id="div2">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
     <img src={img3} id="img2" className="desktopimg"/>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
         
       <div id="para1">
         <h1> What is the AmbiTag?</h1>
         <p> The AmbiTag temperature data logger is a compact sadasdasdadas
 USB device that records the temperature of its 
immediate surroundings continuously and 
generates alert when the  temperature goes 
beyond pre-set limits. The recorded data can be 
retrieved by inserting the USB into any computer</p>
       </div>


        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
     <img src={img3} id="img2" className="mobileimg"/>
        </div>
        
      </div>

</div>

<div className="container-fluid div3">

  <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12">
      <div id="para2">
      <h1> <span> Features </span> of the AmbiTag </h1>
<p>These are the major and improtant features of our product.  </p>
</div>
    </div>

    <div className="col-sm-12 col-md-12 col-xs-12">

<div className="row" id="nestedrow">

  <div className="col-sm-3 col-md-3 col-6">

  <div className="card" data-aos="fade-left">
  <div className="card-header">

<img src={vector} id="nestedimg" />

  </div>
  <div id="cardpara">Auto Generated 
PDF Report</div>
</div>

  </div>


  <div className="col-sm-3 col-md-3 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector1} id="nestedimg" />

</div>
<div id="cardpara">

Long logging
period of 90 days
</div>
</div>

</div>


<div className="col-sm-3 col-md-3  col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector2} id="nestedimg" />

</div>
<div  id="cardpara">Inbuilt USB
function</div>
</div>

</div>


<div className="col-sm-3 col-md-3  col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector3} id="nestedimg" />

</div>
<div id="cardpara">Slim and compact design</div>
</div>

</div>



<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector4} id="nestedimg" />

</div>
<div  id="cardpara">IP65 rating
(optional)</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector5} id="nestedimg" />

</div>
<div id="cardpara">Long Battery
life device</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector6} id="nestedimg" />

</div>
<div id="cardpara">Plug and Play device</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector7} id="nestedimg" />

</div>
<div id="cardpara">Alarm for low and high temp.</div>
</div>

</div>




</div>


    </div>
  </div>
</div>

<Carousel2/>

<Video/> 
<Accordion/>

    </div>
     
<Footer/>
    </>
  );
}

export default Dataloggern;
