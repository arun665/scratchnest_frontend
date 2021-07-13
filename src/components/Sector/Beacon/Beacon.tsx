
import Topheader from "../../top_header/index";
import  "./Rfid.scss";
import { useEffect } from "react";
import bg1 from './bg.png';
import bg2 from './bg.png';
import rfidimg2 from './div2Beacon.png';
import Footer from "../../Footer/footer2";
import Beacon2 from "./DataLogger/datalogger2";
function BeaconSec(){
  
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(<div id="Beacon_Sec">


<Topheader/> 

<div className="container-fluid" >
<div className="row div1">
    <div className="col-sm-5 col-md-5 col-xs-12">
        <div id="nesteddiv1">

            <h1> Scratch<span>Nest</span></h1>
        <h2> BEACONs</h2>
        <p> 

        Based on a highly efficient, short range communication technology consuming the least power, experience the power of BLE with ScratchNest's Beacons.

        </p>
        
        </div>
    </div>
    <div className="col-sm-7 col-md-7 col-xs-12">
     <img src={bg1} id="img1" />    
    </div>
    <div className="col-sm-7 col-md-7 col-xs-12">
     <img src={bg2} id="img2" />    
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12 div">
     <p id="phonep"> 
     
     Based on a highly efficient, short range communication technology consuming the least power, experience the power of BLE with ScratchNest's Beacons.
</p> 
    </div>
</div>
<div className="row" id="row2">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="div2">
            <h1> What is a Beacon?</h1>
            <p> 
        
            A data logger is an electronic device that records your data over time. It works with built-in sensors, which detect the change with time. If it is based on a digital processor then also called a digital data logger (DDL). They generally are small, battery-powered, portable, and equipped with a microprocessor, internal memory for data storage,and sensors.

            </p>
        </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
            <img src={rfidimg2} id="div2img" />
        </div>
      </div>
     

</div>
<Beacon2/>
 
<Footer/>

    </div>
    )
}

export default BeaconSec;