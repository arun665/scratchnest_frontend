import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './Twoport.png';
import img3 from './Twoportimg2.png';
import Boxes from './boxes/boxes';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';

import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";

function Twoport(){

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Two Port Integrated Reader"
  }, [])
return(<>
<div  id="twoport_product">
<Helmet>
        <title>Two Port Integrated Reader</title>
        <meta name="description" content=" It boasts various features including a built-in 9 dBi circular polarized antenna, an external antenna port of 50 Ohm and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. Additionally, the range of RF power is 0 to 31.5 dBm which is adjustable via software." />
    </Helmet>

<TopHeader/>
    
  {/*  <video id="background-video" style={{ "height":"100vh" , "backgroundColor":"#f0eef0" , "width":"100vw"}}   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

</video>
*/}
<div >
<div className="contianer-fluid header">
<div className="row">
    <div className="col-sm-6 col-md-6 col-12">
<div id="headingdiv">
    <h1> Introducing the</h1>
<h2> ScratchNest</h2>
<h3>Integrated RFID</h3>    
<h4>2 - Port Reader</h4>
<h5> SN - IR 201</h5>
<div className="buttondiv">
<button className="btn btn1" >Coming Soon</button>
<button className="btn  btn2">GetBrochure</button> 

</div>
     </div>
    </div>
    <div className="col-sm-6 col-md-6 col-12">
<div id="img1div">
<img src={oneportimg} id="img1"></img>
</div>
<div className="buttondiv2">
<button className="btn btn1" >Coming Soon</button>
<button className="btn  btn2">GetBrochure</button> 

</div>
    </div>
    
</div>



</div>


<div className="container-fluid" id="div2">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
     
     
     
     {/*<img src={img3} id="img2" className="desktopimg"/>*/}




     <div id="myCarousel" className="carousel slide" data-ride="carousel">

  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1}  id="img2"  alt="Los Angeles" />
    </div>
    <div className="carousel-item">
      <img src={c2}  id="img2"  alt="Chicago" />
    </div>
    <div className="carousel-item">
      <img src={c3}  id="img2"  alt="New York" />
    </div>
  </div>
  
  <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
  
</div>




        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
         
       <div id="para1">
         <h1> Product Description</h1>
         <p> 

         ScratchNest SN-IR 201 is a compact and fully integrated two port Long Range RAIN RFID Reader which works in the ultra-high frequency range. It boasts various features including a built-in 9 dBi circular polarized antenna, an external antenna port of 50 Ohm and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. Additionally, the range of RF power is 0 to 31.5 dBm which is adjustable via software. This reader is completely water resistant and specially designed to bear all weather conditions.
         </p>
       </div>


        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
     <img src={img3} id="img2" className="mobileimg"/>
        </div>
        
      </div>

</div>
<div>
<Boxes/>
</div>


<div>
<Boxes2/>
</div>
<div>
  {/*
<video id="twoportvideo"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743786/2Port_1.0001_nnjuja.mp4" type="video/mp4" />
    

</video>
  */}
</div>
<div>
<Accordion/>
</div>





</div>
<Footer/>
</div>
</>
)


}



export default Twoport;