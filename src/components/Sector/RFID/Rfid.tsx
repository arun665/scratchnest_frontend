
import Topheader from "../../top_header/index";
import  "./Rfid.scss";
import { useEffect } from "react";
import bg1 from './bg.png';
import bg2 from './bgphone.png';
import rfidimg2 from './div2rfid.png';
import Fixed from './fixed/Fixed';
import Antenna from './Antenna/antenna';
import Integrated from './Integrated/Integrated';
import Carousel2 from './Caurosel/Carousel.js';
import Footer from "../../Footer/footer2";
import Swiper from './swiper/swiper';
import {Helmet} from "react-helmet";
function RfidSec(){
  
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "RFID Devices"
      }, [])
      
    return(<div id="rfidSec">
    <Helmet>
        <title>RFID Devices</title>
        <meta name="description" content="A one-point solution to the haphazard of maintaining a record of your assets, Radio Frequency Identification is amongst the most reliable and efficient technologies that lay information at your footsteps within seconds. ScratchNest RFID products and solutions are custom designed from scratch, suiting your requirements, and cover the entire spectrum of HF and UHF RFID." />
    </Helmet>

<Topheader/> 

<div className="container-fluid" >
<div className="row div1">
    <div className="col-sm-6 col-md-6 col-xs-12">
        <div id="nesteddiv1">

            <h1> Scratch<span>Nest</span></h1>
        <h2> RFID <br></br> DEVICES </h2>
        <p> Automate your operations and bring precision at your doorstep
with our RFID products and solutions.</p>
        </div>
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12">
     <img src={bg1} id="img1" />    
    </div>
  
    <div className="col-sm-6 col-md-6 col-xs-12">
     <img src={bg2} id="img2" />    
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12">
     <p id="phonep"> Automate your operations and bring precision at your doorstep
with our RFID products and solutions.</p> 
    </div>
</div>
<div className="row" id="row2">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="div2">
            <h1> What is RFID?</h1>
            <p> 
            A one-point solution to the haphazard of maintaining a record of your assets, Radio Frequency Identification is amongst the most reliable and efficient technologies that lay information at your footsteps within seconds. ScratchNest RFID products and solutions are custom designed from scratch, suiting your requirements, and cover the entire spectrum of HF and UHF RFID. They deliver the highest speeds, greatest efficiencies, and full-fledged automation by locating and recording the tagged objects, thereby leading to productive and efficient workplace management.
            </p>
        </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
            <img src={rfidimg2} id="div2img" />
        </div>
      </div>
     
      <Fixed/>
<Integrated/> 
<Antenna/>

</div>
<Carousel2/>
 
<Footer/>

    </div>
    )
}

export default RfidSec;