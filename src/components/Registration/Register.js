import { useForm } from "react-hook-form";
import react,{useState , useEffect} from 'react';
import Topheader  from "../top_header";
import "./Register.scss";
import img1 from './img.png';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/ScaleLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaRegEyeSlash } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import {connect} from 'react-redux';
import {AddPassCat , AddMessage , Disappear,captchaError} from '../../redux/action/PassAction.js';
import success from './success.png';
import ReCAPTCHA from "react-google-recaptcha";

import error from './error.png';
const Recaptcha = require('react-recaptcha');

const eye = <FontAwesomeIcon icon={faEye} />;


function Register(props){
  const [loader,setLoader]=useState(false);
  const [show, setShow] = useState(false);
  const [errorshow, setErrorShow] = useState(false);
const [captcha,setCaptcha]=useState(false);
  const handleShow = () => setShow(true);
const handleErrorShow=()=> setErrorShow(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
  };
   

  

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Registration Page";
      }, [])


      const handleClose = () => {
        setShow(false)
        props.Disappear();
         
      
      };


      const handleErrorClose = () => {
        setErrorShow(false)
        props.Disappear();
         
      
      };

      useEffect(() => {

        if(props.message!=""){
          setLoader(false);
          
          if(props.message=="data saved success"){
            handleShow();
          }
          else{
            handleErrorShow();
          }

     
  
  
        }
      });

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
  
var l=     <BarLoader  color="#1FD9F3"  size={150} />;
       
      
      const fetchData = ()=>{
             
        if(!captcha){
          props.captchaError();
        }
        else{

        setLoader(true);
        props.addPassCat(username,fullname,contact_no,email,address,city,pincode,password)
        }
     
        
      }


      const [username,setUsername]=useState('');
      const [fullname,setFullname]=useState('');
      const [contact_no,setContact]=useState('');
      const [email,setEmail]=useState('');
      
      const [password,setPassword]=useState('');
      const [address,setAddress]=useState('');
      const [city,setCity]=useState('');
      const [pincode,setPincode]=useState('');


      var callback = () => {
        console.log('Done!!!!');
      };
       
      // specifying verify callback function
      var verifyCallback =  (response) => {
        console.log(response);
        setCaptcha(true);
      };
    
    
  

return(<>

    <div id="register">
    <Topheader/>        
   
    <Modal show={show} className="modal"   onHide={() => setShow(false)}
      {...props}
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={success} style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p> Registered Successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleClose}>Close</button>
   </div>

        
  
    </Modal>

    <Modal show={errorshow} className="modal"   onHide={() => setErrorShow(false)}
      {...props}
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={error} style={{"width":"20%"}} />
         <h1 className="text-danger" style={{"textAlign":"center"}}> Error</h1> 
         <p> {props.message}  </p>
         <button className="btn btn-lg btn-danger" onClick={handleErrorClose}>Close</button>
   </div>

        
  
    </Modal>



        <div id="form" className="container-fluid">
            <div id="heading">
              {loader && l}
        
            <h1> Create an account</h1>
          
            <p> Create an account and explore the website’s features<br></br> {props.message}</p>
            </div>
            <div className="row">
  <div className="col-sm-5 col-md-5 col-12">
     
  <form>
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Username"  value={username}  onChange={ e=>(setUsername(e.target.value))}/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Full Name"  value={fullname}  onChange={ e=>(setFullname(e.target.value))}/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Contact No."  value={contact_no}  onChange={ e=>(setContact(e.target.value))}/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Email"  value={email}  onChange={ e=>(setEmail(e.target.value))}/>
  </div>
  
  <div className="pass-wrapper form-group">
        <input
        className="form-control"
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
          value={password}  onChange={ e=>(setPassword(e.target.value))}
        />
        <i onClick={togglePasswordVisiblity}> {eye} </i>
        

      </div>
  <div className="form-group">
    <input type="email" className="form-control" placeholder="Address"  value={address}  onChange={ e=>(setAddress(e.target.value))}/>
  </div>

  

  <div className="form-row">
    <div className="col">
      <input type="text" className="form-control"  placeholder="City" name="email" value={city}  onChange={ e=>(setCity(e.target.value))}/>
    </div>
    <div className="col">
      <input type="number"  className="form-control" placeholder="Pincode" name="pswd" value={pincode}  onChange={ e=>(setPincode(e.target.value))}/>
    </div>
  </div>
  <div className="form-group" style={{"padding-top":"5%"}}>
    <ReCAPTCHA 
      sitekey="6Lfnv_AbAAAAAOq8DUN79aJhPC5fP_aSdQUGQF3D"    render="explicit"
    onChange={verifyCallback} 
      onLoad={callback}
  />
  </div>
  <div className="form-group">
  
 <button type="button" className="btn btn-outline-primary" disabled={loader} onClick={fetchData}  > Submit </button>
  </div>

</form>
{/*disabled={loader} */ } 


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




const mapStatetoProps=(state)=>{
  return{
      status:state.status,
      category:state.category,
  loader:state.loader,
  message:state.message
  }
  }
  
  const mapDispatchtoProps=(dispatch)=>{
      return{
          addPassCat:function(username,fullname,contact_no,email,address,city,pincode,password){
              dispatch(AddPassCat(username,fullname,contact_no,email,address,city,pincode,password))
          },
          Disappear:function(){
            dispatch(Disappear())
          },
          captchaError:function(){
            dispatch(captchaError())
          }
  
  
      }
  
  }
  
  
  
  export default connect(mapStatetoProps, mapDispatchtoProps)(Register);