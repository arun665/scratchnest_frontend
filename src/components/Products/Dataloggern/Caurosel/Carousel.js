import React from "react";
import { Fade } from "react-slideshow-image";
import "./carousel2.scss";
import "react-slideshow-image/dist/styles.css";
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647956/5_dwtxbb.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647960/4_uabjrd.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647963/3_oiyhwb.png",
];

const Carousel2 = () => {
  return (


<div id="applications">

<div id="applicationsheading">
<h1> <span> Applications </span> of the AmbiTag</h1>
<p> Here are some applications of the  AmbiTag Data Logger. </p>
</div>



<div id="demo" class="carousel slide carouseldesktop" data-ride="carousel">

  
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    
    
  </ul>
  

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img1} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Vaccine Temperature 
Logging</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>

<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img3} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Storage and Freezer
Monitoring</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>

<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img2} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Sea Freights and
Air Freights</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>



      </div>


    </div>
    <div class="carousel-item">

    <div class="row">
<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img1} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Vaccine Temperature 
Logging</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>

<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img3} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Storage and Freezer
Monitoring</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>

<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img2} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Sea Freights and
Air Freights</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>



      </div>


    </div>
   
   
  </div>
  
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>



<div id="demo2" class="carousel slide carouselphone" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo2" data-slide-to="0" class="active"></li>
    <li data-target="#demo2" data-slide-to="1"></li>
    <li data-target="#demo2" data-slide-to="2"></li>
  </ul>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row">
<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img1} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Vaccine Temperature 
Logging</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>
</div>
    </div>

    <div class="carousel-item ">
    <div class="row">
<div className="col-sm-4 col-md-4 col-xs-12">
<div class="card">
  <div >       <img src={img3} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Storage and Freezer
Monitoring</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>
</div>
    </div>


    <div class="carousel-item ">
    <div class="row">
<div className="col-sm-12 col-md-12 col-xs-12">
<div class="card">
  <div >       <img src={img2} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>
Sea Freights and
Air Freights
</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

</div>
</div>
    </div>

  </div>

  
  <a class="carousel-control-prev" href="#demo2" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo2" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>



</div>




</div>
  

  );
};
export default Carousel2;
