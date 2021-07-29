import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './linear1.png';
import img3 from './linear2.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";

function RfidProduct(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Linear Antenna"
      }, [])
return(<>
<div  id="linear_product">
<Helmet>
        <title>Linear Antenna</title>
        <meta name="description" content="linear polarized RFID antenna that provides reception and transmission of signals in the UHF frequency band. Both US and EU versions are available in this model" />
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
<h3>Linear Polarized </h3>    
<h4>9 dBi Antenna</h4>
<h5> SN - LA 101</h5>
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
   
         The ScratchNest SN-LA 101 is a far-field 9 dBi linear polarized RFID antenna that provides reception and transmission of signals in the UHF frequency band. Both US and EU versions are available in this model. The ScratchNest far-field RFID antenna comes with a heavy-duty polycarbonate housing, possesses female TNC connectors and excellent VSWR and axial ratios.
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
<div>
<video id="twoportvideo"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

</video>
</div>
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