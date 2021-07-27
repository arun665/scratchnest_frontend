import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './oneportimg.png';
import img3 from './img3.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";

function RfidProduct(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "One Port Integrated Reader";
      }, [])
return(<>
<div  id="oneport">
<Helmet>
  

        <title>One Port Integrated Reader</title>
        <meta name="description" content=" It boasts various features including a built-in 9 dBi circular polarized antenna and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. To add on, the range of RF power is 0 to 30 dBm which is adjustable via software." />
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
<h4>1 - Port Reader</h4>
<h5> SN - IR 101</h5>
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

         ScratchNest SN-IR 101 is a compact and fully integrated Long Range RAIN RFID Reader that works in the ultra-high frequency range. It boasts various features including a built-in 9 dBi circular polarized antenna and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. To add on, the range of RF power is 0 to 30 dBm which is adjustable via software. This reader is completely water resistant and specially designed to bear all weather conditions.
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
<video id="twoportvideo"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

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



export default RfidProduct;