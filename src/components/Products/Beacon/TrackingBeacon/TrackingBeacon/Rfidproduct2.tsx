import TopHeader from '../../../../top_header/index';
import Footer from '../../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './beacon1.png';
import img3 from './beacon2.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";

function RfidProduct(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Tracking Beacon";
      }, [])
return(<>
<div  id="Beacon_product">
<Helmet>
        <title>Tracking Beacon</title>
        <meta name="description" content="It is the latest developed technology which connects and transmits the information to your smart devices. It also makes location based searches and interaction easier with this connectivity technology." />
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
<h3>Tracking Beacon</h3>    

<h5> SN - TB 101</h5>
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
<button className="btn btn1" >Coming soon</button>
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
         <h1> What is the Beacon?</h1>
         <p> 
         It is the latest developed technology which connects and transmits the information to your smart devices. It also makes location based searches and interaction easier with this connectivity technology.These are small wireless transmitters which use Bluetooth low energy (Ble) technology, which sends signals to your smart devices.
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
{/*
<video id="beaconvideo"   loop autoPlay muted>
    <source  src="https://res.cloudinary.com/dpysmqax5/video/upload/v1619894003/beacon_s_uronzf.mp4" type="video/mp4" />
    

</video>
*/}
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