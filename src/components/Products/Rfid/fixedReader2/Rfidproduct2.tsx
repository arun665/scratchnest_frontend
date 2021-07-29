import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './fixed2.png';
import img3 from './fixed22.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import { useEffect } from 'react';

import {Helmet} from "react-helmet";


function Twoport(){

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Two Port Fixed Reader"
  }, [])
return(<>
<div  id="fixed2port_product">
<TopHeader/>
<Helmet>
        <title>Two Port Fixed Reader</title>
        <meta name="description" content="ScratchNest SN-FR 201 is a fixed two port RAIN RFID Reader which works in the ultra-high frequency range. It boasts various features including two antenna ports and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use." />
    </Helmet>

    
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
<h3>Fixed RFID</h3>    
<h4>2 - Port Reader</h4>
<h5> SN - FR 201</h5>
<div className="buttondiv">
<button className="btn btn1" >Order Now</button>
<button className="btn  btn2">GetBrochure</button> 

</div>
     </div>
    </div>
    <div className="col-sm-6 col-md-6 col-12">
<div id="img1div">
<img src={oneportimg} id="img1"></img>
</div>
<div className="buttondiv2">
<button className="btn btn1" >Order Now</button>
<button className="btn  btn2">GetBrochure</button> 

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
         <h1> Product Description</h1>
         <p> 

         ScratchNest SN-FR 201 is a fixed two port RAIN RFID Reader which works in the ultra-high frequency range. It boasts various features including two antenna ports and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. Additionally, the range of RF power is 0 to 30 dBm which is adjustable via software.
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

</div>
<div>
<Boxes2/>
</div>
<div>
  {/*
<video id="background-video"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618744237/fixedreader_2port.mp4" type="video/mp4" />
    

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