import { useForm } from "react-hook-form";
import {useState , useEffect} from 'react';
import Topheader  from "../top_header";
import "./Register.scss";
import img1 from './img.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaRegEyeSlash } from "react-icons/fa";

const eye = <FontAwesomeIcon icon={faEye} />;

function Register(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Tracking Beacon";
      }, [])

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
  
return(<>

    <div id="register">
    <Topheader/>        
        
        <div id="form" className="container-fluid">
            <div id="heading">
            <h1> Create an account</h1>
            <p> Create an account and explore the website’s features</p>
            </div>
            <div className="row">
  <div className="col-sm-5 col-md-5 col-12">
     
  <form>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Username" id="email"/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Full Name" id="email"/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Contact No." id="email"/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Email" id="email"/>
  </div>
  
  <div className="pass-wrapper form-group">
        <input
        className="form-control"
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
          
        />
        <i onClick={togglePasswordVisiblity}> {eye} </i>
        

      </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Address" id="email"/>
  </div>

  

  <div className="form-row">
    <div className="col">
      <input type="text" className="form-control" id="email" placeholder="City" name="email"/>
    </div>
    <div className="col">
      <input type="password" className="form-control" placeholder="Pincode" name="pswd"/>
    </div>
  </div>

  <div className="form-group">
 <button className="form-control btn btn-outline-primary" type="submit" > Submit </button>
  </div>
</form>



      </div> 
      <div className="col-sm-7 col-md-7 col-12">
     <img src={img1} />
     </div> 
                      
                       
            </div>
            
             </div>
    </div>
    </>
)


}




export default Register;