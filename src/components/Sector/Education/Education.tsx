
import Topheader from "../../top_header/index";
import  "./Rfid.scss";
import { useEffect } from "react";

import Footer from "../../Footer/footer2";
import img1 from './img1.png';
import img2 from './img2.png';
import { Link } from "react-router-dom";


function Education(){
  
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(<div id="educationSec">


<Topheader/> 

<div className="container-fluid" >
<div className="row div1">
    <div className="col-sm-6 col-md-6 col-xs-12">
        <div id="nesteddiv1">

            <h1> Scratch<span>Nest</span></h1>
        <h2> EDUCATION</h2>
        <p> 

        ScratchNest Education brings technology education brought to your doorstep through the most interactive and dynamic platforms.
        </p>
        </div>
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12">
     <img src={img1} id="img1" />    
    </div>
  
    <div className="col-sm-6 col-md-6 col-xs-12">
     <img src={img1} id="img2" />    
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12">
     <p id="phonep"> 
     ScratchNest Education brings technology education brought to your doorstep through the most interactive and dynamic platforms.
     
</p> 
    </div>
</div>
<div className="row" id="row2">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div id="div2">
            <h1> IOT Lab</h1>
            <p> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <Link to="/">
            <button className="btn btn-primary" id="btn"> Explore now</button> </Link>
        </div>
        </div>

        
      </div>
     

</div>

<Footer/>

    </div>
    )
}

export default Education;